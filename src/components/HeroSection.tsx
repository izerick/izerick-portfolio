import React from 'react';
import { ArrowRight, Mail, GraduationCap, Code2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/80 backdrop-blur-md border border-rose-500/40 text-rose-300 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>Quevedo, Ecuador 🇪🇨</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#130b0e]/80 backdrop-blur-md border border-rose-900/30 text-slate-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-rose-400" />
            <span>Ing. Seguridad Industrial (UTEQ)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#130b0e]/80 backdrop-blur-md border border-rose-900/30 text-slate-300 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Dev Autónomo</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12] drop-shadow-2xl">
              Rigor de ingeniería aplicado al{' '}
              <span className="crimson-gradient-text">desarrollo de software.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl drop-shadow-md">
              Soy <strong className="text-white font-semibold">{PORTFOLIO_DATA.personalInfo.name}</strong> (<span className="text-rose-400 font-mono">@izerick</span>). Ingeniero en Seguridad Industrial graduado en la <strong>Universidad Técnica Estatal de Quevedo (UTEQ)</strong> y desarrollador de software autónomo. Construyo plataformas web rápidas, confiables y con arquitectura moderna para negocios en Ecuador.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <a
                href="#proyectos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(244,63,94,0.4)]"
              >
                <span>Ver Proyectos en Marcha</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#140b0f]/90 hover:bg-[#1c0f16] border border-rose-900/40 text-slate-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-md transition-colors"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Contactar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mini Profile Bento Spec Box */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="tech-card rounded-2xl p-6 space-y-4 text-left border-l-4 border-l-rose-500">
              <div className="flex items-center justify-between border-b border-rose-950/80 pb-3">
                <span className="mono-label text-slate-400">Ficha Profesional</span>
                <span className="text-[10px] font-mono text-rose-300 bg-rose-950 px-2 py-0.5 rounded border border-rose-800/60">
                  Activo 2026
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">TÍTULO ACADÉMICO:</span>
                  <span className="text-slate-100 font-semibold">Ingeniero en Seguridad Industrial</span>
                  <span className="text-rose-400/90 block text-[11px]">Univ. Técnica Estatal de Quevedo</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px]">ENFOQUE EN SOFTWARE:</span>
                  <span className="text-slate-100 font-semibold">Desarrollador Autónomo / Autodidacta</span>
                  <span className="text-slate-300 block text-[11px]">React • TypeScript • Cloud Architecture</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px]">DISPONIBILIDAD:</span>
                  <span className="text-rose-300 font-semibold">Proyectos & Consultoría Web</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#140b0f]/80 backdrop-blur-md border border-rose-900/30 flex items-center gap-3 text-xs font-mono text-slate-300 shadow-md">
              <ShieldCheck className="w-5 h-5 text-rose-400 shrink-0" />
              <span>Metodología de ingeniería: código probado y seguro para producción.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
