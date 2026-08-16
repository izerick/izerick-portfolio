import React from 'react';
import { Github, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-rose-950/40 bg-[#070406]/95 backdrop-blur-md font-mono text-xs text-slate-500 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-rose-400 font-bold">izerick.dev</span>
          <span>•</span>
          <span>Erick Bermello • Quevedo, Ecuador</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
            className="hover:text-rose-400 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{PORTFOLIO_DATA.personalInfo.email}</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
