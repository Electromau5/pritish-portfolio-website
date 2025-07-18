import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DesignJourney from './components/DesignJourney';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Routes, Route, useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
      <img
        src="/pritish-welcome.gif"
        alt="Welcome animation"
        style={{ borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: 600, width: '100%', height: 'auto', background: '#fff' }}
      />
      <div style={{ width: 256, height: 8, background: '#e5e7eb', borderRadius: 9999, overflow: 'hidden', marginTop: 32 }}>
        <div style={{ height: '100%', background: '#2563eb', width: '100%', animation: 'loadingBar 5s linear forwards' }} />
      </div>
      <style>{`
        @keyframes loadingBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

const UXPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex) => {
    // 0: Hero, 1: About, 2: DesignJourney, 3: Contact
    const section = document.getElementById(`section-${sectionIndex}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    scrollToSection(1); // Now scrolls to AboutSection
  };

  const handleScrollDown = () => {
    scrollToSection(1); // Now scrolls to AboutSection
  };

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-light transition-colors duration-200">
            <Navigation onNavigate={scrollToSection} name="Pritish Patel" />
            <HeroSection
              scrollY={scrollY}
              onExploreClick={handleExploreClick}
              onScrollDown={handleScrollDown}
            />
            <AboutSection />
            <DesignJourney scrollY={scrollY} />
            <ContactSection
              email="pritish@example.com"
              linkedinUrl="https://linkedin.com/in/pritishpatel"
            />
          </div>
        } />
      </Routes>
    </ThemeProvider>
  );
};

export default UXPortfolio;