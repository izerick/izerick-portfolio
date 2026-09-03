import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Flame, Sparkles } from 'lucide-react';

export const PromoToast: React.FC = () => {
  const location = useLocation();

  // Hide completely on cotizador and landing-page routes
  const isHiddenRoute = location.pathname === '/cotizar' || location.pathname === '/landing-page';

  // Read stored preferences from sessionStorage
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    return sessionStorage.getItem('promo_minimized') === 'true';
  });

  useEffect(() => {
    if (isHiddenRoute) return;

    // Check if the user already minimized or interacted with the promo
    const alreadyMinimized = sessionStorage.getItem('promo_minimized') === 'true';
    const alreadySeen = sessionStorage.getItem('promo_seen') === 'true';

    if (alreadyMinimized) {
      setIsMinimized(true);
      setIsOpen(false);
      return;
    }

    if (alreadySeen) {
      // If already shown previously in this session, keep it minimized to avoid disturbing the user
      setIsMinimized(true);
      setIsOpen(false);
      return;
    }

    // First time arrival: Show full toast after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMinimized(false);
      sessionStorage.setItem('promo_seen', 'true');
    }, 3000);

    return () => clearTimeout(timer);
  }, [isHiddenRoute]);

  if (isHiddenRoute) return null;

  const handleMinimize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(true);
    sessionStorage.setItem('promo_minimized', 'true');
    sessionStorage.setItem('promo_seen', 'true');
  };

  const handleExpand = () => {
    setIsMinimized(false);
    setIsOpen(true);
    sessionStorage.removeItem('promo_minimized');
  };

  const handleNavigateToOffer = () => {
    setIsOpen(false);
    setIsMinimized(true);
    sessionStorage.setItem('promo_minimized', 'true');
  };

  return (
    <>
      {/* 1. Lateral Floating Glowing Tab (Fixed on Left Screen Edge) */}
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999]"
          >
            <button
              onClick={handleExpand}
              className="relative group py-2.5 px-1.5 sm:py-3.5 sm:px-2.5 rounded-r-xl sm:rounded-r-2xl bg-gradient-to-b from-rose-600 via-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(244,63,94,0.6)] hover:shadow-[0_0_35px_rgba(244,63,94,0.85)] border-t border-r border-b border-rose-300/50 flex flex-col items-center gap-1.5 cursor-pointer transition-all hover:pr-3 select-none"
              aria-label="Abrir oferta especial"
            >
              {/* Pulse Radar Glow */}
              <span className="absolute -inset-0.5 rounded-r-xl sm:rounded-r-2xl bg-rose-500/30 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />

              {/* Flame Icon */}
              <div className="p-0.5 sm:p-1 rounded-full bg-white/20 text-amber-200">
                <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-300 animate-bounce" />
              </div>

              {/* Vertical Text: O F E R T A */}
              <div className="flex flex-col items-center text-[8px] sm:text-[9px] font-mono font-extrabold tracking-[0.15em] uppercase text-white drop-shadow leading-tight">
                <span>O</span>
                <span>F</span>
                <span>E</span>
                <span>R</span>
                <span>T</span>
                <span>A</span>
              </div>

              {/* Price Tag badge */}
              <span className="text-[8px] sm:text-[9px] font-mono font-black text-rose-950 bg-amber-300 px-1 py-0.2 rounded shadow-sm">
                $35
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full Floating Modal Card */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-4 sm:left-6 z-[9999] max-w-[340px] w-[calc(100vw-2rem)] rounded-3xl p-5 bg-[#11070e]/98 border-2 border-rose-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(244,63,94,0.4)] backdrop-blur-2xl select-none overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close / Minimize to Left Button */}
            <button
              onClick={handleMinimize}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-rose-950/90 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-500/40 transition-colors z-20 shadow-md cursor-pointer"
              title="Minimizar al lateral"
              aria-label="Cerrar y minimizar al lateral"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Badge Header */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Flame className="w-3 h-3 text-amber-200 fill-amber-300 animate-pulse" />
                <span>Oferta Especial</span>
              </span>
              <span className="text-[10px] font-mono text-rose-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                Plan 12 Meses
              </span>
            </div>

            {/* Title */}
            <h4 className="text-sm font-extrabold text-white font-heading tracking-tight leading-snug mb-1.5 pr-6">
              Página Web Todo Incluido <span className="crimson-gradient-text">por $35/mes</span>
            </h4>

            {/* Subtext */}
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Diseño profesional, Dominio .com, Servidor Cloud 24/7 y Mantenimiento continuo incluido.
            </p>

            {/* CTA Button to Offer Landing Page */}
            <Link
              to="/landing-page"
              onClick={handleNavigateToOffer}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.45)] transition-all group active:scale-98 ring-1 ring-rose-400/50"
            >
              <span>Ver Promoción Completa</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
