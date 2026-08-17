import React, { useState } from 'react';
import { Mail, Github, ArrowUpRight, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Sitios Web & Landing Pages',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Sitios Web & Landing Pages',
    'Catálogos Digitales & E-Commerce',
    'Sistemas & Paneles Administrativos',
    'Automatización & Asistentes IA',
    'Consulta General / Otro'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor completa todos los campos requeridos.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const payload = {
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      service: formData.service,
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
      source: 'izerick.dev'
    };

    try {
      const telegramText = `🔔 *¡Nuevo Lead en izerick.dev!*\n\n` +
        `👤 *Nombre:* ${payload.name}\n` +
        `📬 *Contacto:* ${payload.contact}\n` +
        `💼 *Servicio:* ${payload.service}\n` +
        `📝 *Mensaje:*\n${payload.message}\n\n` +
        `📅 _Fecha: ${new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}_`;

      // 1. Direct High-Speed Telegram via Nginx
      const tgPromise = fetch('/api/telegram-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '5265465071',
          text: telegramText,
          parse_mode: 'Markdown'
        })
      });

      // 2. n8n Automation Engine (Notion CRM logging)
      const n8nPromise = fetch('https://flow.izerick.dev/webhook/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => null);

      const [tgRes] = await Promise.all([
        tgPromise,
        n8nPromise,
        new Promise((resolve) => setTimeout(resolve, 500))
      ]);

      if (!tgRes.ok) {
        throw new Error('Error al enviar mensaje');
      }

      setStatus('success');
      setFormData({
        name: '',
        contact: '',
        service: 'Sitios Web & Landing Pages',
        message: ''
      });
    } catch {
      setStatus('error');
      setErrorMessage('Ocurrió un error al enviar. Puedes escribirme directo a eric123joel@gmail.com.');
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="tech-card rounded-3xl p-6 sm:p-10 md:p-12 space-y-10 relative overflow-hidden text-left border-rose-500/30 shadow-2xl">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 mono-label text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Iniciemos un Proyecto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              ¿Conversamos sobre tu proyecto?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Cuéntame qué necesitas construir o mejorar. Recibiré tu mensaje de inmediato y te responderé en menos de 24 horas con una propuesta clara.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <span className="mono-label text-xs text-rose-400 block mb-2">Canales Directos</span>
              
              {/* Email Direct */}
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className="p-4 sm:p-5 rounded-2xl bg-[#140b0f]/90 border border-rose-900/40 hover:border-rose-500/50 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-heading block group-hover:text-rose-300 transition-colors">
                      Correo Electrónico
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">
                      {PORTFOLIO_DATA.personalInfo.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
              </a>

              {/* GitHub Profile */}
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-[#140b0f]/90 border border-rose-900/40 hover:border-rose-500/50 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-heading block group-hover:text-rose-300 transition-colors">
                      GitHub Oficial
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">
                      github.com/izerick
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
              </a>

              {/* Badges Info */}
              <div className="p-5 rounded-2xl bg-[#10090c]/70 border border-rose-950/60 space-y-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Quevedo, Los Ríos — Ecuador 🇪🇨</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Disponibilidad inmediata para nuevos proyectos</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-rose-950/40">
                  ⚡ Notificaciones conectadas en tiempo real
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#120a0e]/95 p-6 sm:p-8 rounded-2xl border border-rose-900/40 shadow-xl space-y-6">
              
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    ¡Mensaje Enviado con Éxito! 🎉
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Ya recibí tu notificación. Revisaré los detalles y te responderé lo más pronto posible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-300 text-xs font-mono transition-colors"
                  >
                    ← Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Tu Nombre <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090407] border border-rose-900/40 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    {/* Email / Contact */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Correo o WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="carlos@empresa.com o 099..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090407] border border-rose-900/40 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      ¿Qué tipo de proyecto deseas construir?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090407] border border-rose-900/40 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 text-sm text-white outline-none transition-all cursor-pointer"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv} className="bg-[#140b0f] text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Detalles o idea del proyecto <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre las funciones clave, objetivos o tiempos que tienes en mente..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090407] border border-rose-900/40 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 hover:shadow-rose-600/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group font-heading"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        <span>Enviar Mensaje / Propuesta</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
