import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero} data-testid="hero">
      <img 
        className={styles.bg} 
        src="/final_hero_being.png" 
        alt="Courtyard with robots" 
      />
      <img 
        className={styles.crest} 
        src="/logo_uj.png" 
        alt="UJ University crest" 
      />
      <img 
        className={styles.speech} 
        src="/logo_thisisit.png" 
        alt="This is IT speech bubble" 
      />
      <div className={styles.bottomBar} data-testid="bottom-bar">
        <span className={styles.left}>Being human in the age of AI</span>
        <span className={styles.right}>Kraków 31.07.2025</span>
      </div>
    </section>
  );
};

export default HeroSection; 