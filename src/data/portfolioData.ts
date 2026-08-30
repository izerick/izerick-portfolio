export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  client?: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Erick Bermello',
    handle: 'izerick',
    degree: 'Ingeniero en Seguridad Industrial',
    university: 'Universidad Técnica Estatal de Quevedo (UTEQ)',
    techRole: 'Desarrollador de Software Autónomo',
    location: 'Quevedo, Ecuador 🇪🇨',
    github: 'https://github.com/izerick',
    email: 'eric123joel@gmail.com',
    whatsapp: '+593 967 097 679',
    whatsappRaw: '593967097679',
    domain: 'https://izerick.dev'
  },

  bio: {
    intro: 'Combino la precisión y gestión de riesgos de la ingeniería con la velocidad y creatividad del desarrollo de software moderno.',
    story: 'Graduado en Ingeniería en Seguridad Industrial por la Universidad Técnica Estatal de Quevedo (UTEQ) y desarrollador de software autónomo / autodidacta. Me especializo en construir aplicaciones web rápidas, funcionales y enfocadas en resolver necesidades reales de negocios.'
  },

  timeline: [
    {
      period: 'Formación Universitaria',
      title: 'Ingeniería en Seguridad Industrial',
      institution: 'Universidad Técnica Estatal de Quevedo (UTEQ)',
      description: 'Metodología rigurosa, análisis de procesos críticos, prevención de riesgos y gestión técnica.',
      badge: 'Título Académico'
    },
    {
      period: 'Desarrollo Continuo',
      title: 'Desarrollo de Software Autónomo',
      institution: 'Autodidacta / Práctica en Proyectos Reales',
      description: 'Especialización en interfaces modernas con React, TypeScript, infraestructura Linux VPS, Nginx y bases de datos Supabase.',
      badge: 'Software Builder'
    }
  ] as TimelineItem[],

  projects: [
    {
      id: 'sastreria-lorenz-franz',
      title: 'Lorenz Franz • Alta Sastrería',
      category: 'Sitio Web Editorial & Catálogo Sartorial',
      status: 'En Producción',
      description: 'Experiencia web de alta gama para sastrería a medida tradicional. Incluye preloader cinemático, carrusel circulante elástico de trajes en alta resolución con físicas GSAP, catálogo interactivo de paños italianos e ingleses, y conexión directa para agendar citas a medida.',
      highlights: [
        'Preloader sartorial y animaciones de scroll con GSAP ScrollTrigger.',
        'Carrusel circulante infinito con físicas elásticas y soporte táctil dual.',
        'Catálogo de trajes, smokings y chaqués en paños Super 120s / 150s.',
        'Biblioteca de tejidos (Loro Piana, Holland & Sherry, Scabal, Dormeuil).',
        'Sistema de cotización y agendamiento directo de citas.'
      ],
      tags: ['HTML5', 'TailwindCSS', 'GSAP Animation', 'ScrollTrigger', 'Vercel'],
      liveUrl: 'https://sastreria.izerick.dev',
      client: 'Lorenz Franz • Franklin Alcívar',
      year: '2026'
    },

    {
      id: 'opticas-visual-store',
      title: 'Ópticas Visual Store®',
      category: 'Plataforma Clínica & Sistema SaaS',
      status: 'En Producción (VPS)',
      description: 'Sistema integral para centro óptico en Quito. Incluye gestión de historias clínicas con graduación visual computarizada OD/OI, módulo de facturación desglosado para lunas/armazones y sincronización con Google Maps Reviews.',
      highlights: [
        'Portal de Fichas Clínicas con refracción computarizada.',
        'Facturación independiente para Lunas y Armazón.',
        'Sincronización con Google Places API y base de datos Supabase.',
        'Servidor VPS Linux en Oracle Cloud con Nginx & SSL.'
      ],
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Oracle VPS', 'Nginx'],
      liveUrl: 'https://optica.izerick.dev/',
      client: 'Ópticas Visual Store "Y" (Quito)',
      year: '2026'
    },
    {
      id: 'tienda-ropa-ecommerce',
      title: 'Tienda de Ropa & Moda Urbana',
      category: 'E-Commerce & Catálogo Digital',
      status: 'En Producción (Vercel Edge)',
      description: 'Catálogo de comercio electrónico optimizado para tráfico viral de TikTok, con venta al por mayor/menor, segmentación por tallas (S/M/L/XL) y checkout directo para cierre de ventas.',
      highlights: [
        'Descuentos automáticos por compras al por mayor.',
        'Filtros instantáneos por tallas, colores y disponibilidad.',
        'Conexión directa para cierre de ventas.',
        'Optimizado 100% para celulares y carga ultrarrápida.'
      ],
      tags: ['React', 'TailwindCSS', 'PWA Móvil', 'E-Commerce'],
      liveUrl: 'https://demoropa.izerick.dev/',
      client: 'Boutique & Moda Ecuador',
      year: '2026'
    }
  ] as ProjectItem[],

  services: [
    {
      id: 'web-development',
      title: 'Sitios Web & Landing Pages',
      description: 'Páginas web corporativas y comerciales de alta velocidad, optimizadas para Google y diseñadas para proyectar seriedad y captar clientes.',
      deliverables: ['Diseño responsive en celulares', 'Certificado SSL HTTPS', 'Optimización de velocidad < 1s']
    },
    {
      id: 'ecommerce-catalog',
      title: 'Catálogos Digitales & E-Commerce',
      description: 'Tiendas online conectadas para negocios que venden por redes sociales en Ecuador y hacen envíos a nivel nacional.',
      deliverables: ['Precios al por menor y mayor', 'Flujo de pedido optimizado', 'Gestión de inventario']
    },
    {
      id: 'custom-software',
      title: 'Sistemas & Paneles Administrativos',
      description: 'Herramientas a medida para digitalizar registros, historiales, clientes o facturación interna de negocios físicos o consultorios.',
      deliverables: ['Base de datos en la nube', 'Autenticación con usuario y clave', 'Historial y reportes']
    },
    {
      id: 'bot-auto',
      title: 'Bots de WhatsApp Automatizados ($40 USD + $3/mes)',
      description: 'Automatización con menús interactivos y botones de opciones. Responde dudas frecuentes y captura el contacto del cliente hacia tu Telegram o Notion.',
      deliverables: ['Menús interactivos con botones', 'Captura automática de prospectos', 'Mantenimiento en la nube por $3/mes']
    },
    {
      id: 'bot-ia',
      title: 'Asistentes Virtuales con IA 24/7 ($120 USD + $6/mes)',
      description: 'Vendedor inteligente con Inteligencia Artificial (ChatGPT) entrenado con tu catálogo para atender, resolver dudas complejas y cerrar ventas de forma natural.',
      deliverables: ['IA conversacional con ChatGPT', 'Entrenado con tu catálogo y precios', 'Atención humana fluida las 24 horas ($6/mes)']
    }
  ] as ServiceItem[],

  skills: [
    { name: 'React 19 & Next.js', category: 'Frontend', description: 'Interfaces interactivas de alto rendimiento' },
    { name: 'TypeScript', category: 'Frontend', description: 'Tipado estricto y código mantenible' },
    { name: 'Tailwind CSS', category: 'Frontend', description: 'Diseño moderno, responsive y limpio' },
    { name: 'Node.js & Python', category: 'Backend', description: 'APIs seguras, bots y automatizaciones' },
    { name: 'Supabase & PostgreSQL', category: 'Database', description: 'Bases de datos en la nube y autenticación' },
    { name: 'Cloud & Edge Infrastructure', category: 'DevOps', description: 'Despliegues globales, SSL y alta disponibilidad' },
    { name: 'APIs & Webhooks', category: 'DevOps', description: 'Integración con Telegram, Notion y pasarelas' },
    { name: 'Git / GitHub CI/CD', category: 'DevOps', description: 'Despliegues automatizados' }
  ],

  get techStack() {
    return this.skills;
  }
};
