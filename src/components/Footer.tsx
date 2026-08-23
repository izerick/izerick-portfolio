import React, { useState } from 'react';
import { MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <footer className="py-10 border-t border-rose-950/40 bg-[#070406]/95 backdrop-blur-md font-mono text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-rose-400 font-bold">izerick.dev</span>
            <span>•</span>
            <span>Erick Bermello • Quevedo, Ecuador</span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-emerald-400 text-slate-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacidad & Cookies</span>
            </button>
            <a
              href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 text-slate-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>{PORTFOLIO_DATA.personalInfo.email}</span>
            </a>
          </div>

        </div>
      </footer>

      <PrivacyPolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </>
  );
};

