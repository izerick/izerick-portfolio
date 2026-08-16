import React from 'react';
import { Mail, Github, ArrowUpRight, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="tech-card rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden text-left border-rose-500/30">
          
          <div className="space-y-3">
            <span className="mono-label text-rose-400">Canales de Contacto</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              ¿Conversamos sobre tu proyecto?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Si buscas crear o modernizar un sitio web, catálogo digital o sistema a medida, puedes escribirme directamente a través de estos canales seguros.
            </p>
          </div>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Email Direct */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="p-5 rounded-2xl bg-[#140b0f]/90 border border-rose-900/40 hover:border-rose-500/50 transition-colors flex items-center justify-between group shadow-lg"
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
              className="p-5 rounded-2xl bg-[#140b0f]/90 border border-rose-900/40 hover:border-rose-500/50 transition-colors flex items-center justify-between group shadow-lg"
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

          </div>

          {/* Details Grid */}
          <div className="pt-6 border-t border-rose-950/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Quevedo, Los Ríos — Ecuador 🇪🇨</span>
            </div>
            <div>
              <span>Respuesta habitual: &lt; 24 horas</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
