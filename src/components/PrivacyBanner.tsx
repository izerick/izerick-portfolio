import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export const PrivacyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or acknowledged privacy terms
    const consent = localStorage.getItem('izerick_privacy_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('izerick_privacy_consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            aria-label="Aviso de Privacidad y Cookies"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[9990] bg-[#0c120e]/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/80 text-slate-200"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-heading">
                    Privacidad y Cookies
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    GDPR & Privacy-First
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  Utilizamos analítica anónima respetuosa y cookies esenciales para garantizar el mejor rendimiento. No rastreamos publicidad ni vendemos tus datos.
                </p>

                <div className="flex items-center gap-2.5 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAccept}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-heading flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-emerald-950/40"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Aceptar</span>
                  </motion.button>

                  <button
                    onClick={() => setShowModal(true)}
                    className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  >
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <PrivacyPolicyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
