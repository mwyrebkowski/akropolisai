import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GuestsSection from './components/GuestsSection';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

const MainContent = () => (
  <>
    <LanguageToggle />
    <HeroSection />
    <AboutSection />
    <GuestsSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/en" element={<MainContent />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App; 