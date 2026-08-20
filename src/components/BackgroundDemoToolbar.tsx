import React, { useState } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { BackgroundVariant } from './InteractiveCyberBackground';

interface BackgroundDemoToolbarProps {
  currentVariant: BackgroundVariant;
  onVariantChange: (variant: BackgroundVariant) => void;
}

export const BackgroundDemoToolbar: React.FC<BackgroundDemoToolbarProps> = ({
  currentVariant,
  onVariantChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants: { key: BackgroundVariant; label: string; icon: string; desc: string }[] = [
    { key: 'neural', label: 'Red Neuronal', icon: '🌌', desc: 'Nodos de servidores interconectados' },
    { key: 'grid3d', label: 'Malla 3D', icon: '📐', desc: 'Perspectiva isométrica infinita' },
    { key: 'circuits', label: 'Circuitos Láser', icon: '⚡', desc: 'Pistas de silicio con pulsos de energía' },
    { key: 'particles', label: 'Polvo Cuántico', icon: '✨', desc: 'Partículas cósmicas multidimensionales' }
  ];

  return (
    <aside aria-label="Selector de atmósfera visual" className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="p-3 rounded-2xl bg-[#0f070e]/95 border border-rose-500/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(244,63,94,0.3)] space-y-2 text-left animate-fadeIn w-64">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
            <span className="font-bold text-rose-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Fondo Interactivo</span>
            </span>
            <span className="text-[9px] text-slate-400">Demo en Vivo</span>
          </div>

          <div className="space-y-1">
            {variants.map((v) => {
              const isSelected = currentVariant === v.key;
              return (
                <button
                  key={v.key}
                  onClick={() => onVariantChange(v.key)}
                  className={`w-full p-2 rounded-xl text-left text-xs font-mono transition-all flex items-center gap-2.5 cursor-pointer ${
                    isSelected
                      ? 'bg-rose-600 text-white shadow-md font-bold ring-1 ring-rose-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-sm">{v.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold truncate">{v.label}</div>
                    <div className={`text-[9px] truncate ${isSelected ? 'text-rose-100' : 'text-slate-500'}`}>
                      {v.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-[8px] font-mono text-slate-400 pt-1 text-center border-t border-white/5">
            Mueve el mouse o haz scroll para ver las físicas 🚀
          </p>
        </div>
      )}

      {/* Trigger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-xl bg-[#120710]/90 hover:bg-rose-950/90 text-rose-300 border border-rose-500/30 hover:border-rose-400 text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.25)] transition-all cursor-pointer backdrop-blur-md"
        title="Probar atmósfera visual"
      >
        <Layers className="w-3.5 h-3.5 text-rose-400" />
        <span>{isOpen ? 'Ocultar Fondos' : '🎨 Probar Fondos'}</span>
      </button>
    </aside>
  );
};
