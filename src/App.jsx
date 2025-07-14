import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DesignJourney from './components/DesignJourney';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const UXPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex) => {
    const section = document.getElementById(`section-${sectionIndex}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    scrollToSection(1);
  };

  const handleScrollDown = () => {
    scrollToSection(1);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-light transition-colors duration-200">
        <Navigation onNavigate={scrollToSection} name="Pritish Patel" />

        <HeroSection
          scrollY={scrollY}
          onExploreClick={handleExploreClick}
          onScrollDown={handleScrollDown}
        />

        <DesignJourney scrollY={scrollY} />

        <AboutSection />

        <ContactSection
          email="pritish@example.com"
          linkedinUrl="https://linkedin.com/in/pritishpatel"
        />
      </div>
    </ThemeProvider>
  );
};

export default UXPortfolio;