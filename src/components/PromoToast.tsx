import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';

export const PromoToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 2.5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('promo_toast_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('promo_toast_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-50 max-w-[320px] sm:max-w-[340px] w-[calc(100vw-40px)] tech-card rounded-2xl p-4 sm:p-5 bg-[#12080d]/98 border border-rose-500/50 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.35)] backdrop-blur-2xl select-none"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white transition-colors z-10"
            aria-label="Cerrar oferta"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Oferta Especial</span>
            </span>
            <span className="text-[10px] font-mono text-rose-300 font-semibold">Plan $35/mes</span>
          </div>

          {/* Content */}
          <h4 className="text-xs sm:text-sm font-extrabold text-white font-heading tracking-tight leading-snug mb-1">
            Página Web Todo Incluido <span className="crimson-gradient-text">por $35/mes</span>
          </h4>

          <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
            Dominio .com, Servidor Cloud 24/7, SSL y Mantenimiento continuo incluido.
          </p>

          {/* CTA Link to dedicated page */}
          <Link
            to="/landing-page"
            onClick={() => setIsVisible(false)}
            className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all group"
          >
            <span>Ver Promoción Completa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
