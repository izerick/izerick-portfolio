import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Check,
  Eye,
  ShieldCheck,
  Smartphone,
  Globe
} from 'lucide-react';
import { FAQSection } from '../components/FAQSection';

interface ProjectItemData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
  type: 'saas' | 'ecommerce' | 'corporate';
}

const PROJECTS_DATA: ProjectItemData[] = [
  {
    id: 'optica-visual-store',
    title: 'Ópticas Visual Store',
    subtitle: 'Software SaaS para Gestión Clínica Oftalmológica & Facturación',
    category: 'SaaS / Sistema Clínico Web',
    status: '🟢 En Producción (Cloud Edge)',
    type: 'saas',
    description: 'Plataforma completa para consultorios ópticos: historias clínicas con registro de refracción computarizada (OD/OI), panel de facturación desglosada (lunas y monturas por separado), agendamiento de citas médicas y catálogo interactivo de monturas.',
    highlights: [
      'Portal clínico con refracción computarizada (Esfera, Cilindro, Eje, DP).',
      'Facturación con desglose independiente de Lunas y Armazón con balance de caja.',
      'Sincronización con reseñas de Google Maps Places API.',
      'Desplegado en Infraestructura Cloud de Alta Velocidad con Supabase PostgreSQL.'
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Cloud Hosting', 'SSL'],
    liveUrl: 'https://optica.izerick.dev'
  },
  {
    id: 'tienda-ropa-ecommerce',
    title: 'Tienda de Ropa & Moda Urbana',
    subtitle: 'E-Commerce Móvil con Ventas al por Mayor y Menor',
    category: 'E-Commerce & Catálogo Digital',
    status: '⚡ En Producción / Optimizado',
    type: 'ecommerce',
    description: 'Catálogo de comercio electrónico optimizado para tráfico viral de TikTok, con venta al por mayor/menor, segmentación rápida por tallas (S/M/L/XL) y checkout directo a WhatsApp para cierre inmediato de pedidos.',
    highlights: [
      'Descuentos automáticos por compras al por mayor (3+ prendas).',
      'Filtros instantáneos por tallas, colores y disponibilidad en bodega.',
      'Conexión directa con WhatsApp Business para cierre de venta sin fricción.',
      'Optimizado 100% Mobile-First para celulares con carga en < 0.8s.'
    ],
    tags: ['React', 'TailwindCSS', 'PWA Móvil', 'E-Commerce', 'WhatsApp API'],
  },
  {
    id: 'hbw-risk-solutions',
    title: 'HBW Risk Solutions',
    subtitle: 'Portal Corporativo de Consultoría en Seguridad Industrial & Salud Ocupacional',
    category: 'Web Corporativa & Matriz IPER',
    status: '🚀 En Desarrollo / Próximo Lanzamiento',
    type: 'corporate',
    description: 'Plataforma empresarial de ingeniería aplicada a la prevención de riesgos laborales bajo normativas ecuatorianas e ISO 45001. Incluye catálogo de servicios de auditoría y cotizador de inspecciones técnicas.',
    highlights: [
      'Arquitectura de ingeniería con presentación ejecutiva de servicios industriales.',
      'Módulo de solicitud de auditorías laborales y mediciones ambientales.',
      'Formulario de cotización conectado con alertas automáticas a Telegram.',
      'Dominio oficial propio con servidor Cloud y certificado SSL empresarial.'
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vercel Edge', 'Telegram Bot']
  }
];

export const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Portafolio de Proyectos</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-4 h-4 text-rose-400" />
            <span>Casos Reales &amp; Mockups Interactivos</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Proyectos en Producción &amp; <br />
            <span className="crimson-gradient-text">Software de Alta Ingeniería</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Conoce las aplicaciones web, sistemas de gestión clínica y herramientas digitales que he construido y desplegado en servidores cloud.
          </p>
        </div>

        {/* Projects In-Depth Showcase with Visual Mockups */}
        <div className="space-y-12 mb-20">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="tech-card rounded-3xl p-6 sm:p-10 bg-[#10070e]/90 border-2 border-rose-950/80 hover:border-rose-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Interactive Cyber Mockup */}
              <div className="lg:col-span-7">
                
                {/* Mockup Case 1: Ópticas Visual Store (Browser Window SaaS Mockup) */}
                {proj.type === 'saas' && (
                  <div className="rounded-2xl bg-[#090407] border border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    {/* Window Titlebar */}
                    <div className="bg-[#14070f] px-4 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="text-slate-400 ml-2 hidden sm:inline">optica.izerick.dev</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        SSL ACTIVO • SUPABASE
                      </span>
                    </div>

                    {/* Window Body: Clinical Refraction UI */}
                    <div className="p-5 space-y-4 text-left">
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center font-bold">
                            <Eye className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white">Historia Clínica #2026-08</h4>
                            <span className="text-[10px] text-slate-400">Paciente: Ficha de Refracción Oftalmológica</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-rose-300">$85.00 USD</span>
                      </div>

                      {/* Optical Grid */}
                      <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-rose-400 font-bold block">OJO DERECHO (OD):</span>
                          <div className="text-slate-300 flex justify-between">
                            <span>Esf: <strong>-1.50</strong></span>
                            <span>Cyl: <strong>-0.50</strong></span>
                            <span>Eje: <strong>90°</strong></span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-rose-400 font-bold block">OJO IZQUIERDO (OI):</span>
                          <div className="text-slate-300 flex justify-between">
                            <span>Esf: <strong>-2.00</strong></span>
                            <span>Cyl: <strong>-0.25</strong></span>
                            <span>Eje: <strong>85°</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Billing Breakdown preview */}
                      <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 flex items-center justify-between text-xs">
                        <span className="text-slate-300 text-[11px]">Facturación: Lunas Antirreflejo ($45) + Armazón ($40)</span>
                        <span className="font-mono font-bold text-emerald-400">Balance OK</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup Case 2: Tienda de Ropa (Mobile TikTok E-Commerce Mockup) */}
                {proj.type === 'ecommerce' && (
                  <div className="max-w-md mx-auto rounded-3xl bg-[#090407] border-2 border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    {/* Smartphone Bezel Header */}
                    <div className="bg-[#14070f] px-5 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-rose-400" />
                        <span className="text-white font-bold">Catálogo Móvil TikTok</span>
                      </div>
                      <span className="text-[10px] text-rose-300 bg-rose-950 px-2 py-0.5 rounded">Mayor / Menor</span>
                    </div>

                    {/* Smartphone Screen Body */}
                    <div className="p-5 space-y-3.5 text-left">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">🔥 Tendencia Viral</span>
                          <h4 className="text-sm font-bold text-white">Hoodie Oversize Streetwear</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-mono font-black text-rose-400">$25 USD</span>
                          <span className="text-[10px] text-slate-400 block font-mono">x Mayor: $18</span>
                        </div>
                      </div>

                      {/* Size Selectors */}
                      <div className="flex items-center gap-2">
                        {['S', 'M', 'L', 'XL'].map((size, sIdx) => (
                          <span
                            key={size}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                              sIdx === 1
                                ? 'bg-rose-600 text-white shadow-sm ring-1 ring-rose-300'
                                : 'bg-white/5 text-slate-400 border border-white/5'
                            }`}
                          >
                            {size}
                          </span>
                        ))}
                        <span className="text-[11px] text-emerald-400 font-mono ml-auto">Stock: 24 disp.</span>
                      </div>

                      {/* Fast Action CTA */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/30 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300 font-bold">
                        <span>⚡ Pedido Directo a WhatsApp</span>
                        <span>0 Clics Inútiles</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup Case 3: HBW Risk Solutions (Corporate Industrial Safety Mockup) */}
                {proj.type === 'corporate' && (
                  <div className="rounded-2xl bg-[#090407] border border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    <div className="bg-[#14070f] px-4 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-rose-400" />
                        <span className="text-white font-bold">HBW Risk Solutions</span>
                      </div>
                      <span className="text-[10px] text-amber-300 font-bold bg-amber-950/80 px-2 py-0.5 rounded">
                        ISO 45001 • AUDITORÍAS
                      </span>
                    </div>

                    <div className="p-5 space-y-3.5 text-left">
                      <div>
                        <h4 className="text-sm font-bold text-white">Consultoría de Seguridad Industrial &amp; Salud Laboral</h4>
                        <p className="text-[11px] text-slate-400 mt-1">Estructuración de matrices de riesgos laborales, mediciones físicas y planes de emergencia.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-rose-400 font-bold block text-[10px] font-mono">MATRICES IPER:</span>
                          <span className="text-slate-300 text-[11px]">Identificación de Peligros y Evaluación de Riesgos</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-rose-400 font-bold block text-[10px] font-mono">MEDICIONES:</span>
                          <span className="text-slate-300 text-[11px]">Ruido, Iluminación y Ergonomía</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Case Study Spec & Description */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 uppercase">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-rose-300/90 font-mono mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2">
                  {proj.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-black/40 border border-rose-950 text-[11px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-rose-950 flex flex-wrap items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Ver Proyecto en Vivo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Link
                    to="/cotizar"
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 font-bold text-xs flex items-center gap-2 transition-colors"
                  >
                    <span>Cotizar un Sistema Así</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Interactive FAQ Section */}
        <FAQSection />

      </div>

    </div>
  );
};
