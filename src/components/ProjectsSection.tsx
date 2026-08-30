import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Eye, 
  ExternalLink, 
  MessageCircle, 
  X 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ShowcaseProject {
  id: string;
  name: string;
  catLabel: string;
  type: string;
  industry: string;
  location: string;
  status: string;
  image: string;
  liveUrl: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  specs: string[];
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'lorenz-franz-sastreria',
    name: 'Lorenz Franz — Alta Sastrería',
    catLabel: 'Web Corporativa',
    type: 'Catálogo Sartorial & Citas Cloud',
    industry: 'Alta Costura Masculina & Trajes a Medida',
    location: 'Ecuador 🇪🇨',
    status: '🟢 En Producción',
    image: '/sastreria-preview.png',
    liveUrl: 'https://sitioweblorenzfranz.vercel.app',
    description: 'Experiencia web de alta gama y catálogo interactivo para sastrería a medida tradicional. Incluye preloader cinemático, carrusel circulante elástico con físicas GSAP, catálogo de paños importados y agendamiento directo.',
    challenge: 'La sastrería tradicional requería digitalizar su catálogo de trajes, smokings y paños de alta gama con una estética de lujo artesanal.',
    solution: 'Desarrollamos un sitio web editorial con preloader cinético, carrusel continuo interactivo con soporte táctil dual, catálogo interactivo de tejidos y botón de cotización directa.',
    metrics: [
      { label: 'Tiempo Carga', value: '< 0.5s' },
      { label: 'Experiencia UX', value: '100% Fluida' },
      { label: 'Confección', value: 'Alta Costura' }
    ],
    highlights: [
      'Preloader editorial y revelación cinemática con GSAP ScrollTrigger.',
      'Carrusel circulante infinito con físicas elásticas y soporte táctil dual.',
      'Catálogo de smokings, chaqués y trajes en lana virgen y satén.',
      'Biblioteca de paños importados (Loro Piana, Holland & Sherry, Scabal).'
    ],
    specs: ['HTML5 / TailwindCSS', 'Animaciones GSAP', 'ScrollTrigger Físicas', 'Diseño Responsive', 'Despliegue Edge Vercel']
  },
  {
    id: 'opticas-visual-store',
    name: 'Ópticas Visual Store®',
    catLabel: 'Sistema Clínico',
    type: 'Software Médico Cloud',
    industry: 'Salud Visual & Oftalmología',
    location: 'Quito, Ecuador 🇪🇨',
    status: '🟢 En Producción',
    image: '/optica-preview.png',
    liveUrl: 'https://optica.izerick.dev',
    description: 'Plataforma web médica para centros ópticos. Integra fichas clínicas digitales con refracción computarizada (OD/OI), facturación desglosada y agenda de citas.',
    challenge: 'El centro óptico registraba historiales y valores de lunas en papel físico, causando pérdida de recetas, retrasos en la atención y descontrol contable.',
    solution: 'Desarrollamos una plataforma clínica web completa con base de datos en la nube, refracción oftalmológica computarizada, catálogo de monturas y control de caja.',
    metrics: [
      { label: 'Tiempo Carga', value: '< 0.8s' },
      { label: 'Fichas Médicas', value: '100% Digital' },
      { label: 'Uptime', value: '99.9%' }
    ],
    highlights: [
      'Portal clínico con refracción computarizada (Esfera, Cilindro, Eje, DP).',
      'Facturación con desglose independiente de Lunas y Armazón con balance de caja.',
      'Sincronización con reseñas de clientes y catálogo de monturas.',
      'Despliegue en servidores cloud seguros con encriptación SSL.'
    ],
    specs: ['Frontend React Pro', 'Código TypeScript', 'Base de Datos Cloud', 'TailwindCSS', 'Arquitectura Modular']
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

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

        {/* 2-Column Parallel Interactive Grid (2 en móvil y 2 en escritorio) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 items-stretch">
          {SHOWCASE_PROJECTS.map((proj) => (
            <article
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group rounded-2xl sm:rounded-3xl bg-[#0f070e] border-2 border-rose-950/80 hover:border-rose-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_10px_35px_rgba(244,63,94,0.2)] flex flex-col justify-between cursor-pointer text-left"
            >
              
              {/* Card Window Mockup Frame */}
              <div className="p-1.5 sm:p-2.5 pb-0">
                <div className="rounded-xl sm:rounded-2xl bg-[#090407] border border-rose-500/20 overflow-hidden shadow-md">
                  
                  {/* Window Titlebar */}
                  <div className="bg-[#14070f] px-2 sm:px-3 py-1 sm:py-1.5 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500/80" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500/80" />
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 truncate max-w-[90px] sm:max-w-[140px] font-mono">
                      {proj.location}
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-mono px-1 sm:px-1.5 py-0.2 rounded bg-rose-950 text-rose-300 border border-rose-500/30 font-bold truncate">
                      {proj.catLabel}
                    </span>
                  </div>

                  {/* Screenshot Viewport */}
                  <div className="relative h-[95px] xs:h-[120px] sm:h-[190px] overflow-hidden bg-[#070308]">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-[9px] sm:text-xs shadow-lg flex items-center gap-1 sm:gap-1.5">
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Ver Ficha</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3.5">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[8px] sm:text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider truncate">
                      {proj.type}
                    </span>
                    <span className="text-[8px] sm:text-[10px] font-mono text-emerald-400 font-semibold shrink-0">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors font-heading leading-tight truncate">
                    {proj.name}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 mt-1 leading-snug sm:leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-1 sm:gap-1.5 py-1 sm:py-1.5 border-y border-white/5">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-0.5 sm:p-1 rounded-md sm:rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="font-heading font-extrabold text-white text-[9px] sm:text-[11px] block truncate">{m.value}</span>
                      <span className="text-[7px] sm:text-[8px] font-mono text-slate-400 block truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-1 sm:pt-2 flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-rose-400 group-hover:text-rose-300">
                  <span>Explorar Detalles</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Call to action to view all projects */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:scale-105 transition-all shadow-lg"
          >
            <span>Ver Catálogo Completo de Proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Interactive Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[92vh] bg-[#0f060d] border border-rose-500/40 rounded-3xl p-5 sm:p-8 overflow-y-auto shadow-[0_0_50px_rgba(244,63,94,0.3)] space-y-5 sm:space-y-6 text-left">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl bg-white/5 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 uppercase">
                {selectedProject.catLabel} • {selectedProject.type}
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading mt-2">
                {selectedProject.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-rose-300/90 font-mono mt-0.5">
                {selectedProject.industry} • {selectedProject.location}
              </p>
            </div>

            {/* Visual Modal Screenshot */}
            <div className="rounded-2xl bg-[#090407] border border-rose-500/30 overflow-hidden shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-auto max-h-[260px] object-cover object-top"
              />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5">
              {selectedProject.metrics.map((m, mIdx) => (
                <div key={mIdx} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-heading font-extrabold text-white text-xs sm:text-sm block">{m.value}</span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 block truncate">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider block">
                  El Desafío
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  La Solución
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Características Clave Desarrolladas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs Pills */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Stack Técnico Empleado
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.specs.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all"
              >
                <span>Visitar Proyecto en Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=Hola%20Erick,%20vi%20el%20proyecto%20de%20${encodeURIComponent(selectedProject.name)}%20en%20tu%20portafolio%20y%20quiero%20cotizar%20uno%20similar`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Cotizar Proyecto Similar</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
