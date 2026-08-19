import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldCheck, Zap, CreditCard, Bot, Globe } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'pagos' | 'tiempos' | 'hosting' | 'bots' | 'soporte';
  icon: any;
}

const FAQS: FAQItem[] = [
  {
    category: 'pagos',
    icon: CreditCard,
    question: '¿Cómo funciona la forma de pago y los anticipos?',
    answer: 'Trabajamos con un esquema de seguridad del 50% de anticipo para iniciar el diseño y desarrollo del proyecto, y el 50% restante contra entrega final una vez que la web o bot esté 100% probado y aprobado por ti en vivo. Aceptamos transferencias bancarias en Ecuador (Banco Pichincha, Banco Guayaquil, DeUna) o pagos internacionales.',
  },
  {
    category: 'tiempos',
    icon: Zap,
    question: '¿En cuánto tiempo estará lista mi página web o bot?',
    answer: 'Nuestros tiempos de entrega son ágiles y con fechas garantizadas: Landing Pages básicas (2 a 4 días hábiles), Webs Corporativas (5 a 7 días hábiles), Bots de WhatsApp Automatizados (1 a 2 días), Asistentes con IA (3 a 5 días) y Sistemas SaaS a medida (2 a 4 semanas según la complejidad).',
  },
  {
    category: 'hosting',
    icon: Globe,
    question: '¿Qué incluye el alojamiento Cloud y mantenimiento mensual ($12/mes o $3/mes)?',
    answer: 'Incluye servidores Cloud de alta velocidad con 99.9% de disponibilidad, renovación y configuración de tu Dominio .com oficial, certificado de seguridad SSL con candado HTTPS, copias de seguridad continuas y soporte técnico para actualizar fotos, textos o números sin cobros por hora.',
  },
  {
    category: 'bots',
    icon: Bot,
    question: '¿Cuál es la diferencia entre el Bot Automatizado ($40) y el Asistente con IA ($120)?',
    answer: 'El Bot Automatizado ($40) responde con menús interactivos y botones de opciones fijas (horarios, ubicación, menú), ideal para agilizar la atención rápida. El Asistente con IA ($120) utiliza modelos de lenguaje como ChatGPT entrenados con toda la información de tu negocio para conversar fluidamente como un humano, resolver dudas complejas y cerrar ventas a cualquier hora.',
  },
  {
    category: 'soporte',
    icon: ShieldCheck,
    question: '¿Qué sucede si ya tengo mi propio dominio o servidor de hosting?',
    answer: '¡Sin problema! En nuestro cotizador puedes seleccionar la opción de "Hosting Propio ($0)". Realizaremos el despliegue e instalación directa en tu proveedor (cPanel, Hostinger, Vercel, AWS) y solo pagarás el costo único de desarrollo, sin mensualidades.',
  },
  {
    category: 'pagos',
    icon: Zap,
    question: '¿Cómo me llegan las cotizaciones y clientes que llenan mi web?',
    answer: 'Integramos sistemas de alerta en tiempo real conectados a tu celular: cada vez que un visitante solicita una cotización o envía un mensaje, te llega una notificación con el desglose en menos de 1 segundo directamente a tu Telegram o WhatsApp, y se registra en tu base de datos Notion CRM.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            <span>Respuestas Claras</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Todo lo que necesitas saber sobre formas de pago, tiempos de entrega y metodología de trabajo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#140a10]/95 border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.15)] ring-1 ring-rose-500/30'
                    : 'bg-[#10060d]/70 hover:bg-[#140911] border-rose-950/70'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl border ${isOpen ? 'bg-rose-600/30 border-rose-500/50 text-rose-300' : 'bg-white/5 border-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-sm sm:text-base font-bold font-heading transition-colors ${isOpen ? 'text-white' : 'text-slate-200 hover:text-white'}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full border transition-transform duration-300 ${isOpen ? 'rotate-180 bg-rose-950 border-rose-500/50 text-rose-300' : 'bg-white/5 border-white/5 text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
