import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Menu, 
  X, 
  ArrowUpRight, 
  Home, 
  User, 
  Briefcase, 
  Layers, 
  Mail,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/perfil', label: 'Perfil', icon: User },
    { to: '/proyectos', label: 'Proyectos', icon: Briefcase },
    { to: '/servicios', label: 'Servicios', icon: Layers },
    { to: '/contacto', label: 'Contacto', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#070406]/98 backdrop-blur-xl border-b border-rose-950/70 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        
        {/* Left: Brand Monogram */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 font-mono font-bold text-xs group-hover:border-rose-400 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(244,63,94,0.25)]">
            EB
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-tight">
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-950/90 text-rose-300 border border-rose-500/30">
                izerick.dev
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans block">
              Ing. Seguridad Industrial • Dev
            </span>
          </div>
        </Link>

        {/* Center on Mobile: HIGHLIGHTED COTIZAR AHORA PILL BUTTON */}
        <div className="md:hidden flex items-center justify-center">
          <Link
            to="/cotizar"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-extrabold text-[11px] font-heading tracking-wide flex items-center gap-1.5 shadow-[0_0_20px_rgba(244,63,94,0.5)] ring-1 ring-rose-400/60 active:scale-95 transition-all"
          >
            <Calculator className="w-3.5 h-3.5 text-rose-200 animate-pulse" />
            <span>Cotizar Ahora</span>
            <Sparkles className="w-3 h-3 text-amber-300" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-all py-1 px-2.5 rounded-lg ${
                  isActive
                    ? 'text-white font-bold bg-rose-950/60 border border-rose-500/40 text-rose-300 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Highlighted Cotizar Ahora Button Desktop */}
          <Link
            to="/cotizar"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(244,63,94,0.4)] ring-1 ring-rose-400/50 group"
          >
            <Calculator className="w-3.5 h-3.5 text-rose-200 group-hover:rotate-12 transition-transform" />
            <span>Cotizar Ahora</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Trigger Button (Right) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#140b0f] border border-rose-900/50 text-slate-200 hover:text-white focus:outline-none transition-colors shrink-0"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown with Solid Background & Clean Cards */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0508]/99 border-b border-rose-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              
              {/* Navigation Items as Modern Touch Cards */}
              <div className="grid grid-cols-1 gap-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-rose-950/60 border border-rose-500/50 text-white font-bold'
                          : 'bg-white/[0.02] hover:bg-white/5 border border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-rose-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs tracking-wide">{link.label}</span>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                          Activo
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Full Cotizar CTA inside drawer too */}
              <div className="pt-2">
                <Link
                  to="/cotizar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.45)] ring-1 ring-rose-400/50"
                >
                  <Calculator className="w-4 h-4 text-rose-200" />
                  <span>Cotizador Interactivo en Línea</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Quick Contact Bar at bottom of drawer */}
              <div className="pt-2 flex items-center justify-center gap-4 text-slate-400 text-xs border-t border-white/5 mt-3">
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono text-[11px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directo</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white font-mono text-[11px]"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
