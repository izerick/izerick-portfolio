import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-xl bg-[#0d1310] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] flex flex-col text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Política de Privacidad & Cookies
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/80">
                    izerick.dev • Términos y Protección de Datos
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto space-y-5 py-5 text-xs sm:text-sm leading-relaxed text-slate-300 pr-2">
              
              <section className="space-y-1.5">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1. Uso de Cookies y Tecnologías Esenciales
                </h4>
                <p>
                  Este sitio web utiliza cookies técnicas y herramientas de analítica anónima para optimizar la velocidad de carga, la navegación y el rendimiento general de la plataforma. No utilizamos cookies de rastreo publicitario invasivo.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  2. Datos de Contacto y Cotizaciones
                </h4>
                <p>
                  La información proporcionada en los formularios de contacto o en el cotizador interactivo se utiliza exclusivamente para responder solicitudes comerciales y coordinar propuestas de desarrollo.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>No vendemos ni compartimos información personal con terceros.</li>
                  <li>Toda la comunicación se transmite mediante canales seguros con cifrado SSL/TLS.</li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="font-bold text-white">3. Contacto</h4>
                <p>
                  Para cualquier consulta sobre privacidad o tratamiento de datos, puedes comunicarte directamente al correo: <a href="mailto:eric123joel@gmail.com" className="text-emerald-400 hover:underline">eric123joel@gmail.com</a>.
                </p>
              </section>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-heading transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                Aceptar y Cerrar
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
