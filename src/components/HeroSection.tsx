import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Code2, ShieldCheck, Calculator, Layers, Sparkles } from 'lucide-react';
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

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Bio & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.08]">
              Rigor de ingeniería aplicado al{' '}
              <span className="crimson-gradient-text">desarrollo de software.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Soy <strong>{PORTFOLIO_DATA.personalInfo.name}</strong> (<span className="text-rose-400 font-mono font-bold">@{PORTFOLIO_DATA.personalInfo.handle}</span>). Ingeniero en Seguridad Industrial graduado en la <strong>{PORTFOLIO_DATA.personalInfo.university}</strong> y desarrollador de software autónomo. Construyo plataformas web rápidas, confiables y con arquitectura moderna para negocios en Ecuador.
            </p>

            {/* Creative Quick Action Buttons: Cotizar & Ver Servicios */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-3">
              
              {/* Primary CTA: Cotizar Ahora */}
              <Link
                to="/cotizar"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-xs sm:text-sm font-heading flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(244,63,94,0.45)] ring-1 ring-rose-400/60 active:scale-98 group"
              >
                <Calculator className="w-4 h-4 text-rose-200 group-hover:rotate-12 transition-transform" />
                <span>Cotizar Proyecto en Línea</span>
                <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Ver Servicios */}
              <Link
                to="/servicios"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#140b0f]/90 hover:bg-[#200e18] border border-rose-500/30 hover:border-rose-400/60 text-slate-100 hover:text-white font-bold text-xs sm:text-sm font-heading flex items-center justify-center gap-2.5 backdrop-blur-md transition-all shadow-md group"
              >
                <Layers className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                <span>Ver Servicios &amp; Catálogo</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>

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
