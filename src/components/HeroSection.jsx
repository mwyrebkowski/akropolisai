import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.hero} data-testid="hero">
      <img 
        className={styles.bg} 
        src="/final_hero_being.png" 
        alt="Courtyard with robots" 
      />
      <div className={styles.logoContainer}>
        <a href="https://www.uj.edu.pl/" target="_blank" rel="noopener noreferrer">
          <img 
            className={styles.crest} 
            src="/logo_uj.png" 
            alt="UJ University crest" 
          />
        </a>
        <a href="https://www.youtube.com/@MK_ThisIsIT" target="_blank" rel="noopener noreferrer">
          <img 
            className={styles.speech} 
            src="/logo_thisisit.png" 
            alt="This is IT speech bubble" 
          />
        </a>
      </div>
      <div className={styles.bottomBar} data-testid="bottom-bar">
        <span className={styles.left}>{t.hero.title}</span>
        <span className={styles.right}>{t.hero.location}</span>
      </div>
    </section>
  );
};

export default HeroSection; 