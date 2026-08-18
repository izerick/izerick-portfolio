import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';

export const MonthlyOfferSection: React.FC = () => {

  return (
    <section id="oferta-mensual" className="py-24 relative overflow-hidden bg-[#0a0508] border-t border-b border-rose-950/40">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
          >
            <Flame className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Oferta Especial • Todo Incluido</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight"
          >
            Tu Página Web Completa por una <br />
            <span className="crimson-gradient-text">Cuota Mensual Fija</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed"
          >
            Olvídate de desembolsar cientos de dólares de golpe. Ten tu web corporativa lista con Dominio, Servidor Cloud 24/7, Seguridad SSL y Mantenimiento continuo incluido.
          </motion.p>
        </div>

        {/* Pricing Card & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          
          {/* Main Plan Card (Featured) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 tech-card rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#180a13] to-[#0f060b] border-2 border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.25)] relative overflow-hidden"
          >
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-600 to-red-600 text-white text-[11px] font-mono font-bold px-5 py-1.5 rounded-bl-2xl shadow-md uppercase tracking-wider">
              Más Popular
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-widest block mb-1">
                PLAN SUSCRIPCIÓN COMPLETA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Web Todo Incluido
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                La forma más inteligente y accesible de digitalizar tu empresa.
              </p>
            </div>

            {/* Price Display */}
            <div className="p-5 rounded-2xl bg-[#090407] border border-rose-950/80 mb-6 flex items-baseline justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs text-slate-400 block font-mono">CUOTA MENSUAL FIJA</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white font-heading">$25</span>
                  <span className="text-slate-400 text-xs font-mono">USD / mes</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-950 border border-rose-500/30 text-rose-300 text-[11px] font-mono font-semibold">
                  Contrato 12 Meses
                </span>
                <span className="block text-[10px] text-slate-400 mt-1">$0 costo inicial de desarrollo</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {[
                { title: 'Diseño Web Profesional a Medida', desc: '100% adaptado a tu identidad, celulares y computadoras.' },
                { title: 'Dominio Oficial .com Incluido', desc: 'Tu dirección propia en internet (ej: tuempresa.com).' },
                { title: 'Alojamiento Cloud VPS 24/7', desc: 'Servidor de alta velocidad con 99.9% de disponibilidad sin caídas.' },
                { title: 'Certificado de Seguridad SSL Oficial', desc: 'Candado de navegación segura https:// garantizado.' },
                { title: 'Botón Directo a WhatsApp & Formularios', desc: 'Tus clientes te escriben o cotizan con un solo toque.' },
                { title: 'Optimización SEO para Google', desc: 'Estructurada para aparecer en búsquedas locales en Ecuador.' },
                { title: 'Mantenimiento & Soporte Continuo', desc: 'Cambios de textos, fotos, teléfonos y respaldos periódicos incluidos.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-600/20 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">{item.title}</h4>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <a
              href="#contacto"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm font-sans flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(244,63,94,0.4)] transition-all group"
            >
              <span>Solicitar Plan Todo Incluido</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <p className="text-center text-[10px] text-slate-400 mt-3 font-mono">
              * Contrato mínimo de 12 meses. Renovación o traspaso transparente.
            </p>
          </motion.div>

          {/* Comparison & Advantages Side */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="tech-card rounded-2xl p-6 bg-[#13070e]/80 border border-rose-950/60"
            >
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-amber-400" />
                ¿Por qué elegir el Plan Mensual?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                El modelo tradicional te obliga a pagar entre <strong>$300 y $600 USD de golpe</strong>, más los costos anuales de hosting y cobros extra cada vez que necesitas cambiar un número o texto.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Con el <strong>Plan Mensual Todo Incluido</strong>, tu empresa tiene presencia digital de primer nivel desde el día uno por una cuota que equivale a <strong>menos de $1 USD diario</strong>.
              </p>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="tech-card rounded-2xl p-6 bg-[#13070e]/80 border border-rose-950/60 overflow-hidden"
            >
              <h3 className="text-sm font-mono font-bold text-rose-300 uppercase tracking-wider mb-4">
                Comparativa directa
              </h3>

              <div className="space-y-3 text-xs">
                {/* Row 1 */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
                  <span className="text-slate-300 font-medium">Pago Inicial</span>
                  <div className="flex items-center gap-6">
                    <span className="text-slate-400 line-through">$300 - $600</span>
                    <span className="text-emerald-400 font-bold">$0</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
                  <span className="text-slate-300 font-medium">Dominio y Hosting</span>
                  <div className="flex items-center gap-6">
                    <span className="text-rose-400 text-[11px]">Por separado</span>
                    <span className="text-emerald-400 font-bold">100% Incluido</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
                  <span className="text-slate-300 font-medium">Soporte y Cambios</span>
                  <div className="flex items-center gap-6">
                    <span className="text-rose-400 text-[11px]">Cobro por hora</span>
                    <span className="text-emerald-400 font-bold">Incluido</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
                  <span className="text-slate-300 font-medium">Mantenimiento de Servidor</span>
                  <div className="flex items-center gap-6">
                    <span className="text-rose-400 text-[11px]">Tú lo gestionas</span>
                    <span className="text-emerald-400 font-bold">A cargo de Erick</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#140810]/60 border border-rose-950/40">
                <Clock className="w-4 h-4 text-rose-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white">Entrega en 5 a 7 Días</h4>
                <p className="text-[11px] text-slate-400">Tu web publicada y lista para vender rápidamente.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#140810]/60 border border-rose-950/40">
                <ShieldCheck className="w-4 h-4 text-cyan-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white">100% Tu Propiedad</h4>
                <p className="text-[11px] text-slate-400">Al término del contrato el dominio y datos son tuyos.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
