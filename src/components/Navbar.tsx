import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#070406]/90 backdrop-blur-md border-b border-rose-950/60 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-rose-950/70 border border-rose-500/40 flex items-center justify-center text-rose-300 font-mono font-bold text-xs group-hover:border-rose-400 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            EB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm text-white tracking-tight">
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-500/30">
                izerick.dev
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-sans block">
              Ing. Seguridad Industrial • Dev Autónomo
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <a href="#perfil" className="hover:text-rose-400 transition-colors">
            Perfil
          </a>
          <a href="#proyectos" className="hover:text-rose-400 transition-colors">
            Proyectos en Marcha
          </a>
          <a href="#servicios" className="hover:text-rose-400 transition-colors">
            Servicios
          </a>
          <a href="#tecnologias" className="hover:text-rose-400 transition-colors">
            Stack
          </a>
          <a href="#contacto" className="hover:text-rose-400 transition-colors">
            Contacto
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#140b0f] border border-rose-900/40 text-slate-300 hover:text-white hover:border-rose-500/50 transition-colors"
            title="GitHub @izerick"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(225,29,72,0.35)]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contactar</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#140b0f] border border-rose-900/40 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0508]/95 backdrop-blur-xl border-b border-rose-900/40 px-6 py-5 space-y-3 font-mono text-xs">
          <a
            href="#perfil"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-300 py-1.5"
          >
            // 01. Perfil & Trayectoria
          </a>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-300 py-1.5"
          >
            // 02. Proyectos en Marcha
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-300 py-1.5"
          >
            // 03. Servicios
          </a>
          <a
            href="#tecnologias"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-300 py-1.5"
          >
            // 04. Tecnologías
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-rose-300 py-1.5"
          >
            // 05. Contacto
          </a>

          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar Mensaje</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
