import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Terminal, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { InteractiveCyberBackground, BackgroundVariant } from '../components/InteractiveCyberBackground';
import { BackgroundDemoToolbar } from '../components/BackgroundDemoToolbar';

export const AboutPage: React.FC = () => {
  const [bgVariant, setBgVariant] = React.useState<BackgroundVariant>('particles');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Dynamic Interactive Background (Sin rostro, 100% Ingeniería) */}
      <InteractiveCyberBackground variant={bgVariant} />

      {/* Floating Visual Atmosphere Switcher */}
      <BackgroundDemoToolbar currentVariant={bgVariant} onVariantChange={setBgVariant} />

      {/* Glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[400px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Perfil &amp; Trayectoria</span>
        </div>

        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-rose-400" />
            <span>Perfil Profesional</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Ingeniería de Precisión &amp; <br />
            <span className="crimson-gradient-text">Desarrollo de Software Autónomo</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Combino el rigor técnico de la Ingeniería en Seguridad Industrial y Gestión de Riesgos con la arquitectura de software Full-Stack y la infraestructura en la nube.
          </p>
        </div>

        {/* Dual Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Engineering */}
          <div className="tech-card rounded-3xl p-8 bg-[#11070e]/80 border border-rose-950/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white font-heading">
              Ingeniería en Seguridad Industrial &amp; Gestión de Riesgos
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Graduado de la <strong>Universidad Técnica Estatal de Quevedo (UTEQ)</strong>. Formación especializada en diagnóstico de procesos críticos, mitigación de fallos, matrices IPER, cumplimiento normativo y diseño de sistemas a prueba de contingencias.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-rose-300">
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">Matrices IPER</span>
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">Planes de Emergencia</span>
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">Auditorías SART</span>
            </div>
          </div>

          {/* Pillar 2: Software */}
          <div className="tech-card rounded-3xl p-8 bg-[#11070e]/80 border border-rose-950/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Terminal className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white font-heading">
              Desarrollador Full-Stack &amp; Arquitecto Cloud
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Constructor de ecosistemas digitales modernos con <strong>React, TypeScript, Node.js, Python y Cloud Serverless</strong>. Despliego infraestructuras de alta disponibilidad con SSL, automatizaciones y bases de datos en la nube.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-rose-300">
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">React 19 &amp; TypeScript</span>
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">Cloud &amp; Edge Deployment</span>
              <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/20">Lead Bots &amp; Notion API</span>
            </div>
          </div>

        </div>

        {/* Philosophy & Approach */}
        <div className="tech-card rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#180a13] to-[#0f060b] border border-rose-500/40 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-widest block mb-2">
              METODOLOGÍA DE TRABAJO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">
              Cero Plantillas Pesadas. 100% Rendimiento Real.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
              A diferencia de las agencias tradicionales que revenden plantillas lentas de WordPress con decenas de plugins inseguros, construyo software y páginas web artesanales con código limpio, tiempos de carga inferiores a 1 segundo y máxima conversión comercial.
            </p>
          </div>
        </div>

        {/* Next CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#11070e] border border-rose-950">
          <div>
            <h4 className="text-base font-bold text-white font-heading">¿Tienes un proyecto en mente?</h4>
            <p className="text-xs text-slate-400">Calcula tu presupuesto en vivo o agenda una conversación técnica.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/cotizar"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Ir al Cotizador</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
