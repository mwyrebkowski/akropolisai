import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GuestsSection from './components/GuestsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <GuestsSection />
      <Footer />
    </div>
  );
}

export default App; 