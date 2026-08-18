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
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40 max-w-[340px] w-full tech-card rounded-2xl p-5 bg-[#12080d]/95 border border-rose-500/40 shadow-[0_10px_40px_rgba(244,63,94,0.3)] backdrop-blur-xl select-none"
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1 rounded-full bg-rose-950/60 hover:bg-rose-900 text-rose-300 hover:text-white transition-colors"
            aria-label="Cerrar oferta"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Badge */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Oferta Especial</span>
            </span>
            <span className="text-[10px] font-mono text-rose-300">Plan 12 Meses</span>
          </div>

          {/* Content */}
          <h4 className="text-sm font-extrabold text-white font-heading tracking-tight leading-snug mb-1.5">
            Página Web Todo Incluido <span className="crimson-gradient-text">por $35/mes</span>
          </h4>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Diseño profesional, Dominio .com, Servidor Cloud 24/7 y Mantenimiento continuo. ¡Sin pagos iniciales altos!
          </p>

          {/* CTA Link to dedicated page */}
          <Link
            to="/landing-page"
            onClick={() => setIsVisible(false)}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.35)] transition-all group"
          >
            <span>Ver Promoción Completa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
