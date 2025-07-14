import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import styles from './GuestsSection.module.css';

const GuestsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.guests} data-testid="guests">
      <h2 className={styles.heading}>{t.guests.heading}</h2>
      <div className={styles.grid}>
        {t.guests.speakers.map((g) => (
          <div key={g.name} className={styles.card} data-testid="guest-card">
            <img src={`/${g.name.toLowerCase().replace(/\s+/g, '').replace(/ł/g, 'l').replace(/ą/g, 'a')}.${g.name === 'Marcin Markiewicz' ? 'png' : g.name === 'Andrzej Dragan' || g.name === 'Wojciech Zaremba' ? 'jpeg' : 'webp'}`} alt={g.name} className={styles.photo} />
            <div className={styles.meta}>
              <h3 className={styles.name}>{g.name}</h3>
              <p className={styles.title}>{g.title}</p>
              <p className={styles.bio}>
                {g.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <a 
          href="https://forms.gle/gZ3beXLiNQtVsnEB8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          {t.guests.button}
        </a>
      </div>
    </section>
  );
};

export default GuestsSection; 