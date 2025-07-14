import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <span className={language === 'pl' ? styles.active : styles.inactive}>PL</span>
      <span className={styles.separator}>|</span>
      <span className={language === 'en' ? styles.active : styles.inactive}>EN</span>
    </button>
  );
};

export default LanguageToggle; 