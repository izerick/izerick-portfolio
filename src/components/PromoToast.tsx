import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Flame } from 'lucide-react';

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
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('promo_toast_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-[9999] max-w-[340px] w-[calc(100vw-3rem)] rounded-2xl p-5 bg-[#12080d]/98 border-2 border-rose-500/60 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(244,63,94,0.45)] backdrop-blur-2xl select-none"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-rose-950/90 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-500/30 transition-colors z-20"
            aria-label="Cerrar oferta"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-3 h-3 text-white fill-white animate-pulse" />
              <span>Oferta Especial</span>
            </span>
            <span className="text-[10px] font-mono text-rose-300 font-semibold">Plan 12 Meses</span>
          </div>

          {/* Content */}
          <h4 className="text-sm font-extrabold text-white font-heading tracking-tight leading-snug mb-1.5 pr-6">
            Página Web Todo Incluido <span className="crimson-gradient-text">por $35/mes</span>
          </h4>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Diseño profesional, Dominio .com, Servidor Cloud 24/7 y Mantenimiento continuo incluido.
          </p>

          {/* CTA Link to dedicated page */}
          <Link
            to="/landing-page"
            onClick={() => setIsVisible(false)}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.4)] transition-all group"
          >
            <span>Ver Promoción Completa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
