import React from 'react';
import { GraduationCap, Code2, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="perfil" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="mono-label text-rose-400">Trayectoria & Formación</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Ingeniería + Desarrollo Autónomo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            La ingeniería me enseñó el orden metodológico y la prevención de fallos; el aprendizaje autónomo de software me dio la capacidad de construir y lanzar soluciones rápidamente.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Academic Background */}
          <div className="tech-card rounded-2xl p-7 space-y-5 text-left border-l-4 border-l-rose-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Ingeniería en Seguridad Industrial
                  </h3>
                  <span className="text-xs text-rose-300 font-mono">Universidad Técnica Estatal de Quevedo (UTEQ)</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-300 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900/50">
                Título Universitario
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Formación universitaria con fuerte base en análisis de riesgos, gestión de operaciones, normativas técnicas y resolución estructurada de problemas bajo estándares rigurosos.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Gestión de riesgos técnicos y procesos operativos.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Enfoque en orden, seguridad y prevención de fallos.</span>
              </div>
            </div>
          </div>

          {/* Card 2: Autonomous Software Builder */}
          <div className="tech-card rounded-2xl p-7 space-y-5 text-left border-l-4 border-l-amber-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-300">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Desarrollo de Software Autónomo
                  </h3>
                  <span className="text-xs text-amber-300 font-mono">Autodidacta & Práctica Continua</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/50">
                Software Builder
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Aprendizaje disciplinado y construcción directa de código en entornos de producción reales. Dominio de tecnologías modernas para entregar plataformas útiles y de alta velocidad.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Especializado en React, TypeScript y TailwindCSS.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Despliegues en Infraestructura Cloud de Alta Velocidad (Edge & SSL).</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
