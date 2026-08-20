import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowRight, 
  Check,
  ShieldCheck, 
  Smartphone, 
  Globe,
  Bot,
  Sparkles,
  Zap,
  Eye,
  MessageCircle,
  X,
  Utensils,
  Building2
} from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type FilterType = 'all' | 'sistema' | 'ecommerce' | 'corporativo' | 'ia';

interface ProjectItemData {
  id: string;
  name: string;
  catLabel: string;
  type: string;
  filterKey: FilterType;
  industry: string;
  location: string;
  status: string;
  gradient: string;
  accentColor: string;
  previewType: 'optical' | 'ecommerce' | 'corporate' | 'bot' | 'restaurant' | 'realestate';
  liveUrl?: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  specs: string[];
  metrics: { label: string; value: string }[];
}

const PROJECTS_DATA: ProjectItemData[] = [
  {
    id: 'optica-visual-store',
    name: 'Ópticas Visual Store®',
    catLabel: 'Sistemas a Medida',
    type: 'Software Clínico Cloud',
    filterKey: 'sistema',
    industry: 'Salud Visual & Centros Médicos',
    location: 'Quito, Ecuador 🇪🇨',
    status: '🟢 En Producción',
    gradient: 'from-blue-900/40 via-indigo-950/60 to-purple-950/40',
    accentColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/80',
    previewType: 'optical',
    liveUrl: 'https://optica.izerick.dev',
    description: 'Plataforma web médica para consultorios oftalmológicos. Integra fichas clínicas con refracción computarizada (OD/OI), panel de facturación desglosada de lunas y armazones, y agenda médica.',
    challenge: 'El centro óptico registraba historiales y valores de lunas en papel físico, causando pérdida de recetas, retrasos en la atención y descontrol contable.',
    solution: 'Desarrollamos una plataforma clínica web completa con base de datos en la nube, refracción oftalmológica computarizada, catálogo de monturas y control de caja.',
    metrics: [
      { label: 'Tiempo de Carga', value: '< 0.8s' },
      { label: 'Fichas Médicas', value: '100% Digital' },
      { label: 'Disponibilidad', value: '99.9% Uptime' }
    ],
    highlights: [
      'Portal clínico con refracción computarizada (Esfera, Cilindro, Eje, DP).',
      'Facturación con desglose independiente de Lunas y Armazón con balance de caja.',
      'Sincronización con reseñas de clientes y catálogo de monturas.',
      'Despliegue en servidores cloud seguros con encriptación SSL.'
    ],
    specs: ['Frontend React Pro', 'Código TypeScript', 'Base de Datos Cloud', 'TailwindCSS', 'Arquitectura Modular']
  },
  {
    id: 'tienda-ropa-ecommerce',
    name: 'Streetwear & Moda Urbana',
    catLabel: 'Tiendas Online y E-commerce',
    type: 'Catálogo Móvil PWA',
    filterKey: 'ecommerce',
    industry: 'Moda, Ropa & Calzado',
    location: 'Ecuador 🇪🇨',
    status: '⚡ Optimizado Mobile',
    gradient: 'from-rose-900/40 via-red-950/60 to-pink-950/40',
    accentColor: 'text-rose-400 border-rose-500/30 bg-rose-950/80',
    previewType: 'ecommerce',
    description: 'Catálogo de comercio electrónico optimizado para celulares y tráfico viral de redes sociales, con venta al por mayor/menor, selector de tallas y pedido directo por mensajería.',
    challenge: 'Pérdida de compras impulsivas de TikTok e Instagram por carritos de compra lentos y formularios de registro obligatorios.',
    solution: 'Creamos una tienda online ultrarrápida con selector de tallas (S/M/L/XL), descuentos por compras en volumen y checkout directo a WhatsApp en 2 clics.',
    metrics: [
      { label: 'Velocidad Móvil', value: 'Instantánea' },
      { label: 'Checkout Pedido', value: '2 Clics' },
      { label: 'Precios Mayor', value: 'Automáticos' }
    ],
    highlights: [
      'Descuentos automáticos por compras al por mayor (3+ prendas).',
      'Filtros instantáneos por tallas, colores y disponibilidad en bodega.',
      'Conexión directa con WhatsApp Business para cierre de venta sin fricción.',
      'Diseño 100% Mobile-First para compras desde el teléfono.'
    ],
    specs: ['Mobile-First PWA', 'React Pro', 'TailwindCSS', 'Integración WhatsApp API', 'Optimización Web']
  },
  {
    id: 'hbw-risk-solutions',
    name: 'HBW Risk Solutions',
    catLabel: 'Páginas Corporativas',
    type: 'Portal de Ingeniería Industrial',
    filterKey: 'corporativo',
    industry: 'Prevención de Riesgos & Normativas ISO',
    location: 'Guayaquil / Quevedo 🇪🇨',
    status: '🚀 En Lanzamiento',
    gradient: 'from-amber-900/40 via-stone-950/60 to-orange-950/40',
    accentColor: 'text-amber-400 border-amber-500/30 bg-amber-950/80',
    previewType: 'corporate',
    description: 'Plataforma empresarial de ingeniería aplicada a la prevención de riesgos laborales bajo normativas ecuatorianas e ISO 45001. Incluye catálogo técnico y cotizador de auditorías.',
    challenge: 'Las consultoras técnicas necesitan proyectar máxima seriedad y rigor normativo ante gerencias corporativas para licitaciones y contratos industriales.',
    solution: 'Diseñamos una plataforma corporativa estructurada bajo normativas laborales, con catálogo de auditorías, solicitud de matrices IPER y cotizador en línea.',
    metrics: [
      { label: 'Normativa', value: 'ISO 45001' },
      { label: 'Alertas Leads', value: '< 1 seg' },
      { label: 'Seguridad', value: 'SSL Cert.' }
    ],
    highlights: [
      'Arquitectura de ingeniería con presentación ejecutiva de servicios industriales.',
      'Módulo de solicitud de auditorías laborales y mediciones ambientales.',
      'Formulario de cotización conectado con alertas instantáneas.',
      'Dominio oficial propio con servidor cloud y certificado SSL empresarial.'
    ],
    specs: ['React Empresarial', 'TypeScript', 'TailwindCSS', 'Formularios Seguros', 'Alertas Cloud']
  },
  {
    id: 'bot-ia-whatsapp',
    name: 'Asistente Virtual con IA 24/7',
    catLabel: 'Inteligencia Artificial & Bots',
    type: 'Vendedor Inteligente WhatsApp',
    filterKey: 'ia',
    industry: 'Empresas de Servicios & Retail',
    location: 'Latinoamérica 🌎',
    status: '🤖 Disponible',
    gradient: 'from-emerald-900/40 via-teal-950/60 to-green-950/40',
    accentColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/80',
    previewType: 'bot',
    description: 'Vendedor virtual con Inteligencia Artificial que atiende 24/7 por WhatsApp. Responde preguntas complejas, recomienda productos, cotiza y guarda los datos de prospectos.',
    challenge: 'Las empresas pierden clientes de alto valor que escriben en horarios no laborales y no reciben respuesta en los primeros minutos.',
    solution: 'Implementamos un asistente virtual con IA entrenado con la información, catálogo y precios del negocio para responder como humano y registrar prospectos en tiempo real.',
    metrics: [
      { label: 'Atención Continua', value: '24/7/365' },
      { label: 'Tiempo Respuesta', value: '< 3 seg' },
      { label: 'Captura Prospectos', value: 'Automática' }
    ],
    highlights: [
      'Entrenado con información y catálogo exacto de tu negocio.',
      'Captura de nombre, correo y necesidad directo a tu base de datos.',
      'Derivación automática a asesor humano cuando el cliente va a pagar.',
      'Cero caídas y compatible con números locales de WhatsApp.'
    ],
    specs: ['Modelos de IA Avanzados', 'Node.js / Cloud', 'API de Mensajería', 'Base de Datos Leads']
  },
  {
    id: 'restaurant-delivery-pos',
    name: 'Restaurant & Delivery Express',
    catLabel: 'Sistemas a Medida',
    type: 'Menú Digital & Comandas',
    filterKey: 'sistema',
    industry: 'Gastronomía & Restaurantes',
    location: 'Ecuador 🇪🇨',
    status: '✨ Módulo Disponible',
    gradient: 'from-orange-900/40 via-amber-950/60 to-red-950/40',
    accentColor: 'text-orange-400 border-orange-500/30 bg-orange-950/80',
    previewType: 'restaurant',
    description: 'Sistema web de pedidos y comandas para restaurantes. Permite a los clientes escanear código QR en mesa o pedir a domicilio sin pagar comisiones a plataformas externas.',
    challenge: 'Altas comisiones de apps de delivery que reducen los márgenes del restaurante y lentitud en toma de pedidos en horas pico.',
    solution: 'Menú digital interactivo propio con fotos, adicionales de platillos, cálculo automático de costos y recepción de comandas en tiempo real.',
    metrics: [
      { label: 'Comisiones App', value: '0% Extras' },
      { label: 'Menú QR', value: 'En Mesa' },
      { label: 'Control Ventas', value: 'En Vivo' }
    ],
    highlights: [
      'Catálogo con fotos, modificadores de platos e inventario.',
      'Recepción de pedidos con dirección de entrega y forma de pago.',
      'Panel administrativo para actualizar precios en segundos.',
      'Sin costos mensuales abusivos por comisión de venta.'
    ],
    specs: ['React SPA', 'Panel de Control', 'Impresión de Comandas', 'Base de Datos Cloud']
  },
  {
    id: 'portal-inmobiliario-pro',
    name: 'Inmobiliaria & Bienes Raíces',
    catLabel: 'Páginas Corporativas',
    type: 'Catálogo de Propiedades',
    filterKey: 'corporativo',
    industry: 'Bienes Raíces & Arquitectura',
    location: 'Ecuador 🇪🇨',
    status: '🏢 Módulo Corporativo',
    gradient: 'from-purple-900/40 via-slate-950/60 to-indigo-950/40',
    accentColor: 'text-purple-400 border-purple-500/30 bg-purple-950/80',
    previewType: 'realestate',
    description: 'Portal inmobiliario de alto impacto para agencias y constructoras con filtros de búsqueda por ciudad, precio, metros cuadrados y botón directo de asesoría.',
    challenge: 'Dificultad para presentar proyectos inmobiliarios y captar compradores calificados de propiedades residenciales o comerciales.',
    solution: 'Plataforma con buscador predictivo, fichas técnicas de cada propiedad con galerías HD y agendamiento de visitas por mensajería.',
    metrics: [
      { label: 'Galerías HD', value: 'Optimizado' },
      { label: 'Filtros Inmuebles', value: 'Instantáneos' },
      { label: 'Captación Leads', value: 'WhatsApp' }
    ],
    highlights: [
      'Filtros por tipo de inmueble (Casas, Departamentos, Terrenos, Locales).',
      'Galería de fotos de alta resolución con carga diferida ultra rápida.',
      'Botón de consulta rápida con el código de referencia de la propiedad.',
      'Optimización SEO para posicionamiento en búsquedas locales de Google.'
    ],
    specs: ['Buscador Avanzado', 'Galería Lightbox', 'Filtro Dinámico', 'SEO Local Google']
  }
];

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItemData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.filterKey === selectedFilter);

  // Filter Categories count
  const filterCategories = [
    { key: 'all' as FilterType, label: 'Todos los Proyectos', count: PROJECTS_DATA.length },
    { key: 'sistema' as FilterType, label: 'Sistemas a Medida', count: PROJECTS_DATA.filter(p => p.filterKey === 'sistema').length },
    { key: 'ecommerce' as FilterType, label: 'Tiendas Online y E-commerce', count: PROJECTS_DATA.filter(p => p.filterKey === 'ecommerce').length },
    { key: 'corporativo' as FilterType, label: 'Páginas Corporativas', count: PROJECTS_DATA.filter(p => p.filterKey === 'corporativo').length },
    { key: 'ia' as FilterType, label: 'Inteligencia Artificial & Bots', count: PROJECTS_DATA.filter(p => p.filterKey === 'ia').length },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden text-left">
      
      {/* Ambient Atmospheric Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb / Top Eyebrow */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Proyectos</span>
        </div>

        {/* Section Header (Estilo Digital Space) */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-rose-400 block mb-2">
            — CASOS DE ÉXITO &amp; DESARROLLO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Portafolio de <br />
            <span className="crimson-gradient-text">Proyectos</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl">
            Desarrollamos soluciones digitales a medida y software de alto impacto comercial. Conoce cómo transformamos los procesos de empresas y negocios en herramientas líderes.
          </p>
        </div>

        {/* Main Content Layout: Left Filter Sidebar + Right 3-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Left Sidebar Filter Navigation */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            
            <div className="p-5 rounded-2xl bg-[#0f070e]/90 border border-rose-950/80 shadow-lg">
              
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3 pb-2 border-b border-white/5">
                CATEGORÍA &amp; TIPO
              </span>

              <nav className="space-y-1">
                {filterCategories.map((cat) => {
                  const isActive = selectedFilter === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedFilter(cat.key)}
                      className={`w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-rose-600/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{cat.label}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                        isActive ? 'bg-rose-600 text-white' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Help Card */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase block">
                  ¿Necesitas un sistema propio?
                </span>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Diseñamos soluciones a la medida exacta de tu presupuesto y operativa.
                </p>
                <Link
                  to="/cotizar"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-rose-300 transition-colors pt-1"
                >
                  <span>Cotizar en línea</span>
                  <ArrowRight className="w-3 h-3 text-rose-400" />
                </Link>
              </div>

            </div>

          </aside>

          {/* Right Projects Grid: Clean 3-Column Cards (Digital Space Style) */}
          <main className="lg:col-span-9">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProjects.map((proj) => (
                <article
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group rounded-2xl bg-[#0f070e] border border-rose-950/80 hover:border-rose-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)] flex flex-col justify-between cursor-pointer"
                >
                  
                  {/* Top Media / Thumbnail */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#180914] to-[#0a0307] overflow-hidden border-b border-rose-950/60 flex items-center justify-center p-4">
                    
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f070e] via-transparent to-transparent opacity-80 z-10" />

                    {/* Category Badge Top Left */}
                    <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-md bg-rose-950/90 border border-rose-500/40 text-[9px] font-mono font-bold text-rose-300 uppercase tracking-wider shadow-sm">
                      {proj.catLabel}
                    </span>

                    {/* Visual Card Center Icon / Preview Mock */}
                    <div className="relative z-0 text-center transform group-hover:scale-105 transition-transform duration-300">
                      {proj.previewType === 'optical' && (
                        <div className="space-y-1 text-cyan-300">
                          <Globe className="w-8 h-8 mx-auto opacity-80 text-cyan-400" />
                          <span className="text-[10px] font-mono font-bold block">Sistema Clínico Web</span>
                        </div>
                      )}
                      {proj.previewType === 'ecommerce' && (
                        <div className="space-y-1 text-rose-300">
                          <Smartphone className="w-8 h-8 mx-auto opacity-80 text-rose-400" />
                          <span className="text-[10px] font-mono font-bold block">Catálogo Móvil PWA</span>
                        </div>
                      )}
                      {proj.previewType === 'corporate' && (
                        <div className="space-y-1 text-amber-300">
                          <ShieldCheck className="w-8 h-8 mx-auto opacity-80 text-amber-400" />
                          <span className="text-[10px] font-mono font-bold block">Ingeniería &amp; Normas</span>
                        </div>
                      )}
                      {proj.previewType === 'bot' && (
                        <div className="space-y-1 text-emerald-300">
                          <Bot className="w-8 h-8 mx-auto opacity-80 text-emerald-400" />
                          <span className="text-[10px] font-mono font-bold block">IA Chatbot 24/7</span>
                        </div>
                      )}
                      {proj.previewType === 'restaurant' && (
                        <div className="space-y-1 text-orange-300">
                          <Utensils className="w-8 h-8 mx-auto opacity-80 text-orange-400" />
                          <span className="text-[10px] font-mono font-bold block">Menú Digital &amp; POS</span>
                        </div>
                      )}
                      {proj.previewType === 'realestate' && (
                        <div className="space-y-1 text-purple-300">
                          <Building2 className="w-8 h-8 mx-auto opacity-80 text-purple-400" />
                          <span className="text-[10px] font-mono font-bold block">Portal Inmobiliario</span>
                        </div>
                      )}
                    </div>

                    {/* Quick Hover Overlay */}
                    <div className="absolute inset-0 z-20 bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-lg bg-rose-600 text-white font-bold text-[11px] shadow-md flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>Ver Ficha</span>
                      </span>
                    </div>

                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider block">
                        {proj.type}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors mt-0.5 line-clamp-1 font-heading">
                        {proj.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Footer CTA Link */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-rose-400 group-hover:text-rose-300">
                      <span>Explorar Detalles</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </article>
              ))}
            </div>

          </main>

        </div>

        {/* Global Strategy & Trust Banner */}
        <div className="tech-card rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#140810] via-[#0d050a] to-[#140810] border border-rose-950/80 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="mono-label text-rose-400">INGENIERÍA &amp; ESCALABILIDAD</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                Estrategia Tecnológica y Código Limpio
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Desarrollamos cada proyecto desde cero sin plantillas prediseñadas lentas. Garantizamos máxima velocidad de carga, encriptación segura y conexión directa de ventas con tus canales comerciales.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-0.5">
                <span className="font-heading font-black text-xl text-rose-400">100%</span>
                <span className="text-xs font-bold text-white block">Código Propio</span>
                <span className="text-[10px] font-mono text-slate-400 block">A medida</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-0.5">
                <span className="font-heading font-black text-xl text-emerald-400">&lt; 1.0s</span>
                <span className="text-xs font-bold text-white block">Velocidad</span>
                <span className="text-[10px] font-mono text-slate-400 block">Alta respuesta</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-0.5">
                <span className="font-heading font-black text-xl text-amber-400">24/7</span>
                <span className="text-xs font-bold text-white block">Soporte</span>
                <span className="text-[10px] font-mono text-slate-400 block">Directo</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#090307] border border-rose-950/80 space-y-0.5">
                <span className="font-heading font-black text-xl text-purple-400">SSL</span>
                <span className="text-xs font-bold text-white block">Encriptado</span>
                <span className="text-[10px] font-mono text-slate-400 block">Máxima seguridad</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Banner (Inspiración Digital Space) */}
        <div className="tech-card rounded-3xl p-8 sm:p-12 bg-[#120710]/95 border border-rose-500/30 text-center max-w-4xl mx-auto space-y-5 mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>¿Listo para el siguiente nivel?</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            ¿Listo para escalar <span className="crimson-gradient-text">tu próximo sistema?</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Obtén un presupuesto exacto en nuestro cotizador interactivo o escríbeme directamente por WhatsApp para coordinar tu proyecto.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/cotizar"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Cotizar Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent('¡Hola Erick! Estuve revisando tu portafolio de proyectos en izerick.dev y me gustaría cotizar una propuesta personalizada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#140b0f] hover:bg-[#1a0f14] text-white border border-emerald-500/40 hover:border-emerald-500 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <FAQSection />

      </div>

      {/* Interactive Case Study Detail Modal (Digital Space Modal Style) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0f060d] border border-rose-500/40 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-[0_0_50px_rgba(244,63,94,0.25)] space-y-6 text-left">
            
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
                {selectedProject.catLabel} • {selectedProject.type}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-rose-300/90 font-mono mt-0.5">
                {selectedProject.industry} • {selectedProject.location}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5">
              {selectedProject.metrics.map((m, mIdx) => (
                <div key={mIdx} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-heading font-extrabold text-white text-xs block">{m.value}</span>
                  <span className="text-[9px] font-mono text-slate-400 block">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Problem & Engineering Solution Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                <span className="text-xs font-mono font-bold text-rose-400 block">🛑 El Reto Inicial:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                <span className="text-xs font-mono font-bold text-emerald-400 block">💡 La Solución Aplicada:</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-white block">✨ Lo que destaca del proyecto:</span>
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Specs */}
            <div>
              <span className="text-xs font-mono font-bold text-white block mb-2">🛠️ Especificaciones Técnicas:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.specs.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-rose-950/80 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent(`¡Hola Erick! Estuve leyendo el caso de estudio de ${selectedProject.name} en tu portafolio y me gustaría cotizar un sistema similar para mi negocio.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quiero algo similar</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <span>Ver Sitio del Proyecto</span>
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
