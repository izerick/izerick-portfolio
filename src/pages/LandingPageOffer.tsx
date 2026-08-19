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
  Headphones,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Search,
  Smartphone,
  Star
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const INCLUDED_FEATURES = [
  {
    icon: Sparkles,
    title: 'Diseño Profesional Personalizado',
    desc: 'Diseño único adaptado a tu marca, colores corporativos y estructurado para proyectar máxima seriedad y vender.'
  },
  {
    icon: Globe,
    title: 'Dominio Oficial .com Incluido',
    desc: 'Registramos y configuramos tu nombre web propio (ej: tuempresa.com) sin costos adicionales.'
  },
  {
    icon: Zap,
    title: 'Alojamiento Cloud 24/7 de Alta Velocidad',
    desc: 'Alojado en servidores globales con 99.9% de disponibilidad garantizada y tiempo de carga inferior a 1 segundo.'
  },
  {
    icon: Search,
    title: 'Optimización SEO Local en Google',
    desc: 'Estructuración técnica On-Page y etiquetas Open Graph para que tus clientes te encuentren al buscar en tu ciudad.'
  },
  {
    icon: MessageCircle,
    title: 'Integración WhatsApp Business',
    desc: 'Botón flotante dinámico con mensaje predeterminado para que tus visitantes inicien conversación con un solo toque.'
  },
  {
    icon: FileText,
    title: 'Formulario & Alertas a Telegram',
    desc: 'Captura clientes potenciales y recibe una notificación con sus datos en menos de 1 segundo en tu celular.'
  },
  {
    icon: Smartphone,
    title: 'Optimización 100% Mobile-First',
    desc: 'Navegación táctil fluida y perfecta tanto en celulares iPhone y Android como en computadoras y tablets.'
  },
  {
    icon: ShieldCheck,
    title: 'Certificado de Seguridad SSL Oficial',
    desc: 'Candado de seguridad HTTPS para proteger la información de tus visitantes y generar confianza absoluta.'
  },
  {
    icon: Headphones,
    title: 'Mantenimiento & Soporte Continuo',
    desc: 'Te acompañamos siempre: cambios de fotos, textos, teléfonos y respaldos periódicos sin cobros por hora.'
  }
];

const COMPARISON_DATA = [
  {
    feature: 'Inversión inicial requerida',
    traditional: '$500 - $1,200 USD de entrada',
    cheapBuilders: 'Cobros sorpresa y plantillas lentas',
    erickOffer: 'Solo tu primer mes ($35 USD)'
  },
  {
    feature: 'Tiempo de entrega',
    traditional: '4 a 8 semanas',
    cheapBuilders: 'Tú mismo tienes que armarla',
    erickOffer: '5 a 7 días hábiles listo'
  },
  {
    feature: 'Dominio .com y Servidor Cloud',
    traditional: 'Cobro extra aparte ($80-$150/año)',
    cheapBuilders: 'Planes básicos con caídas frecuentes',
    erickOffer: '100% Incluido y configurado'
  },
  {
    feature: 'Tecnología y Velocidad',
    traditional: 'WordPress pesado con plugins lentos',
    cheapBuilders: 'Código genérico difícil de posicionar',
    erickOffer: 'React 19 + Global Edge CDN (< 1s)'
  },
  {
    feature: 'Soporte y Cambios',
    traditional: '$25-$40 por cada cambio de texto',
    cheapBuilders: 'Sin soporte técnico humano',
    erickOffer: 'Soporte continuo de ingeniería incluido'
  }
];

const OFFER_FAQS = [
  {
    q: '¿Cómo funciona el contrato de 12 meses?',
    a: 'El plan tiene una permanencia de 12 cuotas mensuales de $35 USD. Esto te permite tener una web de alto nivel desde el primer día sin desembolsar $500 o $800 de golpe. Al completar los 12 meses, la página es 100% tuya y puedes continuar con el mantenimiento mensual o renovar solo el servidor.'
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Aceptamos transferencias bancarias locales en Ecuador (Banco Pichincha, Banco Guayaquil, DeUna) o pagos internacionales con tarjeta / PayPal.'
  },
  {
    q: '¿En cuántos días estará funcionando mi página web?',
    a: 'Una vez que nos compartas tu logo, información básica y fotos, tu página web estará 100% lista y publicada en tu dominio .com en un plazo de 5 a 7 días hábiles.'
  },
  {
    q: '¿Este plan de $35/mes aplica para Tiendas Online o Sistemas SaaS?',
    a: 'No. El plan de suscripción de $35/mes está diseñado exclusivamente para Landing Pages comerciales de 1 página enfocadas en conversión y captación de clientes. Proyectos de alta complejidad como Tiendas E-Commerce con carrito e inventario masivo ($420) o Sistemas SaaS / Clínicos a medida ($680) requieren arquitectura dedicada y se cotizan de forma independiente en nuestro Cotizador.'
  },
  {
    q: '¿Qué tipo de cambios incluye el soporte mensual?',
    a: 'Incluye cambios de textos, actualización de números de teléfono, reemplazo de imágenes o fotos de productos, actualización de horarios y mantenimiento preventivo de seguridad.'
  }
];

export const LandingPageOffer: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientDetails, setClientDetails] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
        monthlyFee: '$35 USD / mes',
        estimatedTime: '5-7 días hábiles',
        notes: clientDetails || 'Solicitud de Plan $35/mes',
        message: `🔥 SOLICITUD DE OFERTA EXCLUSIVA:\n• Plan: Landing Page Todo Incluido por $35/mes (Contrato 12 meses)\n• Incluye: Dominio .com, Servidor Cloud 24/7, Certificado SSL y Mantenimiento continuo.\n• Tiempo de Entrega: 5 a 7 días hábiles.\n• Detalles: ${clientDetails || 'Sin notas adicionales'}`,
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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Oferta Especial Landing Page</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(244,63,94,0.25)]"
          >
            <Flame className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" />
            <span>Plan Suscripción Web • Todo Incluido</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl font-black text-white font-heading tracking-tight leading-tight"
          >
            Tu Negocio Online por solo <br />
            <span className="crimson-gradient-text">$35 USD al Mes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-lg mt-6 leading-relaxed max-w-2xl mx-auto"
          >
            Sin desembolsos grandes de entrada. Tu landing page profesional con diseño moderno, Dominio .com propio, Servidor Cloud 24/7 y Soporte continuo incluido.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#formulario-oferta"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(244,63,94,0.45)] transition-all flex items-center gap-2"
            >
              <span>Asegurar mi Oferta por $35/mes</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent('Hola Erick, me interesa la Oferta Especial de Landing Page por $35/mes.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#140b0f] hover:bg-[#200e18] border border-rose-500/30 text-slate-200 hover:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 2. GRID DE 9 BENEFICIOS (Digital Space Style) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="mono-label text-rose-400">Todo Incluido</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              Todo lo que necesitas para vender en internet
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Tu landing page viene con cada componente técnico configurado de fábrica, sin cobros ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED_FEATURES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="tech-card rounded-3xl p-6 sm:p-7 bg-[#10060d]/80 border border-rose-950/80 hover:border-rose-500/40 transition-all flex flex-col justify-start text-left space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:border-rose-400 transition-all shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. COMPARISON TABLE (Digital Space Feature) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="mono-label text-rose-400">Comparativa Transparente</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              ¿Por qué elegir nuestro Plan Suscripción?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Compara con agencias tradicionales y creadores web genéricos.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-3xl overflow-hidden bg-[#10060d]/90 border border-rose-950">
              <thead>
                <tr className="border-b border-rose-950 bg-rose-950/40 text-xs font-mono">
                  <th className="p-4 sm:p-5 text-slate-300">Característica</th>
                  <th className="p-4 sm:p-5 text-slate-400">Agencias Tradicionales</th>
                  <th className="p-4 sm:p-5 text-slate-400">Creadores Baratos (Wix/WP)</th>
                  <th className="p-4 sm:p-5 text-rose-300 font-bold bg-rose-950/80">Plan Erick ($35/mes)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-950/60 text-xs">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{row.cheapBuilders}</span>
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-emerald-400 bg-rose-950/20">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.erickOffer}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. INVERSIÓN ACCESIBLE (Digital Space Inspired 2-Card Layout) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="mono-label text-rose-400">Planes Transparentes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
              Inversión <span className="crimson-gradient-text">Accesible</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Sin sorpresas ni cobros ocultos. Todo incluido en un plan simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* Card 1: Oferta de Lanzamiento (12 Meses) */}
            <div className="tech-card rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#190914] to-[#0f050b] border-2 border-rose-500/70 shadow-[0_0_50px_rgba(244,63,94,0.3)] relative flex flex-col justify-between text-left group">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-white" /> Oferta de Lanzamiento
                </span>

                <div className="mb-2">
                  <span className="text-xs font-mono text-slate-400 block">Precio especial:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-heading">$35</span>
                    <span className="text-sm font-mono text-rose-300 font-bold">USD / mes</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-rose-400 block mt-1">
                    Contrato mínimo 12 meses
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 pt-2 border-t border-rose-950">
                  La forma más inteligente de tener tu web profesional sin pagar cientos de dólares de golpe.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Landing Page o Web Corporativa (hasta 5 secciones)',
                    'Dominio oficial .com propio incluido',
                    'Alojamiento Cloud 24/7 + Certificado SSL',
                    'Optimización SEO local para búsquedas en Google',
                    'Botón WhatsApp Business + Formulario a Telegram',
                    'Mantenimiento y soporte técnico continuo',
                    'Entrega rápida garantizada en 5 a 7 días'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#formulario-oferta"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all"
              >
                <span>Empezar Ahora por $35/mes →</span>
              </a>
            </div>

            {/* Card 2: Plan Regular (Sin Contrato Mínimo) */}
            <div className="tech-card rounded-3xl p-7 sm:p-9 bg-[#11060e]/80 border border-rose-950/80 hover:border-rose-500/40 transition-all flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
                  Flexibilidad Total
                </span>

                <div className="mb-2">
                  <span className="text-xs font-mono text-slate-400 block">Precio regular:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-heading">$49</span>
                    <span className="text-sm font-mono text-slate-400 font-bold">USD / mes</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 block mt-1">
                    Sin contrato mínimo (Cancela cuando quieras)
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 pt-2 border-t border-rose-950">
                  Ideal para campañas estacionales o negocios que prefieren máxima libertad mes a mes.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Todo lo incluido en el plan de lanzamiento',
                    'Flexibilidad mensual 100% libre',
                    'Sin permanencia ni cláusulas de 12 meses',
                    'Mismo servicio y calidad de ingeniería',
                    'Entrega en 5 a 7 días hábiles'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent('Hola Erick, me gustaría consultar por el Plan Flexible sin contrato de $49/mes.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Consultar Plan Flexible →</span>
              </a>
            </div>

          </div>
        </div>

        {/* 5. FORMULARIO DIRECTO CON SCOPE NOTE */}
        <div id="formulario-oferta" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
          
          {/* Left Column: Plan Specs & Urgency */}
          <div className="lg:col-span-6 tech-card rounded-3xl p-7 sm:p-9 bg-[#130710]/95 border-2 border-rose-500/50 space-y-6 text-left shadow-[0_0_40px_rgba(244,63,94,0.2)]">
            <div className="flex items-center justify-between border-b border-rose-950 pb-4">
              <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" /> RESUMEN DEL SERVICIO
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-500/30 font-bold">
                Cupos Limitados
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-heading">$35</span>
                <span className="text-sm font-mono text-slate-400">USD / mes</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono font-semibold mt-1">
                ✓ Solo pagas $35 USD hoy para iniciar el diseño de tu web.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-300 border-t border-b border-rose-950 py-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Tiempo de Entrega:</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-rose-400" /> 5 a 7 días hábiles
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Dominio .com &amp; Servidor:</span>
                <span className="font-bold text-emerald-400">100% Incluido</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Soporte Continuo:</span>
                <span className="font-bold text-white">Directo con Erick</span>
              </div>
            </div>

            {/* Scarcity Note */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5 leading-relaxed">
              <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Aceptamos únicamente 5 clientes bajo este plan al mes</strong> para garantizar atención personalizada y dedicación completa a cada negocio.
              </span>
            </div>

            {/* Scope Note */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-[11px] text-slate-300 space-y-1">
              <span className="text-rose-400 font-bold font-mono block">📌 Alcance de este Plan:</span>
              <p>
                Válido para <strong>Landing Pages y Sitios Web Corporativos de hasta 5 secciones</strong> con enfoque en conversión. Para tiendas con inventario masivo ($420) o sistemas SaaS multi-usuario ($680), utiliza nuestro <Link to="/cotizar" className="text-rose-400 underline hover:text-white font-semibold">Cotizador Interactivo</Link>.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Proposal Form */}
          <div className="lg:col-span-6 tech-card rounded-3xl p-7 sm:p-9 bg-[#11060e]/95 border-2 border-rose-500/50 space-y-6 text-left">
            <h3 className="text-xl font-bold text-white font-heading">
              Solicitar Esta Promoción
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Llena tus datos para apartar tu cupo y coordinar la creación de tu página web hoy mismo.
            </p>

            {sentSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">¡Solicitud Recibida con Éxito!</h4>
                <p className="text-xs text-slate-300">
                  Erick ha recibido tu requerimiento en Telegram y te contactará en breve por WhatsApp para iniciar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitPromoLead} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1.5">TU NOMBRE O EMPRESA *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Carlos Mendoza / Barbería Elite"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1.5">WHATSAPP O TELÉFONO *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 0991234567"
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1.5">¿A QUÉ SE DEDICA TU NEGOCIO? (OPCIONAL)</label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Vendo ropa por TikTok / Consultorio dental en Quevedo..."
                    value={clientDetails}
                    onChange={(e) => setClientDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'Enviando a Telegram...' : 'Enviar Solicitud y Apartar Cupo'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 5. DEDICATED FAQS ACCORDION */}
        <div className="max-w-4xl mx-auto mb-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="mono-label text-rose-400">Dudas Comunes</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              Preguntas Frecuentes sobre la Oferta
            </h2>
          </div>

          <div className="space-y-3">
            {OFFER_FAQS.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'bg-[#140a10] border-rose-500/50' : 'bg-[#10060d]/70 border-rose-950/70'
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="text-rose-400 font-mono text-lg">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
