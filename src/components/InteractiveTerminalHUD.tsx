import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Maximize2, Minimize2, Sparkles, Send, CornerDownLeft } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminalHUD: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play subtle futuristic key click
  const playBeep = (freq = 440, duration = 0.03) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {}
  };

  // Shortcut Ctrl + K or Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory([
        {
          id: 'welcome',
          command: 'sys.init',
          time: new Date().toLocaleTimeString(),
          output: (
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="text-rose-400 font-bold">
                ⚡ ERICK BERMELLO — CORE SYSTEM TERMINAL v2.4.0
              </div>
              <div className="text-slate-400 text-[11px]">
                Host: <span className="text-emerald-400">mcmore.oracle.vps</span> (Oracle ARM Ampere 4 OCPU / 24GB RAM)
              </div>
              <div className="text-slate-400 text-[11px]">
                Escribe <span className="text-rose-300 font-bold bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/40">help</span> para ver todos los comandos disponibles.
              </div>
            </div>
          )
        }
      ]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    const args = cmd.split(' ').slice(1);
    const primaryCmd = cmd.split(' ')[0];

    playBeep(600, 0.05);

    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (primaryCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <div className="text-rose-400 font-semibold mb-1">📋 Comandos Disponibles:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div><span className="text-emerald-400 font-bold">skills</span> : Resumen de stack tecnológico</div>
              <div><span className="text-emerald-400 font-bold">projects</span> : Lista de proyectos y SaaS en vivo</div>
              <div><span className="text-emerald-400 font-bold">vps</span> : Telemetría de servidor y estado cloud</div>
              <div><span className="text-emerald-400 font-bold">about</span> : Formación e ingeniería de Erick</div>
              <div><span className="text-emerald-400 font-bold">matrix</span> : Activar/desactivar modo Matrix</div>
              <div><span className="text-emerald-400 font-bold">contact</span> : Canales directos de contacto</div>
              <div><span className="text-emerald-400 font-bold">clear</span> : Limpiar la pantalla</div>
              <div><span className="text-emerald-400 font-bold">exit</span> : Cerrar terminal</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-rose-400 font-bold">🛠️ STACK TECNOLÓGICO:</div>
            <div className="space-y-1.5 text-[11px]">
              <div>
                <span className="text-slate-400">Frontend:</span> React • TypeScript • TailwindCSS • Next.js
                <div className="w-full bg-slate-900 rounded-full h-1.5 mt-0.5"><div className="bg-rose-500 h-1.5 rounded-full w-[95%]" /></div>
              </div>
              <div>
                <span className="text-slate-400">Cloud & DevOps:</span> Linux VPS • Docker • Nginx • Coolify • Let's Encrypt
                <div className="w-full bg-slate-900 rounded-full h-1.5 mt-0.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[90%]" /></div>
              </div>
              <div>
                <span className="text-slate-400">Bases de Datos & Automatización:</span> PostgreSQL • Supabase • n8n • Python
                <div className="w-full bg-slate-900 rounded-full h-1.5 mt-0.5"><div className="bg-cyan-500 h-1.5 rounded-full w-[88%]" /></div>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-rose-400 font-bold">🚀 PROYECTOS INSIGNIA EN PRODUCCIÓN:</div>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-rose-950/40 border border-rose-900/40">
                <div className="text-slate-100 font-bold flex items-center justify-between">
                  <span>1. Ópticas Visual Store® (SaaS)</span>
                  <a href="https://optica.izerick.dev" target="_blank" rel="noreferrer" className="text-rose-300 underline">optica.izerick.dev ↗</a>
                </div>
                <div className="text-slate-400 text-[10px]">Gestión clínica refractiva, stock y facturación multi-sucursal.</div>
              </div>
              <div className="p-2 rounded bg-rose-950/40 border border-rose-900/40">
                <div className="text-slate-100 font-bold flex items-center justify-between">
                  <span>2. Ecosistema Izerick Cloud Network</span>
                  <a href="https://izerick.dev" target="_blank" rel="noreferrer" className="text-rose-300 underline">izerick.dev ↗</a>
                </div>
                <div className="text-slate-400 text-[10px]">Portafolio oficial, Umami Analytics, n8n y pipeline en tiempo real.</div>
              </div>
            </div>
          </div>
        );
        break;

      case 'vps':
      case 'status':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-[11px]">
            <div className="text-emerald-400 font-bold">🛰️ TELEMETRÍA EN VIVO DE VPS:</div>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div>📍 Ubicación: <span className="text-white">Montreal, CA</span></div>
              <div>⚡ Latencia media: <span className="text-emerald-400">~38 ms</span></div>
              <div>🛡️ Blindaje SSL: <span className="text-emerald-400">Activo (A+)</span></div>
              <div>📊 Uptime 2026: <span className="text-emerald-400">99.98%</span></div>
              <div>⚙️ Orquestador: <span className="text-rose-300">Coolify + Docker</span></div>
              <div>👥 Leads Daemon: <span className="text-emerald-400">Activo (Systemd)</span></div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-[11px] text-slate-300">
            <div className="text-rose-400 font-bold">👤 PERFIL PROFESIONAL:</div>
            <p>Erick Bermello (<span className="text-rose-300">@izerick</span>) — Quevedo, Los Ríos, Ecuador.</p>
            <p>🎓 <strong>Ingeniero en Seguridad Industrial</strong> graduado en la Universidad Técnica Estatal de Quevedo (UTEQ).</p>
            <p>💻 Desarrollador de Software autónomo enfocado en plataformas web confiables, seguras y de alta disponibilidad.</p>
          </div>
        );
        break;

      case 'matrix':
        setIsMatrixMode((prev) => !prev);
        outputNode = (
          <div className="text-xs font-mono text-emerald-400">
            {isMatrixMode ? '🔴 Modo Matrix desactivado.' : '🟢 Modo Matrix activado con éxito.'}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-[11px]">
            <div className="text-rose-400 font-bold">📫 CANALES DIRECTOS:</div>
            <div>✉️ Correo: <a href="mailto:eric123joel@gmail.com" className="text-slate-100 underline">eric123joel@gmail.com</a></div>
            <div>🐙 GitHub: <a href="https://github.com/izerick" target="_blank" rel="noreferrer" className="text-slate-100 underline">github.com/izerick</a></div>
            <div>💬 WhatsApp: <span className="text-slate-100">+593 99 502 6297</span></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        setIsOpen(false);
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            Comando no reconocido: '{rawCmd}'. Escribe <span className="text-white underline font-bold">help</span> para ver la lista de comandos.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        command: rawCmd,
        output: outputNode,
        time: new Date().toLocaleTimeString()
      }
    ]);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <>
      {/* Matrix Rain Canvas Overlay if enabled */}
      {isMatrixMode && <MatrixBackground onMatrixClose={() => setIsMatrixMode(false)} />}

      {/* Floating Minimal CLI Trigger Pill */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-xl bg-[#140b0f]/95 hover:bg-[#1f1017] border border-rose-500/40 text-rose-300 hover:text-white shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-mono transition-all group"
        title="Abrir Terminal Interactiva (Ctrl + K)"
      >
        <Terminal className="w-4 h-4 text-rose-400 group-hover:rotate-12 transition-transform" />
        <span className="font-bold">Terminal HUD</span>
        <span className="hidden sm:inline-block px-1.5 py-0.5 bg-rose-500/20 text-[10px] rounded border border-rose-500/30 text-rose-300">
          Ctrl + K
        </span>
      </motion.button>

      {/* Terminal Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${isMaximized ? 'max-w-5xl h-[85vh]' : 'max-w-2xl h-[480px]'} flex flex-col rounded-2xl bg-[#090507]/95 border border-rose-500/30 shadow-[0_0_60px_rgba(244,63,94,0.25)] overflow-hidden transition-all duration-300`}
            >
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#140b0f] border-b border-rose-950/80 select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 cursor-pointer transition-colors" />
                    <span onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 cursor-pointer transition-colors" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-default" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-rose-400" />
                    <span>erick@izerick-dev:~</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="p-1 rounded hover:bg-rose-950/50 hover:text-white transition-colors"
                  >
                    {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded hover:bg-rose-950/50 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Logs View */}
              <div
                className="flex-1 p-4 sm:p-5 overflow-y-auto font-mono text-xs space-y-3 select-text scrollbar-thin scrollbar-thumb-rose-900/40"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                      <span className="text-rose-400 font-bold">➜</span>
                      <span className="text-cyan-400">~</span>
                      <span className="text-slate-100 font-semibold">{item.command}</span>
                      <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
                    </div>
                    <div className="pl-4 text-slate-200">{item.output}</div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Input Prompt */}
              <div className="p-3 bg-[#0d070a] border-t border-rose-950/80 flex items-center gap-2">
                <span className="text-rose-400 font-bold font-mono text-sm pl-2">➜</span>
                <span className="text-cyan-400 font-mono text-xs">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Escribe 'help', 'skills', 'projects', 'vps'..."
                  className="flex-1 bg-transparent text-slate-100 font-mono text-xs outline-none border-none placeholder:text-slate-600"
                  autoFocus
                />
                <button
                  onClick={() => {
                    executeCommand(inputVal);
                    setInputVal('');
                  }}
                  className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-800/40 text-rose-300 transition-colors"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Matrix Rain Effect Component
const MatrixBackground: React.FC<{ onMatrixClose: () => void }> = ({ onMatrixClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEF!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-40" />
      <button
        onClick={onMatrixClose}
        className="pointer-events-auto fixed top-6 right-6 z-40 px-3 py-1.5 rounded-lg bg-black/80 border border-emerald-500/50 text-emerald-400 text-xs font-mono hover:bg-emerald-950 transition-colors"
      >
        ✕ Desactivar Matrix
      </button>
    </div>
  );
};
