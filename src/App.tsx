import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Cover from './components/Cover';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('cover');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = [
    { id: 'cover', component: Cover },
    { id: 'about', component: About },
    { id: 'education', component: Education },
    { id: 'skills', component: Skills },
    { id: 'projects', component: Projects },
    { id: 'certifications', component: Certifications },
    { id: 'contact', component: Contact }
  ];

  const navigateToSection = (sectionId: string) => {
    if (sectionId === currentSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(sectionId);
      setIsTransitioning(false);
    }, 300);
  };

  const CurrentComponent = sections.find(section => section.id === currentSection)?.component || Cover;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Paper Background Pattern */}
      <div className="fixed inset-0 paper-texture aged-paper opacity-60 pointer-events-none" />
      
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onNavigate={navigateToSection} 
        sections={sections.slice(1)} // Exclude cover from navigation initially
      />
      
      {/* Main Content */}
      <main className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {currentSection === 'cover' ? (
          <Cover onNavigate={navigateToSection} />
        ) : (
          <CurrentComponent />
        )}
      </main>
      
      {/* Decorative Elements */}
      <div className="fixed bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-200 rounded-full opacity-30 pointer-events-none animate-pulse" />
      <div className="fixed top-1/4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-200 rounded-full opacity-20 pointer-events-none" />
    </div>
  );
}

export default App;