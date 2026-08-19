import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Globe, 
  ShoppingBag, 
  Database, 
  Bot, 
  Sparkles, 
  Server, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Zap, 
  HeartHandshake,
  Activity,
  Award,
  Smartphone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FAQSection } from '../components/FAQSection';

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  category: string;
  price: string;
  time: string;
  icon: any;
  description: string;
  idealFor: string;
  deliverables: string[];
  popular?: boolean;
}

const MAIN_SERVICES: ServiceCardData[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Desarrollo Web & Landing Pages',
    category: 'Presencia & Conversión',
    price: 'Desde $180 USD',
    time: '2-5 días hábiles',
    icon: Globe,
    description: 'Páginas web modernas, veloces y de alta conversión estructuradas para proyectar solidez y transformar visitantes en clientes reales.',
    idealFor: 'Negocios, consultorios y profesionales que necesitan captar clientes con una presencia formal y moderna.',
    deliverables: [
      'Diseño 100% Mobile-First (optimizado para celulares)',
      'Certificado SSL (https://) y Dominio .com',
      'Botón de WhatsApp y alertas instantáneas a Telegram',
      'Velocidad de carga ultrarrápida (< 1 segundo)'
    ],
    popular: true
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'Tiendas Online & Catálogos E-Commerce',
    category: 'Comercio Digital',
    price: '$420 USD',
    time: '8-12 días hábiles',
    icon: ShoppingBag,
    description: 'Catálogos interactivos y tiendas virtuales preparadas para tráfico masivo de TikTok e Instagram con cierre de pedidos directo.',
    idealFor: 'Marcas de ropa, calzado, tecnología o distribuidores que venden por redes sociales y hacen envíos en Ecuador.',
    deliverables: [
      'Precios al por menor y descuentos automáticos por mayor',
      'Filtros por tallas, colores y disponibilidad de stock',
      'Carrito de compras y checkout directo a WhatsApp',
      'Panel para subir y editar productos fácilmente'
    ]
  },
  {
    id: 'saas',
    number: '03',
    title: 'Sistemas Web & SaaS a Medida',
    category: 'Software Avanzado',
    price: 'Desde $680 USD',
    time: '2-4 semanas',
    icon: Database,
    description: 'Plataformas web y paneles administrativos a medida para digitalizar operaciones internas, historiales y facturación.',
    idealFor: 'Centros médicos, ópticas, empresas de logística o negocios con flujos de trabajo que no caben en un Excel.',
    deliverables: [
      'Base de datos en la nube (PostgreSQL con Supabase)',
      'Autenticación de usuarios con roles y permisos',
      'Paneles de métricas, balance de caja y reportes',
      'Arquitectura escalable en la nube con alta seguridad'
    ]
  },
  {
    id: 'bot-auto',
    number: '04',
    title: 'Bots de WhatsApp Automatizados',
    category: 'Atención Inmediata',
    price: '$40 USD (+$3/mes)',
    time: '1-2 días hábiles',
    icon: Bot,
    description: 'Flujos de respuestas automáticas con menús interactivos y botones de opciones para responder dudas frecuentes en 1 segundo.',
    idealFor: 'Restaurantes, barberías, tiendas y negocios que reciben decenas de preguntas repetitivas a diario.',
    deliverables: [
      'Menús con botones táctiles (Horarios, Precios, Menú)',
      'Captura automática de nombre y teléfono del prospecto',
      'Alertas inmediatas a Telegram cuando solicitan un asesor',
      '1,000 conversaciones mensuales incluidas'
    ]
  },
  {
    id: 'bot-ia',
    number: '05',
    title: 'Asistentes Virtuales con IA (ChatGPT 24/7)',
    category: 'Inteligencia Artificial',
    price: '$120 USD (+$6/mes)',
    time: '3-5 días hábiles',
    icon: Sparkles,
    description: 'Vendedor inteligente entrenado con el catálogo, políticas y precios de tu negocio para conversar y asesorar como un humano.',
    idealFor: 'Empresas que quieren aumentar sus ventas y brindar atención personalizada sin contratar personal nocturno.',
    deliverables: [
      'Modelo de IA con OpenAI ChatGPT entrenado a medida',
      'Capacidad de resolver objeciones y cotizar productos',
      'Comprensión de mensajes de voz y texto complejo',
      'Atención y cierre de ventas continuo las 24 horas'
    ],
    popular: true
  },
  {
    id: 'cloud-hosting',
    number: '06',
    title: 'Alojamiento Cloud & Mantenimiento Continuo',
    category: 'Infraestructura',
    price: '$12 USD / mes',
    time: 'Despliegue Inmediato',
    icon: Server,
    description: 'Servidores cloud de alta disponibilidad global con copias de seguridad continuas y soporte técnico incluido.',
    idealFor: 'Proyectos que no pueden permitirse caídas de servidor y requieren actualizaciones constantes de textos o fotos.',
    deliverables: [
      'Alojamiento en Global Edge CDN con 99.9% uptime',
      'Renovación anual de tu Dominio .com oficial',
      'Certificados de seguridad SSL automáticos',
      'Soporte directo de Erick para cambios y respaldos'
    ]
  }
];

const VERTICAL_SOLUTIONS = [
  {
    icon: Activity,
    sector: 'Salud & Ópticas',
    title: 'Plataformas Clínicas Oftalmológicas & Consultorios',
    desc: 'Sistemas con historias clínicas digitales, fórmulas de refracción (OD/OI), facturación desglosada de lunas y armazones, y agenda médica.',
    tag: 'Caso: Ópticas Visual Store',
    link: '/proyectos'
  },
  {
    icon: Smartphone,
    sector: 'Retail & Moda Urbana',
    title: 'Catálogos E-Commerce para Tráfico de TikTok',
    desc: 'Tiendas ultrarrápidas con descuentos automáticos por mayor, selección táctil de tallas y compra directa a WhatsApp.',
    tag: 'Caso: Moda & Boutique',
    link: '/proyectos'
  },
  {
    icon: ShieldCheck,
    sector: 'Ingeniería & Seguridad Industrial',
    title: 'Portales Corporativos & Matrices de Riesgo IPER',
    desc: 'Presentación ejecutiva de servicios de auditoría bajo normativas ISO 45001, cotizadores técnicos y registro de inspecciones.',
    tag: 'Caso: HBW Risk Solutions',
    link: '/proyectos'
  }
];

const WORK_PROCESS = [
  {
    step: '01',
    title: 'Levantamiento & Alcance',
    desc: 'Analizamos tus objetivos de negocio, el tipo de clientes que buscas atraer y definimos la arquitectura técnica óptima.'
  },
  {
    step: '02',
    title: 'Diseño UI/UX & Prototipo',
    desc: 'Diseñamos la estructura visual moderna enfocada 100% en la experiencia táctil en celulares y la tasa de conversión.'
  },
  {
    step: '03',
    title: 'Desarrollo & Base de Datos',
    desc: 'Programamos código limpio y veloz con React, TypeScript y bases de datos en la nube, garantizando robustez y cero errores.'
  },
  {
    step: '04',
    title: 'Despliegue Cloud & Entrega',
    desc: 'Configuramos tu dominio, activamos el certificado SSL, realizamos pruebas en vivo y te entregamos accesos completos.'
  }
];

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Servicios Especializados</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>Ingeniería de Software &amp; Arquitectura Cloud</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Soluciones Digitales de <br />
            <span className="crimson-gradient-text">Alto Impacto &amp; Conversión</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Construyo plataformas web rápidas, bots automatizados con inteligencia artificial y sistemas a medida diseñados para hacer crecer tu empresa.
          </p>

          {/* Quick Hero Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-6">
            <Link
              to="/cotizar"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all"
            >
              <Calculator className="w-4 h-4 text-rose-200" />
              <span>Configurar en el Cotizador</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}?text=${encodeURIComponent('Hola Erick, me gustaría consultar por tus servicios de software.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#140b0f] hover:bg-[#200e18] border border-rose-500/30 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hablar con un Experto</span>
            </a>
          </div>
        </div>

        {/* 1. Main Services Grid (Digital Space Inspiration) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-rose-950/80">
            <div>
              <span className="mono-label text-rose-400">Servicios Principales</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Catálogo de Soluciones Digitales
              </h2>
            </div>
            <span className="hidden sm:block text-xs font-mono text-slate-400">
              Entrega garantizada &amp; Código propio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className={`tech-card rounded-3xl p-7 flex flex-col justify-between transition-all relative overflow-hidden group ${
                    svc.popular 
                      ? 'bg-[#150912]/95 border-2 border-rose-500/60 shadow-[0_0_35px_rgba(244,63,94,0.2)]' 
                      : 'bg-[#10060d]/80 border border-rose-950/80 hover:border-rose-500/40'
                  }`}
                >
                  {svc.popular && (
                    <span className="absolute top-4 right-4 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white uppercase tracking-wider shadow-sm">
                      Recomendado
                    </span>
                  )}

                  <div>
                    {/* Icon & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:border-rose-400 transition-all shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block">
                          SERVICIO {svc.number}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{svc.category}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    {/* "Ideal Para" Callout Pill (Digital Space feature) */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-5 space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" /> Ideal para:
                      </span>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        {svc.idealFor}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2 mb-6">
                      {svc.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">Inversión:</span>
                      <span className="text-sm font-mono font-bold text-white">{svc.price}</span>
                    </div>

                    <Link
                      to="/cotizar"
                      className="px-4 py-2 rounded-xl bg-rose-950/70 hover:bg-rose-900 border border-rose-500/40 text-rose-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all group-hover:border-rose-400"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Specialized Vertical Solutions (Digital Space Feature) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="mono-label text-rose-400">Especialización por Sector</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              Soluciones Verticales Especializadas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Sistemas diseñados con el vocabulario, normativas y flujos exactos de cada industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERTICAL_SOLUTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="tech-card rounded-3xl p-7 bg-[#11070e]/80 border border-rose-950/80 hover:border-rose-500/40 transition-all flex flex-col justify-between text-left space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                        {item.sector}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-heading">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">{item.tag}</span>
                    <Link
                      to={item.link}
                      className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1"
                    >
                      <span>Ver Demo</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Work Methodology (4-Step Process) */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#150912] to-[#0d050a] border-2 border-rose-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="mono-label text-rose-400">Metodología de Ingeniería</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              ¿Cómo trabajamos tu proyecto?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Proceso estructurado, transparente y con comunicación directa de inicio a fin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS.map((proc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-left space-y-3 relative group hover:border-rose-500/40 transition-all"
              >
                <span className="text-3xl font-black font-heading crimson-gradient-text block">
                  {proc.step}
                </span>
                <h4 className="text-sm font-bold text-white font-heading">{proc.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom Custom Project CTA Banner */}
        <div className="tech-card rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1b0a15] to-[#10060d] border-2 border-rose-500/50 text-center max-w-4xl mx-auto mb-20 shadow-[0_0_50px_rgba(244,63,94,0.25)]">
          <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-500/30 uppercase tracking-widest inline-block mb-3">
            Presupuesto Inmediato
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mb-3">
            ¿Tienes un requerimiento especial?
          </h3>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Utiliza nuestro cotizador interactivo en tiempo real para seleccionar las funcionalidades exactas y recibir tu propuesta en minutos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/cotizar"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Abrir Cotizador en Tiempo Real</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5. Interactive FAQ Accordion */}
        <FAQSection />

      </div>

    </div>
  );
};
