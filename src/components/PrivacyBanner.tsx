import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export const PrivacyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('izerick_privacy_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
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
          <motion.div
            aria-label="Aviso de Cookies y Privacidad"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-0 inset-x-0 z-[99999] bg-[#090e0b]/95 backdrop-blur-md border-t border-emerald-500/20 py-2.5 px-4 sm:px-8 shadow-2xl text-slate-300"
          >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              
              {/* Text & Icon */}
              <div className="flex items-center gap-2.5 text-center sm:text-left">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 hidden sm:block" />
                <p className="text-slate-300 text-[11px] sm:text-xs">
                  Utilizamos cookies y tecnologías esenciales para garantizar el rendimiento y la mejor experiencia de usuario.
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-slate-400 hover:text-emerald-400 text-[11px] sm:text-xs underline transition-colors cursor-pointer"
                >
                  Más información
                </button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAccept}
                  className="py-1.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-emerald-950"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Aceptar</span>
                </motion.button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PrivacyPolicyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
