import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { InteractiveCyberBackground } from '../components/InteractiveCyberBackground';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#070408] relative overflow-hidden">
      
      {/* Dynamic Interactive Neural Network Background */}
      <InteractiveCyberBackground variant="neural" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-rose-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-rose-400 font-bold">Contacto Directo</span>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
