import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Check, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  HelpCircle,
  Award,
  Headphones,
  Send
} from 'lucide-react';

export const LandingPageOffer: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitPromoLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;

    setIsSending(true);
    try {
      const payload = {
        name: clientName,
        contact: clientContact,
        service: 'OFERTA: Plan Suscripción ($35 USD / mes)',
        message: '🔥 SOLICITUD DE OFERTA EXCLUSIVA:\n• Plan: Landing Page Todo Incluido por $35/mes (Contrato 12 meses)\n• Incluye: Dominio .com, Servidor Cloud VPS 24/7, Certificado SSL y Mantenimiento continuo.\n• Tiempo de Entrega: 5 a 7 días hábiles.',
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSentSuccess(true);
      } else {
        alert('Hubo un inconveniente al enviar la solicitud. Intenta de nuevo por favor.');
      }
    } catch (err) {
      alert('Error de conexión con el servidor de leads.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Oferta Especial Landing Page</span>
        </div>

        {/* HERO SECTION OF DEDICATED LANDING */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(244,63,94,0.25)]"
          >
            <Flame className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
            <span>Plan Suscripción Web • Todo Incluido</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl font-black text-white font-heading tracking-tight leading-tight"
          >
            Tu Página Web Profesional por una <br />
            <span className="crimson-gradient-text">Cuota Mensual de $35 USD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-lg mt-6 leading-relaxed max-w-2xl mx-auto"
          >
            Lanza la presencia digital de tu negocio sin descapitalizarte. Te entregamos tu web 100% lista con Dominio, Servidor Cloud 24/7, Candado SSL y Mantenimiento continuo incluido.
          </motion.p>
        </div>

        {/* PRICING & FEATURES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mb-24">
          
          {/* Main Plan Card (Left 7 Cols) */}
          <div className="lg:col-span-7 tech-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#180a13] to-[#0f060b] border-2 border-rose-500/50 shadow-[0_0_60px_rgba(244,63,94,0.25)] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-600 to-red-600 text-white text-[11px] font-mono font-bold px-5 py-1.5 rounded-bl-2xl shadow-md uppercase tracking-wider">
              🔥 Oferta Activa
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-widest block mb-1">
                TODO INCLUIDO — SIN LETRA CHICA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Plan Landing Corporativa Pro
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                La solución definitiva para profesionales y empresas en crecimiento.
              </p>
            </div>

            {/* Price Box */}
            <div className="p-6 rounded-2xl bg-[#090407] border border-rose-950/80 mb-8 flex items-baseline justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-mono">INVERSIÓN MENSUAL</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-6xl font-black text-white font-heading">$35</span>
                  <span className="text-slate-400 text-sm font-mono">USD / mes</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold">
                  Contrato 12 Meses
                </span>
                <span className="block text-[11px] text-emerald-400 font-semibold mt-1.5 flex items-center justify-end gap-1">
                  <Check className="w-3.5 h-3.5" /> Pago inicial de solo $35
                </span>
              </div>
            </div>

            {/* In-depth Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Globe, title: 'Dominio Oficial .com Incluido', desc: 'Registramos y configuramos tu nombre web propio (ej: tuempresa.com).' },
                { icon: Zap, title: 'Servidor Cloud VPS 24/7 de Alta Velocidad', desc: 'Alojado en infraestructura de primer nivel con 99.9% de disponibilidad garantizada.' },
                { icon: ShieldCheck, title: 'Certificado de Seguridad SSL Oficial', desc: 'Candado verde https:// y protección de datos para tus visitantes.' },
                { icon: Sparkles, title: 'Diseño Web Responsive a Medida', desc: 'Estructurada para enamorar visualmente tanto en celulares como en computadoras.' },
                { icon: Award, title: 'Posicionamiento SEO Local en Google', desc: 'Optimizada técnicamente para que tus clientes te encuentren al buscar tus servicios.' },
                { icon: Headphones, title: 'Mantenimiento & Soporte Continuo', desc: 'Cambios de fotos, textos, números y respaldos periódicos sin cobros por hora.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5 text-rose-400">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Proposal Request Form */}
            {sentSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-2 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white font-heading">¡Solicitud de Oferta Enviada a Erick!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  He recibido tu solicitud del Plan de $35 USD/mes en mi Telegram y Notion CRM. Te contactaré en breve para coordinar tu dominio y diseño.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitPromoLead} className="p-6 rounded-2xl bg-[#0a0408] border border-rose-950 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Comenzar con el Primer Mes ($35 USD)
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">
                  Ingresa tus datos y te contactaremos para comenzar el desarrollo de inmediato.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre / Empresa *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />

                  <input
                    type="text"
                    required
                    placeholder="WhatsApp o Correo de Contacto *"
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-all group"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSending ? 'Enviando a Telegram...' : 'Solicitar Plan por $35/mes'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Billing FAQs & How It Works (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* How billing works card */}
            <div className="tech-card rounded-2xl p-6 bg-[#13070e]/80 border border-rose-950/60">
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-rose-400" />
                ¿Cómo funciona el pago mensual?
              </h3>
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-white block mb-1">1. Se paga por adelantado al iniciar:</strong>
                  Pagas tus primeros <strong>$35 USD</strong> para arrancar el proyecto. Con eso compramos tu dominio .com y levantamos tu servidor.
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-white block mb-1">2. Entrega en 5 a 7 días:</strong>
                  Diseñamos tu página, la revisas, la aprobamos y sale en vivo inmediatamente.
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-white block mb-1">3. Cuota mensual de $35:</strong>
                  Pagas cada 30 días mientras dure tu contrato de 12 meses, manteniendo tu servidor activo, seguro y con soporte incluido.
                </div>
              </div>
            </div>

            {/* Comparison Highlights */}
            <div id="comparativa" className="tech-card rounded-2xl p-6 bg-[#13070e]/80 border border-rose-950/60">
              <h3 className="text-sm font-mono font-bold text-rose-300 uppercase tracking-wider mb-4">
                ¿Por qué no el desarrollo tradicional?
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Pago Inicial</span>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 line-through">$400 - $600</span>
                    <span className="text-emerald-400 font-bold">$35</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Dominio + SSL</span>
                  <div className="flex items-center gap-4">
                    <span className="text-rose-400 text-[11px]">Por separado</span>
                    <span className="text-emerald-400 font-bold">100% Incluido</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Cambios &amp; Soporte</span>
                  <div className="flex items-center gap-4">
                    <span className="text-rose-400 text-[11px]">Cobro por hora</span>
                    <span className="text-emerald-400 font-bold">Incluido</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Administración Técnica</span>
                  <div className="flex items-center gap-4">
                    <span className="text-rose-400 text-[11px]">Tú solo</span>
                    <span className="text-emerald-400 font-bold">A cargo de Erick</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Transparency Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-950/40 to-black border border-rose-500/30">
              <h4 className="text-xs font-bold text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Contrato Claro y Transparente
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                El contrato de 12 meses te garantiza precio fijo congelado todo el año. Al finalizar los 12 meses, la titularidad del dominio y el código son 100% tuyos.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
