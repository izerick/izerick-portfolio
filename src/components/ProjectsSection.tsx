import React from 'react';
import { ArrowUpRight, CheckCircle2, Glasses, ShoppingBag } from 'lucide-react';
import { LiveBrowserPreview } from './LiveBrowserPreview';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-12 sm:py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-14 text-left">
          <span className="mono-label text-rose-400 text-[10px] sm:text-xs">Desarrollos Activos</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
            Proyectos en Marcha
          </h2>
          <p className="text-[11px] sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            Soluciones de software en fase de producción y desarrollo activo creadas a medida para resolver necesidades operativas y de ventas en negocios reales.
          </p>
        </div>

        {/* Parallel 2-Column Grid on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Project 1: Ópticas Visual Store */}
          <div className="tech-card rounded-2xl sm:rounded-3xl p-3 sm:p-7 space-y-3 sm:space-y-6 flex flex-col justify-between h-full text-left border-l-2 sm:border-l-4 border-l-rose-500 bg-[#11070e]/80">
            <div className="space-y-2.5 sm:space-y-5">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0 shadow-md">
                    <Glasses className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-lg font-bold text-white font-heading leading-tight truncate">
                      Ópticas Visual Store®
                    </h3>
                    <span className="text-[9px] sm:text-xs text-rose-300 font-mono block truncate">
                      Sistema SaaS Clínico
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[8px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-rose-950/90 border border-rose-500/40 text-rose-300 shrink-0 truncate">
                  🟢 Producción
                </span>
              </div>

              {/* Static Browser Mockup */}
              <LiveBrowserPreview
                url="https://optica.izerick.dev"
                imageSrc="/optica-preview.png"
                title="Ópticas Visual Store"
                badgeText="En Vivo • Cloud Edge"
                heightClass="h-[95px] xs:h-[120px] sm:h-[225px]"
              />

              {/* Description */}
              <p className="text-[10px] sm:text-sm text-slate-300 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none min-h-[38px] sm:min-h-[60px]">
                Plataforma web médica con fichas clínicas, registro computarizado OD/OI, facturación con desglose de lunas/armazones y Google Reviews.
              </p>

              {/* Highlights (4 bullets) */}
              <div className="space-y-1 sm:space-y-2 text-[9px] sm:text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Portal médico con base de datos en tiempo real.</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Facturación desglosada lunas y montura.</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Agenda médica y Google Reviews.</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Cloud Hosting de Alta Velocidad + SSL.</span>
                </div>
              </div>

              {/* Tags (5 tags) */}
              <div className="flex flex-wrap gap-1 sm:gap-2 pt-0.5 sm:pt-1">
                {['React', 'TypeScript', 'Supabase', 'Cloud', 'SSL'].map(tag => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded bg-[#130a0e] border border-rose-950 text-[8px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-2 sm:pt-4 border-t border-rose-950/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-3">
              <span className="text-[9px] sm:text-xs font-mono text-slate-400 truncate">Cliente: Óptica Quito</span>
              <a
                href="https://optica.izerick.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)]"
              >
                <span>Ver Web</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>

          {/* Project 2: DemoStore Streetwear */}
          <div className="tech-card rounded-2xl sm:rounded-3xl p-3 sm:p-7 space-y-3 sm:space-y-6 flex flex-col justify-between h-full text-left border-l-2 sm:border-l-4 border-l-amber-500 bg-[#11070e]/80">
            <div className="space-y-2.5 sm:space-y-5">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0 shadow-md">
                    <ShoppingBag className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-lg font-bold text-white font-heading leading-tight truncate">
                      DemoStore Streetwear®
                    </h3>
                    <span className="text-[9px] sm:text-xs text-amber-300 font-mono block truncate">
                      E-Commerce Catálogo
                    </span>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[8px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded bg-amber-950/90 border border-amber-500/40 text-amber-300 shrink-0 truncate">
                  🟢 Producción
                </span>
              </div>

              {/* Static Browser Mockup */}
              <LiveBrowserPreview
                url="https://demoropa.izerick.dev"
                imageSrc="/demoropa-preview.png"
                title="DemoStore Streetwear"
                badgeText="En Vivo • Cloud Edge"
                heightClass="h-[95px] xs:h-[120px] sm:h-[225px]"
              />

              {/* Description */}
              <p className="text-[10px] sm:text-sm text-slate-300 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none min-h-[38px] sm:min-h-[60px]">
                Catálogo de moda urbana para tráfico viral, con venta al por mayor/menor, segmentación por tallas (S/M/L/XL) y checkout a WhatsApp.
              </p>

              {/* Highlights (4 bullets) */}
              <div className="space-y-1 sm:space-y-2 text-[9px] sm:text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Filtros por tallas, colores y stock en vivo.</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Descuentos mayoristas automáticos (+6 un).</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Checkout directo a WhatsApp en 2 clics.</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Cloud Hosting de Alta Velocidad + SSL.</span>
                </div>
              </div>

              {/* Tags (5 tags) */}
              <div className="flex flex-wrap gap-1 sm:gap-2 pt-0.5 sm:pt-1">
                {['React', 'Tailwind', 'WhatsApp', 'PWA', 'SSL'].map(tag => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded bg-[#130a0e] border border-rose-950 text-[8px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-2 sm:pt-4 border-t border-rose-950/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-3">
              <span className="text-[9px] sm:text-xs font-mono text-slate-400 truncate">Cliente: Boutique Distro</span>
              <a
                href="https://demoropa.izerick.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <span>Ver Web</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
