import React from 'react';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <main className="content">
        <section className="demo-content">
          <h2>AkropolisAI Hero Section Demo</h2>
          <p>
            This is a demonstration of the hero section design featuring:
          </p>
          <ul>
            <li>Historic courtyard background with AI robots</li>
            <li>University of Kraków crest (top-left)</li>
            <li>"This is IT" speech bubble (top-right)</li>
            <li>Conference details in bottom bar</li>
            <li>Fully responsive design</li>
          </ul>
          <p>
            The hero section is built with React and CSS modules, featuring 
            smooth hover effects and mobile-first responsive design.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App; 