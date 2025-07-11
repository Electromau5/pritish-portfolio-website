import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DesignJourney from './components/DesignJourney';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HealthcareAICaseStudy from './components/HealthcareAICaseStudy';

const UXPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio' or 'case-study'
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

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

  const handleProjectClick = (projectId) => {
    if (projectId === 1) { // HealthRecord AI Assistant
      setActiveCaseStudy('healthcare');
      setCurrentView('case-study');
      window.scrollTo(0, 0);
    }
    // Add more case studies here as you create them
    // if (projectId === 2) { setActiveCaseStudy('education'); setCurrentView('case-study'); }
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setActiveCaseStudy(null);
  };

  // Render case study if one is active
  if (currentView === 'case-study') {
    switch (activeCaseStudy) {
      case 'healthcare':
        return <HealthcareAICaseStudy onBack={handleBackToPortfolio} />;
      default:
        return <div>Case study not found</div>;
    }
  }

  // Render main portfolio
  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      <Navigation onNavigate={scrollToSection} name="Pritish Patel" />

      <HeroSection
        scrollY={scrollY}
        onExploreClick={handleExploreClick}
        onScrollDown={handleScrollDown}
      />

      <DesignJourney
        scrollY={scrollY}
        onProjectClick={handleProjectClick}
      />

      <AboutSection />

      <ContactSection
        email="pritish@example.com"
        linkedinUrl="https://linkedin.com/in/pritishpatel"
      />
    </div>
  );
};

export default UXPortfolio;