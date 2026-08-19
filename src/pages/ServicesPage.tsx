import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FAQSection } from '../components/FAQSection';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Servicios Especializados</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-rose-400" />
            <span>Catálogo de Soluciones</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Servicios Digitales de <br />
            <span className="crimson-gradient-text">Alto Rendimiento &amp; Conversión</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Desarrollo a medida, optimización de velocidad e infraestructura robusta para empresas que buscan diferenciarse.
          </p>
        </div>

        {/* Services In-Depth Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PORTFOLIO_DATA.services.map((svc, idx) => (
            <div
              key={idx}
              className="tech-card rounded-3xl p-7 bg-[#11070e]/80 border border-rose-950/80 hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-widest block mb-2">
                  SERVICIO 0{idx + 1}
                </span>

                <h3 className="text-lg font-bold text-white font-heading mb-3">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.deliverables.map((deliv, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-300">
                  A Medida
                </span>
                <Link
                  to="/cotizar"
                  className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <span>Cotizar</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive FAQ Section */}
        <FAQSection />

        {/* Bottom Banner */}
        <div className="tech-card rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#180a13] to-[#0f060b] border border-rose-500/40 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-extrabold text-white font-heading mb-3">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Usa nuestro cotizador en vivo para calcular los extras y funcionalidades exactas de tu proyecto.
          </p>
          <Link
            to="/cotizar"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs shadow-lg transition-all"
          >
            <span>Configurar en el Cotizador Interactivo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
};
