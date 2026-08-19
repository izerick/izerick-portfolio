import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Check, 
  Globe, 
  ShoppingBag, 
  Layers, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MessageCircle, 
  Send, 
  Sparkles,
  Database,
  BarChart3,
  CreditCard,
  Server
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  price: number;
  time: string;
  desc: string;
  icon: any;
  popular?: boolean;
}

interface ExtraOption {
  id: string;
  name: string;
  desc: string;
  price: number;
  icon: any;
}

const SERVICES: ServiceOption[] = [
  {
    id: 'landing',
    name: 'Landing Page Básica',
    category: 'Presencia Rápida',
    price: 180,
    time: '2-4 días',
    desc: 'Diseño moderno en 1 página, botón WhatsApp, formulario y optimización móvil.',
    icon: Globe,
    popular: true,
  },
  {
    id: 'web-corp',
    name: 'Web Corporativa',
    category: 'Empresas & Negocios',
    price: 250,
    time: '5-7 días',
    desc: 'Hasta 5 secciones completas, catálogo de servicios, SEO local y testimonios.',
    icon: Layers,
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online / E-commerce',
    category: 'Ventas Digitales',
    price: 420,
    time: '8-12 días',
    desc: 'Catálogo de productos, carrito de compras, pedidos por WhatsApp o pasarela.',
    icon: ShoppingBag,
  },
  {
    id: 'saas-system',
    name: 'Sistema Web / SaaS a Medida',
    category: 'Software Avanzado',
    price: 680,
    time: '2-4 semanas',
    desc: 'Panel administrativo, base de datos privada, autenticación y lógica a medida.',
    icon: Database,
  },
  {
    id: 'bot-automation',
    name: 'Bot de WhatsApp & Automatización',
    category: 'Inteligencia & Leads',
    price: 240,
    time: '3-5 días',
    desc: 'Respuestas automáticas, captura de clientes y conexión directa a Notion o Telegram.',
    icon: Bot,
  },
];

const EXTRAS: ExtraOption[] = [
  {
    id: 'whatsapp-pro',
    name: 'Botón Flotante Dinámico de WhatsApp',
    desc: 'Con mensaje personalizado según el producto o servicio que mire el cliente.',
    price: 20,
    icon: MessageCircle,
  },
  {
    id: 'seo-local',
    name: 'Optimización SEO Local en Google Ecuador',
    desc: 'Alta en Google Search Console y estructuración Schema para búsquedas locales.',
    price: 45,
    icon: ShieldCheck,
  },
  {
    id: 'analytics-live',
    name: 'Panel de Analíticas Privado en Vivo',
    desc: 'Mira cuántas visitas recibe tu web en tiempo real sin compartir datos con terceros.',
    price: 35,
    icon: BarChart3,
  },
  {
    id: 'payments',
    name: 'Pasarela de Pagos (Stripe / Tarjetas)',
    desc: 'Cobros automáticos en línea con tarjeta de débito o crédito.',
    price: 80,
    icon: CreditCard,
  },
  {
    id: 'notion-telegram',
    name: 'Despacho de Leads a Telegram / Notion CRM',
    desc: 'Cada vez que alguien llene tu formulario, te llega una alerta a tu celular en 1 segundo.',
    price: 50,
    icon: Zap,
  },
];

export const QuotePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceOption>(SERVICES[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['whatsapp-pro', 'seo-local']);
  const [hostingOption, setHostingOption] = useState<'vps-included' | 'client-hosting'>('vps-included');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientProjectNote, setClientProjectNote] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]
    );
  };

  // Calculate Total (Development one-time cost)
  const extrasTotal = selectedExtras.reduce((acc, id) => {
    const extra = EXTRAS.find((e) => e.id === id);
    return acc + (extra ? extra.price : 0);
  }, 0);

  const totalDevPrice = selectedService.price + extrasTotal;

  const handleSendToWhatsapp = () => {
    const extrasNames = selectedExtras
      .map((id) => EXTRAS.find((e) => e.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const hostingText = hostingOption === 'vps-included' 
      ? 'Servidor Cloud VPS Gestionado ($12 USD / mes)' 
      : 'Ya cuento con hosting y dominio ($0)';

    const msg = `¡Hola Erick! Vengo desde el Cotizador de izerick.dev y configuré la siguiente propuesta:%0A%0A` +
      `🛠️ *Servicio:* ${selectedService.name} ($${selectedService.price} USD)%0A` +
      `✨ *Funcionalidades Extra:* ${extrasNames || 'Ninguna'} (+$${extrasTotal} USD)%0A` +
      `🖥️ *Alojamiento:* ${hostingText}%0A` +
      `💰 *Desarrollo (Pago único):* $${totalDevPrice} USD%0A` +
      `${hostingOption === 'vps-included' ? `🔄 *Alojamiento & Mantenimiento VPS:* $12 USD / mes%0A` : ''}` +
      `⏱️ *Tiempo Estimado de Entrega:* ${selectedService.time}%0A%0A` +
      `👤 *Nombre / Empresa:* ${clientName || 'No especificado'}%0A` +
      `📝 *Notas del Proyecto:* ${clientProjectNote || 'Quiero más detalles.'}`;

    window.open(`https://wa.me/593967097679?text=${msg}`, '_blank');
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;

    setIsSending(true);
    try {
      const extrasNames = selectedExtras
        .map((id) => EXTRAS.find((e) => e.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      const hostingText = hostingOption === 'vps-included' ? 'VPS Gestionado ($12 USD / mes)' : 'Hosting Propio ($0)';

      const payload = {
        name: clientName,
        contact: clientContact,
        service: `COTIZADOR: ${selectedService.name} ($${totalDevPrice} USD)`,
        message: `📋 RESUMEN DE COTIZACIÓN:\n• Servicio: ${selectedService.name} ($${selectedService.price} USD)\n• Extras: ${extrasNames || 'Ninguno'} (+$${extrasTotal} USD)\n• Servidor: ${hostingText}\n• Inversión Desarrollo: $${totalDevPrice} USD\n• Entrega Estimada: ${selectedService.time}\n• Detalles del Cliente: ${clientProjectNote || 'Sin notas adicionales'}`,
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSentSuccess(true);
      } else {
        alert('Hubo un inconveniente al enviar la solicitud. Por favor intenta nuevamente.');
      }
    } catch (err) {
      alert('Error de conexión con el servidor de leads.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <Calculator className="w-3.5 h-3.5 text-rose-400" />
            <span>Presupuesto Transparente en Tiempo Real</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Cotizador <span className="crimson-gradient-text">Interactivo</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Configura el tipo de web, extras y alojamiento que necesitas para tu negocio y obtén una estimación de inversión al instante.
          </p>
        </div>

        {/* Wizard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Options Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* STEP 1: Select Main Service */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="text-base font-bold text-white font-heading">
                  Selecciona el tipo de proyecto
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  const Icon = srv.icon;

                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all relative overflow-hidden ${
                        isSelected
                          ? 'bg-rose-950/40 border-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.3)] ring-1 ring-rose-500'
                          : 'bg-[#11070e]/80 border-rose-950/60 hover:border-rose-700/50 hover:bg-[#160912]'
                      }`}
                    >
                      {srv.popular && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                          Popular
                        </span>
                      )}

                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-rose-600 text-white' : 'bg-rose-950/80 text-rose-300'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white leading-snug">{srv.name}</h4>
                          <span className="text-[10px] font-mono text-rose-400 block mt-0.5">{srv.category}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">{srv.desc}</p>

                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400 text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" /> {srv.time}
                        </span>
                        <span className="font-heading font-extrabold text-white">
                          ${srv.price} USD
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Add Extra Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="text-base font-bold text-white font-heading">
                  Funcionalidades y Extras (Opcional)
                </h3>
              </div>

              <div className="space-y-2.5">
                {EXTRAS.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  const Icon = extra.icon;

                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-rose-950/30 border-rose-500/80 shadow-sm'
                          : 'bg-[#11070e]/60 border-rose-950/50 hover:bg-[#160912]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-rose-600 border-rose-500 text-white' : 'border-rose-900 bg-black/40 text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-rose-950/60 flex items-center justify-center text-rose-300 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-100">{extra.name}</h4>
                          <p className="text-[10px] text-slate-400">{extra.desc}</p>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-rose-300 shrink-0">
                        +${extra.price} USD
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Hosting & Infrastructure */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="text-base font-bold text-white font-heading">
                  Servidor Cloud VPS &amp; Dominio
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Option 1: VPS Managed ($12/month) */}
                <div
                  onClick={() => setHostingOption('vps-included')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    hostingOption === 'vps-included'
                      ? 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                      : 'bg-[#11070e]/80 border-rose-950/60 hover:bg-[#160912]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-rose-400" /> Servidor VPS Gestionado
                    </span>
                    <span className="text-xs font-mono font-extrabold text-rose-300">$12 USD / mes</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Incluye servidor cloud de alta velocidad 24/7, Dominio .com, certificado SSL y copias de seguridad automáticas a cargo de Erick.
                  </p>
                </div>

                {/* Option 2: Client Hosting ($0) */}
                <div
                  onClick={() => setHostingOption('client-hosting')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    hostingOption === 'client-hosting'
                      ? 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                      : 'bg-[#11070e]/80 border-rose-950/60 hover:bg-[#160912]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Ya tengo Hosting / Dominio</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">$0</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Si ya cuentas con tu propio proveedor de hosting y dominio (Hostinger, cPanel, Vercel), realizamos el despliegue directo en tu cuenta.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Live Summary & Direct Action (5 Cols Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            
            <div className="tech-card rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#180a13] to-[#0f060b] border-2 border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.2)]">
              
              <div className="flex items-center justify-between pb-4 border-b border-rose-950">
                <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Resumen del Presupuesto
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                  En Tiempo Real
                </span>
              </div>

              {/* Breakdown */}
              <div className="py-4 space-y-2.5 text-xs border-b border-rose-950/80">
                <div className="flex items-center justify-between text-slate-200">
                  <span>{selectedService.name} (Desarrollo)</span>
                  <span className="font-mono font-bold text-white">
                    ${selectedService.price} USD
                  </span>
                </div>

                {selectedExtras.map((id) => {
                  const extra = EXTRAS.find((e) => e.id === id);
                  if (!extra) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>+ {extra.name}</span>
                      <span className="font-mono text-rose-300">+${extra.price} USD</span>
                    </div>
                  );
                })}

                <div className="flex items-center justify-between text-slate-400 text-[11px] pt-1">
                  <span>Alojamiento Cloud &amp; Dominio:</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {hostingOption === 'vps-included' ? '$12 USD / mes' : '$0 (Hosting Propio)'}
                  </span>
                </div>
              </div>

              {/* Total Summary */}
              <div className="py-5 border-b border-rose-950/80 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">DESARROLLO (PAGO ÚNICO):</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white font-heading">
                        ${totalDevPrice}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">USD</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">ENTREGA ESTIMADA:</span>
                    <span className="text-xs font-mono font-bold text-rose-300 flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-rose-400" /> {selectedService.time}
                    </span>
                  </div>
                </div>

                {hostingOption === 'vps-included' && (
                  <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Alojamiento VPS + SSL + Dominio:</span>
                    <span className="font-mono font-bold text-rose-300">$12 USD / mes</span>
                  </div>
                )}
              </div>

              {/* Lead Submission Form */}
              {sentSuccess ? (
                <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-2 mt-4 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">¡Propuesta Enviada a Erick!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recibí tu cotización completa en mi centro de notificaciones de Telegram y Notion CRM. Me pondré en contacto contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-3 pt-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre / Empresa *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-rose-950/80 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Tu WhatsApp o Correo de Contacto *"
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-rose-950/80 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />

                  <textarea
                    rows={2}
                    placeholder="Detalles breves de tu idea o requerimiento..."
                    value={clientProjectNote}
                    onChange={(e) => setClientProjectNote(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-rose-950/80 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />

                  {/* Primary Submit CTA (Sends directly to Telegram & Notion) */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSending ? 'Enviando a Telegram & Notion...' : 'Solicitar Esta Propuesta'}</span>
                    </button>

                    {/* WhatsApp Action Button */}
                    <button
                      type="button"
                      onClick={handleSendToWhatsapp}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border border-[#25D366]/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enviar Directo por WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

              <p className="text-center text-[10px] text-slate-500 mt-3 font-mono">
                🔒 Notificación instantánea conectada a Telegram y Notion CRM.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
