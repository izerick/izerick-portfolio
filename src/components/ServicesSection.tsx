import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="mono-label text-rose-400">Servicios para Negocios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Soluciones que Desarrollo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Desarrollo sitios web y software orientados a resultados: que carguen en milisegundos, proyecten seriedad y simplifiquen la operación de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <div
              key={service.id}
              className="tech-card rounded-2xl p-6 space-y-5 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-rose-400 font-bold block">
                  0{idx + 1}.
                </span>
                
                <h3 className="text-base font-bold text-white font-heading">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                  {service.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-rose-950/60">
                <a
                  href="#contacto"
                  className="text-xs font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1 font-bold transition-colors"
                >
                  <span>Consultar este servicio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
