import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  ArrowRight, 
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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
          <span className="text-rose-400 font-bold">Portafolio de Proyectos</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-4 h-4 text-rose-400" />
            <span>Casos de Éxito</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Proyectos en Producción &amp; <br />
            <span className="crimson-gradient-text">Software de Alta Ingeniería</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Explora las plataformas web, sistemas de gestión médica y herramientas que he construido y desplegado en servidores cloud reales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PORTFOLIO_DATA.projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="tech-card rounded-3xl bg-[#11070e]/80 border border-rose-950/80 hover:border-rose-500/50 transition-all cursor-pointer overflow-hidden flex flex-col group"
            >
              {/* Media Preview / Thumbnail */}
              <div className="h-48 bg-[#180912] border-b border-rose-950 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#11070e] to-transparent z-10 opacity-80" />
                <div className="text-center relative z-20 space-y-2">
                  <span className="inline-block px-2.5 py-1 rounded bg-rose-950/90 border border-rose-500/30 text-rose-300 text-[10px] font-mono font-bold uppercase">
                    {proj.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                    {proj.title}
                  </h4>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-black/40 border border-rose-950 text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> En Producción
                  </span>

                  <span className="font-bold text-rose-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Ver Detalles</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl tech-card rounded-3xl p-6 sm:p-8 bg-[#0e0609]/95 border border-rose-500/40 shadow-[0_0_60px_rgba(244,63,94,0.3)] text-left space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-rose-950/80 pb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] font-mono font-bold uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider">
                  Aspectos Clave &amp; Arquitectura:
                </h4>
                {selectedProject.highlights.map((h: string, hIdx: number) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Stack Tecnológico:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-rose-950/50 border border-rose-500/20 text-rose-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-rose-950 flex flex-col sm:flex-row items-center justify-between gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Visitar Proyecto en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <Link
                  to="/cotizar"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <span>Cotizar un Proyecto Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
