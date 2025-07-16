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
      <div className={styles.bottomBar} data-testid="bottom-bar">
        <span className={styles.left}>{t.hero.title}</span>
        <span className={styles.right}>{t.hero.location}</span>
      </div>
    </section>
  );
};

export default HeroSection; 