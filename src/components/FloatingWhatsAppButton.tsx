import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
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

      {/* 3D Animated Trigger Button */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center cursor-pointer outline-none border-none bg-transparent"
          aria-label="Abrir WhatsApp oficial de Erick Bermello"
        >
          {/* Notification Badge */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 border-2 border-[#09090b] text-white text-[9px] font-black flex items-center justify-center z-20 shadow-md">
            1
          </span>

          {/* Pulsating Ambient Aura */}
          <span 
            className="absolute -inset-1 rounded-full bg-emerald-500/35 blur-sm animate-ping pointer-events-none" 
            style={{ animationDuration: '3s' }} 
          />

          {/* 3D Embossed Sphere Body */}
          <div 
            className="relative w-full h-full rounded-full flex items-center justify-center z-10 transition-all duration-300 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.6),0_0_28px_rgba(37,211,102,0.7)]"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #4ae384 0%, #25d366 45%, #18a84f 80%, #0d6e32 100%)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.5), 0 0 20px rgba(37,211,102,0.4), inset 0 2.5px 4px rgba(255,255,255,0.65), inset 0 -4px 6px rgba(0,0,0,0.4)'
            }}
          >
            {/* Top Gloss Arc Highlight */}
            <div 
              className="absolute top-1 left-2.5 w-7 h-3.5 rounded-[50%_50%_40%_40%/80%_80%_30%_30%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 100%)'
              }}
            />

            {/* 3D Phone Icon SVG */}
            <svg 
              className="w-6 h-6 fill-white relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
              style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.35))' }}
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.68-1.4 1.3-1.95 1.38-.5.08-1.15.12-3.32-.78-2.6-1.08-4.27-3.72-4.4-3.89-.13-.17-1.05-1.4-1.05-2.67 0-1.27.66-1.89.9-2.14.23-.25.51-.31.68-.31.17 0 .34.01.49.02.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.11.31.02.49-.09.18-.14.29-.28.45-.14.16-.29.35-.42.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.03 1.28 2.32 1.42.29.14.46.12.63-.07.17-.19.74-.86.94-1.16.2-.29.4-.25.68-.14.28.11 1.78.84 2.09.99.31.15.51.23.58.36.07.13.07.76-.17 1.44z"/>
            </svg>
          </div>

          {/* Desktop Tooltip */}
          {!isOpen && (
            <span className="hidden sm:group-hover:inline-flex absolute right-16 px-3 py-1.5 rounded-xl bg-[#11070e]/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold whitespace-nowrap shadow-2xl backdrop-blur-xl">
              💬 Chatear con Erick
            </span>
          )}
        </motion.button>
      </motion.div>

    </div>
  );
};
