import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  return (
    <section id="tecnologias" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <span className="mono-label text-rose-400">Stack & Herramientas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Tecnologías de Desarrollo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Herramientas modernas que utilizo para construir interfaces rápidas, bases de datos seguras y despliegues estables en servidores en la nube.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {PORTFOLIO_DATA.techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-card rounded-xl p-4 space-y-2"
            >
              <span className="text-[10px] font-mono text-rose-400 block uppercase tracking-wider">
                {tech.category}
              </span>
              <h4 className="text-sm font-bold text-white font-heading">{tech.name}</h4>
              <p className="text-xs text-slate-300">{tech.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
