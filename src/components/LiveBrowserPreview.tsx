import React from 'react';
import { ExternalLink, Lock, Sparkles } from 'lucide-react';

interface LiveBrowserPreviewProps {
  url: string;
  imageSrc?: string;
  title: string;
  badgeText?: string;
  heightClass?: string;
}

export const LiveBrowserPreview: React.FC<LiveBrowserPreviewProps> = ({
  url,
  imageSrc,
  title,
  badgeText = 'En Vivo • Cloud Edge',
  heightClass = 'h-[210px] sm:h-[230px]',
}) => {
  const cleanDisplayUrl = url.replace(/^https?:\/\//, '');

  return (
    <div className="rounded-2xl bg-[#090407] border border-rose-500/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,94,0.15)] group transition-all relative">
      {/* Browser Window Titlebar */}
      <div className="bg-[#14070f] px-3.5 py-2 border-b border-rose-950/80 flex items-center justify-between gap-3 text-xs font-mono">
        {/* macOS Window Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-xs mx-auto bg-[#0a0308] border border-rose-950/70 rounded-lg px-2.5 py-0.5 flex items-center justify-between gap-2 text-[10px] text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate text-slate-300 font-mono">{cleanDisplayUrl}</span>
          </div>
        </div>

        {/* Status & Open Action */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 hidden sm:inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badgeText}
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded bg-rose-950/60 hover:bg-rose-600 text-rose-300 hover:text-white transition-colors"
            title="Abrir aplicación en nueva pestaña"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* High-Resolution Static Browser Viewport */}
      <div className={`relative w-full ${heightClass} bg-[#070306] overflow-hidden`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0d050a] text-slate-400 text-xs font-mono">
            <span>{title}</span>
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-gradient-to-t from-[#070306]/90 via-[#070306]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4"
        >
          <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_25px_rgba(244,63,94,0.7)] ring-1 ring-rose-300/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Ver Web en Producción</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
};
