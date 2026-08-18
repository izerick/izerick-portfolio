import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundScrollCanvas } from './components/BackgroundScrollCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PromoToast } from './components/PromoToast';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { LandingPageOffer } from './pages/LandingPageOffer';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060907] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
        
        {/* Full-Screen Scroll-Driven Canvas Background */}
        <BackgroundScrollCanvas frameCount={240} />

        {/* Top Fixed Navbar with Highlighted Cotizar Ahora */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="relative z-10">
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
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* Global Floating Promo Toast (Highest Stacking Layer z-[9999]) */}
        <PromoToast />

      </div>
    </Router>
  );
}

export default App;
