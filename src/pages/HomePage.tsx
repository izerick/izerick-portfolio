import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';
import { TechStackSection } from '../components/TechStackSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
};
