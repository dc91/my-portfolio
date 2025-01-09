import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [transitionState, setTransitionState] = useState('idle');

 

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleSectionChange = (newSection) => {
    if (newSection !== activeSection) {
      setTransitionState('fade-out');
      setTimeout(() => {
        setActiveSection(newSection);
        setTransitionState('fade-in');
      }, 1000); // Match this to the fade-out animation duration
    }
  };

  useEffect(() => {
    if (transitionState === 'fade-in') {
      const timeout = setTimeout(() => setTransitionState('idle'), 1000);
      return () => clearTimeout(timeout);
    }
  }, [transitionState]);

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} handleSectionChange={handleSectionChange} />
      <div className={`page-content ${transitionState}`}>
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
