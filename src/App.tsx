import { BackgroundScrollCanvas } from './components/BackgroundScrollCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminalHUD } from './components/InteractiveTerminalHUD';

export function App() {
  return (
    <div className="min-h-screen bg-[#060907] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      
      {/* Full-Screen Scroll-Driven Canvas Background */}
      <BackgroundScrollCanvas frameCount={240} />

      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Foreground Content with Glassmorphic Layering */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Developer Terminal HUD */}
      <InteractiveTerminalHUD />

    </div>
  );
}

export default App;
