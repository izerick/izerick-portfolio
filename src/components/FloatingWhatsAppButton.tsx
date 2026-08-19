import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMessage = '¡Hola Erick! Vengo desde tu web izerick.dev y me gustaría cotizar un proyecto digital.';
  const whatsappNumber = PORTFOLIO_DATA.personalInfo.whatsappRaw || '593967097679';

  const handleSend = () => {
    const textToSend = customMsg.trim() || defaultMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end select-none">
      
      {/* Interactive Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-3 w-[300px] sm:w-[340px] rounded-3xl bg-[#11070e]/98 border border-emerald-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(37,211,102,0.25)] backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-700 via-[#128C7E] to-emerald-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center font-bold text-xs font-mono">
                    EB
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#128C7E] absolute bottom-0 right-0" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading leading-tight">Erick Bermello</h4>
                  <span className="text-[10px] text-emerald-100 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                    En línea • WhatsApp Business
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Cerrar ventana de WhatsApp"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 bg-[#0a0508]">
              <div className="p-3 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 text-slate-200 text-xs leading-relaxed">
                👋 ¡Hola! ¿En qué proyecto o idea te puedo ayudar hoy? Escríbeme y te responderé en breve.
              </div>

              {/* Input & Direct Send Button */}
              <div className="space-y-2 pt-1">
                <textarea
                  rows={2}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-emerald-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />

                <button
                  onClick={handleSend}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Iniciar Chat en WhatsApp</span>
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-slate-950 shadow-[0_10px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_45px_rgba(37,211,102,0.65)] transition-all flex items-center justify-center ring-4 ring-emerald-950/60"
        aria-label="Abrir WhatsApp oficial de Erick Bermello"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 text-slate-950 relative z-10" />

        {/* Tooltip on Desktop */}
        {!isOpen && (
          <span className="hidden sm:group-hover:inline-flex absolute right-16 px-3 py-1.5 rounded-xl bg-[#11070e]/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold whitespace-nowrap shadow-xl">
            💬 Chatear con Erick
          </span>
        )}
      </motion.button>

    </div>
  );
};
