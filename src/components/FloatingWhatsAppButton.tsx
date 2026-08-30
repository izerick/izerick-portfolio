import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  ExternalLink, 
  MessageCircle,
  RotateCcw
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionUrl?: string;
  actionLabel?: string;
}

const QUICK_QUESTIONS = [
  '💼 ¿Cuánto cuesta una página o tienda?',
  '👔 Ver proyecto Sastrería Lorenz Franz',
  '👓 ¿Qué incluye el Software de Ópticas?',
  '⚡ Cotizar un software o sistema a medida'
];

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = PORTFOLIO_DATA.personalInfo.whatsappRaw || '593967097679';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! 👋 Soy el Asistente Virtual de Erick con Inteligencia Artificial. Estoy conectado 24/7 para responder preguntas sobre servicios, precios o cotizar tu proyecto. ¿En qué te puedo ayudar hoy?',
      time: 'Ahora'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleAIResponse = async (userQuery: string) => {
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userQuery,
          sessionId: 'web_session_' + (window.sessionStorage.getItem('chat_session') || Date.now())
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          let actionUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Erick, estuve chateando con tu IA en izerick.dev sobre: "${userQuery}"`)}`;
          let actionLabel = 'Continuar en WhatsApp con Erick';

          if (userQuery.toLowerCase().includes('sastreria') || userQuery.toLowerCase().includes('lorenz')) {
            actionUrl = 'https://sastre.izerick.dev';
            actionLabel = 'Ver Sastrería Lorenz Franz ↗';
          } else if (userQuery.toLowerCase().includes('optica')) {
            actionUrl = 'https://optica.izerick.dev';
            actionLabel = 'Ver Plataforma Ópticas ↗';
          }

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: 'bot',
              text: data.reply,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              actionUrl,
              actionLabel
            }
          ]);
          setIsTyping(false);
          return;
        }
      }
    } catch (err) {
      console.log('Using local intelligent fallback...');
    }

    // Local smart fallback if offline
    setTimeout(() => {
      const q = userQuery.toLowerCase();
      let reply = '';
      let actionUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Erick, vi tu portafolio y quiero cotizar: "${userQuery}"`)}`;
      let actionLabel = 'Chatear con Erick por WhatsApp';

      if (q.includes('precio') || q.includes('costo') || q.includes('cuanto') || q.includes('cuánto')) {
        reply = 'Desarrollamos soluciones a medida en la nube. Los proyectos parten desde $250 para landing pages corporativas, $450 para tiendas online y $650 para sistemas complejos. ¿Qué funciones necesitas en tu proyecto?';
        actionLabel = 'Cotizar con Erick por WhatsApp';
      } else if (q.includes('sastreria') || q.includes('sastrería') || q.includes('lorenz') || q.includes('traje')) {
        reply = 'Lorenz Franz es una experiencia web editorial para alta costura con preloader cinético, catálogo de telas importadas y carrusel elástico en Vercel Edge.';
        actionUrl = 'https://sastre.izerick.dev';
        actionLabel = 'Ver Sastrería Lorenz Franz en Vivo ↗';
      } else if (q.includes('optica') || q.includes('médic') || q.includes('clinica') || q.includes('clínica')) {
        reply = 'Ópticas Visual Store® es una plataforma médica en la nube con historias clínicas digitales, refracción computarizada (OD/OI) y facturación desglosada.';
        actionUrl = 'https://optica.izerick.dev';
        actionLabel = 'Ver Plataforma Médica Ópticas ↗';
      } else {
        reply = `Entiendo tu consulta sobre "${userQuery}". Para darte una propuesta personalizada y tiempos de entrega exactos, conversemos directamente por WhatsApp.`;
        actionLabel = 'Continuar en WhatsApp con Erick';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionUrl,
          actionLabel
        }
      ]);
      setIsTyping(false);
    }, 400);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    handleAIResponse(query);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: '¡Hola! 👋 Soy el Asistente Virtual de Erick con Inteligencia Artificial. Estoy conectado 24/7 para responder preguntas sobre servicios, precios o cotizar tu proyecto. ¿En qué te puedo ayudar hoy?',
        time: 'Ahora'
      }
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9998] flex flex-col items-end select-none">
      
      {/* Interactive AI Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="mb-3 w-[92vw] sm:w-[380px] max-h-[580px] h-[520px] rounded-3xl bg-[#0f060d]/98 border border-rose-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(244,63,94,0.25)] backdrop-blur-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-rose-950 via-[#180814] to-red-950 border-b border-rose-900/50 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-rose-600/30 border border-rose-400/40 flex items-center justify-center text-rose-300">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#180814] absolute -bottom-0.5 -right-0.5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold font-heading">IzErick AI Assistant</h4>
                    <span className="px-1.5 py-0.2 rounded bg-rose-900/80 text-rose-300 text-[8px] font-mono font-bold uppercase border border-rose-500/30">
                      Gemini 3.6
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    🟢 En línea 24/7 • Respuestas con IA
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reiniciar chat"
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Reiniciar conversación"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-rose-600 text-slate-400 hover:text-white transition-colors"
                  aria-label="Cerrar asistente de IA"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages List */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#0a0409]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-tr-none shadow-md'
                        : 'bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-none space-y-2'
                    }`}
                  >
                    <p>{m.text}</p>

                    {m.actionUrl && (
                      <a
                        href={m.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/80 hover:bg-rose-600 text-rose-200 hover:text-white text-[11px] font-bold border border-rose-500/40 transition-colors shadow-sm mt-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{m.actionLabel || 'Ver Más'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 w-fit text-slate-400 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" />
                  <span className="font-mono text-[11px] animate-pulse">Erick AI está pensando...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2.5 bg-[#120611] border-t border-white/5 overflow-x-auto no-scrollbar flex items-center gap-1.5">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-rose-950 border border-white/10 hover:border-rose-500/50 text-[10px] text-slate-300 hover:text-white font-mono whitespace-nowrap transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#0d050c] border-t border-rose-950/80 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                placeholder="Pregunta precios, proyectos o servicios..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/60 border border-rose-950 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] text-white transition-all cursor-pointer"
                aria-label="Enviar mensaje a la IA"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D AI / WhatsApp Trigger Button */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer outline-none border-none bg-transparent"
          aria-label="Abrir asistente de IA y WhatsApp oficial de Erick"
        >
          {/* Notification Badge */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rose-500 border-2 border-[#09090b] text-white text-[9px] font-black flex items-center justify-center z-20 shadow-md animate-bounce">
            IA
          </span>

          {/* Pulsating Ambient Aura */}
          <span 
            className="absolute -inset-1.5 rounded-full bg-rose-500/35 blur-sm animate-ping pointer-events-none" 
            style={{ animationDuration: '3s' }} 
          />

          {/* 3D Embossed Sphere Body (Rose Gold & Dark Gradient) */}
          <div 
            className="relative w-full h-full rounded-full flex items-center justify-center z-10 transition-all duration-300 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.6),0_0_28px_rgba(244,63,94,0.7)]"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #f43f5e 0%, #e11d48 45%, #9f1239 80%, #4c0519 100%)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.5), 0 0 20px rgba(244,63,94,0.4), inset 0 2.5px 4px rgba(255,255,255,0.65), inset 0 -4px 6px rgba(0,0,0,0.4)'
            }}
          >
            {/* Top Gloss Arc Highlight */}
            <div 
              className="absolute top-1 left-2.5 w-7 h-3.5 rounded-[50%_50%_40%_40%/80%_80%_30%_30%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 100%)'
              }}
            />

            {/* Sparkles / Bot Icon SVG */}
            <div className="relative z-10 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
              <Bot className="w-6 h-6 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
            </div>
          </div>

          {/* Desktop Tooltip */}
          {!isOpen && (
            <span className="hidden sm:group-hover:inline-flex absolute right-16 px-3.5 py-1.5 rounded-xl bg-[#11070e]/95 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold whitespace-nowrap shadow-2xl backdrop-blur-xl items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Pregúntale a la IA</span>
            </span>
          )}
        </motion.button>
      </motion.div>

    </div>
  );
};
