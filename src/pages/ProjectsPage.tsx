import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Check,
  ShieldCheck, 
  Smartphone, 
  Globe,
  Bot,
  Sparkles,
  Zap,
  Layers,
  ShoppingBag,
  Database,
  Eye,
  MessageCircle,
  X,
  Clock,
  TrendingUp
} from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { LiveBrowserPreview } from '../components/LiveBrowserPreview';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type ProjectCategory = 'all' | 'saas' | 'ecommerce' | 'corporate' | 'bot';

interface ProjectItemData {
  id: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  categoryType: ProjectCategory;
  industry: string;
  status: string;
  clientLocation: string;
  challenge: string;
  solution: string;
  description: string;
  metrics: { label: string; value: string; icon: any }[];
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  type: 'saas' | 'ecommerce' | 'corporate' | 'bot';
}

const PROJECTS_DATA: ProjectItemData[] = [
  {
    id: 'optica-visual-store',
    title: 'Ópticas Visual Store®',
    subtitle: 'Software SaaS para Gestión Clínica Oftalmológica & Facturación',
    categoryLabel: 'SaaS / Sistema Clínico',
    categoryType: 'saas',
    industry: 'Salud Visual & Centros Ópticos',
    clientLocation: 'Quito, Ecuador 🇪🇨',
    status: '🟢 En Producción (Cloud Edge)',
    type: 'saas',
    challenge: 'El centro óptico gestionaba historias clínicas y recetas en papel físico, lo que generaba pérdida de historiales de pacientes, errores en valores de lunas/armazones y lentitud en la atención.',
    solution: 'Desarrollamos una plataforma SaaS médica en React 19 + Supabase (PostgreSQL) con fichas de refracción computarizada (OD/OI), cálculo desglosado de facturación, catálogo de monturas y Google Reviews.',
    description: 'Plataforma completa para consultorios ópticos: historias clínicas con registro de refracción computarizada (OD/OI), panel de facturación desglosada (lunas y monturas por separado), agendamiento de citas médicas y catálogo interactivo de monturas.',
    metrics: [
      { label: 'Tiempo de Carga', value: '< 0.8s', icon: Zap },
      { label: 'Fichas Médicas', value: '100% Nube', icon: Database },
      { label: 'Disponibilidad', value: '99.9% Uptime', icon: Globe }
    ],
    highlights: [
      'Portal clínico con refracción computarizada (Esfera, Cilindro, Eje, DP).',
      'Facturación con desglose independiente de Lunas y Armazón con balance de caja.',
      'Sincronización con reseñas de Google Maps Places API.',
      'Desplegado en Infraestructura Cloud de Alta Velocidad con Supabase PostgreSQL.'
    ],
    tags: ['React 19', 'TypeScript', 'Supabase PostgreSQL', 'TailwindCSS', 'Vercel Edge', 'SSL'],
    liveUrl: 'https://optica.izerick.dev'
  },
  {
    id: 'tienda-ropa-ecommerce',
    title: 'Streetwear & Moda Urbana',
    subtitle: 'E-Commerce Móvil con Ventas al por Mayor y Menor',
    categoryLabel: 'E-Commerce & Catálogo Digital',
    categoryType: 'ecommerce',
    industry: 'Moda, Ropa & Calzado',
    clientLocation: 'Ecuador 🇪🇨',
    status: '⚡ Optimizado Mobile-First',
    type: 'ecommerce',
    challenge: 'Las tiendas tradicionales pierden más del 70% de compradores que llegan desde videos de TikTok debido a formularios de registro pesados y carritos de compra lentos.',
    solution: 'Creamos un catálogo interactivo ultra veloz para celulares, con selector rápido de tallas (S/M/L/XL), cálculo automático de descuentos por docenas y botón de checkout directo hacia WhatsApp.',
    description: 'Catálogo de comercio electrónico optimizado para tráfico viral de TikTok, con venta al por mayor/menor, segmentación rápida por tallas (S/M/L/XL) y checkout directo a WhatsApp para cierre inmediato de pedidos.',
    metrics: [
      { label: 'Velocidad Móvil', value: 'Ultrarrápida', icon: Zap },
      { label: 'Checkout WhatsApp', value: '2 Clics', icon: Smartphone },
      { label: 'Descuentos Mayor', value: 'Automáticos', icon: TrendingUp }
    ],
    highlights: [
      'Descuentos automáticos por compras al por mayor (3+ prendas).',
      'Filtros instantáneos por tallas, colores y disponibilidad en bodega.',
      'Conexión directa con WhatsApp Business para cierre de venta sin fricción.',
      'Optimizado 100% Mobile-First para celulares con carga en < 0.8s.'
    ],
    tags: ['React', 'TailwindCSS', 'PWA Móvil', 'E-Commerce', 'WhatsApp API']
  },
  {
    id: 'hbw-risk-solutions',
    title: 'HBW Risk Solutions',
    subtitle: 'Portal Corporativo de Consultoría en Seguridad Industrial & Salud Ocupacional',
    categoryLabel: 'Web Corporativa & Matriz IPER',
    categoryType: 'corporate',
    industry: 'Ingeniería, Prevención de Riesgos & Normativas ISO',
    clientLocation: 'Quevedo / Guayaquil, Ecuador 🇪🇨',
    status: '🚀 En Fase de Lanzamiento',
    type: 'corporate',
    challenge: 'Las consultoras técnicas necesitan transmitir autoridad y rigor normativo ante gerentes y departamentos de RRHH para ganar licitaciones y contratos de auditoría.',
    solution: 'Diseñamos una plataforma corporativa estructurada bajo normativas ecuatorianas e ISO 45001, con catálogo técnico de servicios, solicitud de matrices IPER y cotizador enlazado a Telegram.',
    description: 'Plataforma empresarial de ingeniería aplicada a la prevención de riesgos laborales bajo normativas ecuatorianas e ISO 45001. Incluye catálogo de servicios de auditoría y cotizador de inspecciones técnicas.',
    metrics: [
      { label: 'Normativa', value: 'ISO 45001', icon: ShieldCheck },
      { label: 'Alertas Leads', value: '< 1 seg', icon: Zap },
      { label: 'Seguridad', value: 'SSL Cert.', icon: Globe }
    ],
    highlights: [
      'Arquitectura de ingeniería con presentación ejecutiva de servicios industriales.',
      'Módulo de solicitud de auditorías laborales y mediciones ambientales.',
      'Formulario de cotización conectado con alertas automáticas a Telegram.',
      'Dominio oficial propio con servidor Cloud y certificado SSL empresarial.'
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vercel Edge', 'Telegram Bot']
  },
  {
    id: 'bot-ia-whatsapp',
    title: 'Asistente Virtual con IA 24/7',
    subtitle: 'Bot Inteligente con ChatGPT para Cierre de Ventas por WhatsApp',
    categoryLabel: 'Inteligencia Artificial & CRM',
    categoryType: 'bot',
    industry: 'Empresas de Servicios, Salud & Retail',
    clientLocation: 'Ecuador & Internacional 🌎',
    status: '🤖 Disponible para Integración',
    type: 'bot',
    challenge: 'Las empresas pierden clientes de alto valor que escriben por WhatsApp en las noches o fines de semana y no reciben respuesta en los primeros 5 minutos.',
    solution: 'Implementamos un asistente virtual con IA conectado a la API de OpenAI (ChatGPT), entrenado con los precios, catálogo y políticas del negocio para responder como humano y capturar leads a Notion.',
    description: 'Vendedor virtual con Inteligencia Artificial que atiende 24/7 por WhatsApp. Responde preguntas complejas, recomienda productos, cotiza y guarda los datos de prospectos en tiempo real.',
    metrics: [
      { label: 'Atención Continua', value: '24/7/365', icon: Clock },
      { label: 'Tiempo Respuesta', value: '< 3 seg', icon: Zap },
      { label: 'Captura Prospectos', value: 'Automática', icon: Database }
    ],
    highlights: [
      'Entrenado con información y catálogo exacto de tu negocio.',
      'Captura de nombre, correo y necesidad directo a tu base de datos o Notion.',
      'Derivación automática a asesor humano cuando el cliente está listo para pagar.',
      'Cero caídas y compatible con números locales de WhatsApp.'
    ],
    tags: ['Python / Node.js', 'OpenAI ChatGPT', 'WhatsApp API', 'Notion CRM', 'Cloud Server']
  }
];

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItemData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categoryType === activeFilter);

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Todos los Proyectos', count: PROJECTS_DATA.length },
    { id: 'saas', label: 'Sistemas SaaS', count: PROJECTS_DATA.filter(p => p.categoryType === 'saas').length },
    { id: 'ecommerce', label: 'Tiendas E-Commerce', count: PROJECTS_DATA.filter(p => p.categoryType === 'ecommerce').length },
    { id: 'corporate', label: 'Webs Corporativas', count: PROJECTS_DATA.filter(p => p.categoryType === 'corporate').length },
    { id: 'bot', label: 'Bots & IA', count: PROJECTS_DATA.filter(p => p.categoryType === 'bot').length },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Portafolio &amp; Casos de Estudio</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.25)]">
            <FolderGit2 className="w-4 h-4 text-rose-400" />
            <span>Casos de Éxito &amp; Software en Producción</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Proyectos de <span className="crimson-gradient-text">Ingeniería &amp; Software</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Explora las plataformas web, sistemas clínicos y herramientas de comercio electrónico que he diseñado y desplegado en infraestructura cloud moderna.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)] ring-1 ring-rose-300'
                    : 'bg-[#120710]/90 text-slate-400 hover:text-white border border-rose-950/80 hover:border-rose-700/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-rose-950 text-rose-200' : 'bg-white/5 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Showcase Grid */}
        <div className="space-y-14 mb-24">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="tech-card rounded-3xl p-6 sm:p-9 bg-[#10070e]/95 border-2 border-rose-950/80 hover:border-rose-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Interactive Cyber Mockup / Real Time Live Sandbox */}
              <div className="lg:col-span-7">
                
                {/* Case 1: Live Real-Time Web Preview (Ópticas Visual Store) */}
                {proj.liveUrl && (
                  <LiveBrowserPreview
                    url={proj.liveUrl}
                    title={proj.title}
                    badgeText="En Línea • Vercel Edge"
                  />
                )}

                {/* Case 2: Tienda de Ropa (Mobile TikTok E-Commerce Mockup) */}
                {proj.type === 'ecommerce' && !proj.liveUrl && (
                  <div className="max-w-md mx-auto rounded-3xl bg-[#090407] border-2 border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    <div className="bg-[#14070f] px-5 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-rose-400" />
                        <span className="text-white font-bold">Catálogo Móvil TikTok</span>
                      </div>
                      <span className="text-[10px] text-rose-300 bg-rose-950 px-2 py-0.5 rounded border border-rose-500/30">
                        Venta Mayor / Menor
                      </span>
                    </div>

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

                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/30 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300 font-bold">
                        <span>⚡ Pedido Directo a WhatsApp</span>
                        <span>0 Clics Inútiles</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 3: HBW Risk Solutions (Corporate Industrial Safety Mockup) */}
                {proj.type === 'corporate' && (
                  <div className="rounded-2xl bg-[#090407] border border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    <div className="bg-[#14070f] px-4 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-rose-400" />
                        <span className="text-white font-bold">HBW Risk Solutions</span>
                      </div>
                      <span className="text-[10px] text-amber-300 font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
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

                {/* Case 4: Bot IA WhatsApp (AI Chat Sandbox Mockup) */}
                {proj.type === 'bot' && (
                  <div className="max-w-md mx-auto rounded-3xl bg-[#090407] border-2 border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)]">
                    <div className="bg-[#14070f] px-4 py-3 border-b border-rose-950 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-rose-400" />
                        <span className="text-white font-bold">Asistente IA WhatsApp</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CHATGPT 24/7
                      </span>
                    </div>

                    <div className="p-4 space-y-3 text-left font-sans text-xs">
                      <div className="bg-[#160a12] p-3 rounded-2xl rounded-tl-sm text-slate-300 border border-rose-950/80 max-w-[85%]">
                        <p className="text-[11px]">¡Hola! ¿Tienen disponible el paquete de Landing Page por $35 al mes?</p>
                      </div>
                      <div className="bg-gradient-to-r from-rose-900/60 to-red-900/40 p-3 rounded-2xl rounded-tr-sm text-white border border-rose-500/30 ml-auto max-w-[90%]">
                        <p className="text-[11px]">¡Hola! 👋 Sí, está disponible. Incluye diseño en 1 página, dominio .com y hosting 24/7. ¿Para qué tipo de negocio te gustaría armarla?</p>
                      </div>
                      <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                        <span>⚡ Lead guardado en Notion CRM</span>
                        <span>Respuesta: 1.4s</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Case Study Spec & Description */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 uppercase">
                      {proj.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-heading leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-rose-300/90 font-mono mt-1">
                    {proj.industry} • {proj.clientLocation}
                  </p>
                </div>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5">
                  {proj.metrics.map((m, mIdx) => {
                    const MIcon = m.icon;
                    return (
                      <div key={mIdx} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/5">
                        <MIcon className="w-3.5 h-3.5 text-rose-400 mx-auto mb-1" />
                        <span className="font-heading font-extrabold text-white text-xs block">{m.value}</span>
                        <span className="text-[9px] font-mono text-slate-400 block">{m.label}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5">
                  {proj.highlights.slice(0, 3).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-black/40 border border-rose-950 text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-rose-950/80 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-1.5 transition-all border border-white/10 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-rose-300" />
                    <span>Ver Caso de Estudio</span>
                  </button>

                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all"
                    >
                      <span>Web en Vivo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to="/cotizar"
                      className="px-4 py-2.5 rounded-xl bg-rose-950/70 hover:bg-rose-900/80 text-rose-200 border border-rose-500/30 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Cotizar Similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Global Strategy & Trust Highlights (Inspiración Digital Space adaptada a Ecuador) */}
        <div className="tech-card rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#140810] via-[#0d050a] to-[#140810] border-2 border-rose-500/30 mb-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="mono-label text-rose-400">INGENIERÍA &amp; ESCALABILIDAD</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Arquitectura Moderna para Negocios que Crecen
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cada proyecto es desarrollado bajo estándares internacionales de ingeniería de software: código limpio en TypeScript, bases de datos relacionales en Supabase, CDN Global en Vercel y optimización de conversión directa a WhatsApp.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-1">
                <span className="font-heading font-black text-2xl text-rose-400">100%</span>
                <span className="text-xs font-bold text-white block">Código Propio</span>
                <span className="text-[10px] font-mono text-slate-400 block">Sin plantillas genéricas</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-1">
                <span className="font-heading font-black text-2xl text-emerald-400">&lt; 1.0s</span>
                <span className="text-xs font-bold text-white block">Tiempo de Carga</span>
                <span className="text-[10px] font-mono text-slate-400 block">Vercel Edge Global</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-1">
                <span className="font-heading font-black text-2xl text-amber-400">24/7</span>
                <span className="text-xs font-bold text-white block">Soporte Continuo</span>
                <span className="text-[10px] font-mono text-slate-400 block">Atención directa</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-1">
                <span className="font-heading font-black text-2xl text-purple-400">SSL</span>
                <span className="text-xs font-bold text-white block">Encriptación</span>
                <span className="text-[10px] font-mono text-slate-400 block">Máxima seguridad</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="tech-card rounded-3xl p-8 sm:p-12 bg-[#120710]/95 border-2 border-rose-500/40 text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Iniciemos tu Transformación Digital</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            ¿Listo para construir el software de tu empresa?
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Obtén un presupuesto exacto en nuestro cotizador interactivo o escríbeme directamente por WhatsApp para coordinar tu proyecto.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/cotizar"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.5)] transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Cotizador Interactivo en Línea</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent('¡Hola Erick! Estuve revisando tu portafolio de proyectos en izerick.dev y me gustaría cotizar una propuesta personalizada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#140b0f] hover:bg-[#1a0f14] text-white border border-emerald-500/40 hover:border-emerald-500 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Conversar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <FAQSection />

      </div>

      {/* Case Study In-Depth Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0f060d] border-2 border-rose-500/50 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-[0_0_50px_rgba(244,63,94,0.3)] space-y-6 text-left">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 uppercase">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-rose-300 font-mono">
                {selectedProject.industry} • {selectedProject.clientLocation}
              </p>
            </div>

            {/* Problem & Engineering Solution Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-400 block">🛑 El Reto / Problema Inicial:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 block">💡 Solución de Ingeniería:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-white block">✨ Entregables Clave:</span>
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <span className="text-xs font-mono font-bold text-white block mb-2">🛠️ Tecnologías Aplicadas:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-rose-950/80 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent(`¡Hola Erick! Estuve leyendo el caso de estudio de ${selectedProject.title} en tu portafolio y me gustaría cotizar un sistema similar para mi negocio.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quiero un Proyecto Similar</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <span>Visitar Web en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
