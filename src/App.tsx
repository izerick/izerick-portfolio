import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Loader2 } from 'lucide-react';
import { BackgroundScrollCanvas } from './components/BackgroundScrollCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PromoToast } from './components/PromoToast';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { PrivacyBanner } from './components/PrivacyBanner';

// Route Code Splitting (Lazy Loading) for optimized initial bundle & performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const QuotePage = lazy(() => import('./pages/QuotePage').then(m => ({ default: m.QuotePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LandingPageOffer = lazy(() => import('./pages/LandingPageOffer').then(m => ({ default: m.LandingPageOffer })));

// Sleek minimal fallback loader for route transitions
function RouteLoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-pulse">
        <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
      </div>
      <span className="text-xs font-mono text-emerald-400/70 tracking-wider uppercase">
        Cargando módulo...
      </span>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060907] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
        
        {/* Full-Screen Scroll-Driven Canvas Background */}
        <BackgroundScrollCanvas frameCount={240} />

        {/* Top Fixed Navbar with Highlighted Cotizar Ahora */}
        <Navbar />

        {/* Multi-Page Routes with Lazy Loading Suspense */}
        <main className="relative z-10">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/perfil" element={<AboutPage />} />
              <Route path="/proyectos" element={<ProjectsPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/cotizar" element={<QuotePage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/landing-page" element={<LandingPageOffer />} />
              
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* Global Floating Promo Toast (Bottom Left z-[9999]) */}
        <PromoToast />

        {/* Global Floating WhatsApp Button (Bottom Right z-[9998]) */}
        <FloatingWhatsAppButton />

        {/* Privacy & Cookie Notice Banner */}
        <PrivacyBanner />

        {/* Vercel Real-Time Analytics & Speed Insights Trackers */}
        <Analytics />
        <SpeedInsights />

      </div>
    </Router>
  );
}

export default App;

