import React from 'react';
import { ArrowUpRight, CheckCircle2, Glasses, ShoppingBag } from 'lucide-react';
import { LiveBrowserPreview } from './LiveBrowserPreview';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-16 sm:py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-10 sm:mb-14 text-left">
          <span className="mono-label text-rose-400">Desarrollos Activos</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
            Proyectos en Marcha
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            Soluciones de software en fase de producción y desarrollo activo creadas a medida para resolver necesidades operativas y de ventas en negocios reales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Project 1: Ópticas Visual Store */}
          <div className="tech-card rounded-3xl p-5 sm:p-7 space-y-6 flex flex-col justify-between text-left border-l-4 border-l-rose-500 bg-[#11070e]/80">
            <div className="space-y-4 sm:space-y-5">
              
              {/* Header: Responsive Stacking for Mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0 shadow-md">
                    <Glasses className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                      Ópticas Visual Store®
                    </h3>
                    <span className="text-xs text-rose-300 font-mono block">
                      Sistema SaaS &amp; Portal Clínico
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-rose-950/90 border border-rose-500/40 text-rose-300 shrink-0">
                  🟢 En Producción (Cloud Edge)
                </span>
              </div>

              {/* Real-Time Live Browser Preview */}
              <LiveBrowserPreview
                url="https://optica.izerick.dev"
                title="Ópticas Visual Store"
                badgeText="En Vivo • Vercel Edge"
                heightClass="h-[190px] sm:h-[220px]"
              />

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Plataforma web para centro óptico con gestión de fichas clínicas de pacientes, registro computarizado de graduación OD/OI, facturación con desglose independiente de lunas/armazones y sincronización con Google Maps Reviews.
              </p>

              {/* Highlights */}
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Portal de Optometrista con autenticación y base de datos en tiempo real.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Facturación con valores de lunas y armazón por separado.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Desplegado en Infraestructura Cloud de Alta Velocidad con SSL.</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {['React', 'TypeScript', 'Supabase', 'Cloud Hosting', 'SSL'].map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#130a0e] border border-rose-950 text-[10px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-rose-950/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">Cliente: Óptica en Quito</span>
              <a
                href="https://optica.izerick.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)]"
              >
                <span>Ver Web en Producción</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project 2: Tienda de Ropa E-Commerce */}
          <div className="tech-card rounded-3xl p-5 sm:p-7 space-y-6 flex flex-col justify-between text-left border-l-4 border-l-amber-500 bg-[#11070e]/80">
            <div className="space-y-4 sm:space-y-5">
              
              {/* Header: Responsive Stacking for Mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 shadow-md">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                      Tienda de Ropa &amp; Moda Urbana
                    </h3>
                    <span className="text-xs text-amber-300 font-mono block">
                      E-Commerce &amp; Catálogo Digital
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-950/90 border border-amber-500/40 text-amber-300 shrink-0">
                  🟡 En Desarrollo Activo
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Catálogo digital diseñado para capturar tráfico de TikTok y redes sociales, permitiendo ventas al por menor y mayor con descuentos por volumen y botón de checkout directo hacia WhatsApp.
              </p>

              {/* Highlights */}
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Segmentación por tallas (S/M/L/XL), colores y disponibilidad.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mensaje de WhatsApp prellenado con foto y detalle de prenda.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Diseño ultra ligero para navegación rápida en celulares.</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {['React', 'TailwindCSS', 'WhatsApp CRM', 'PWA Móvil'].map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#130a0e] border border-rose-950 text-[10px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-rose-950/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">Enfoque: Moda &amp; Tiendas Ecuador</span>
              <span className="text-xs font-mono text-amber-300 font-semibold">Boceto en Preparación</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
