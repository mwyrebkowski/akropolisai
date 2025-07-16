import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.about} data-testid="about">
      {/* Textual content */}
      <div className={styles.left}>
        <h2 className={styles.title}>{t.about.title}</h2>
        <p className={styles.description}>
          {t.about.description1}
        </p>

        <p className={styles.description}>
          {t.about.description2}
        </p>

        <p className={styles.invitation}>
          {t.about.invitation1}
        </p>
        
        <p className={styles.invitation}>
          {t.about.invitation2}
        </p>
        
        <p className={styles.eventDetails}>
          {t.about.eventDetails}
        </p>
        
        <a 
          href="https://forms.gle/gZ3beXLiNQtVsnEB8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.button}
        >
          {t.about.button}
        </a>
      </div>

      {/* Interview photo */}
      <div className={styles.right}>
        <a
          href="https://youtu.be/6QhGUQ5iTdk?si=tANg0e94SodMej4x"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.photoLink}
        >
          <img
            src="/wywiad.png"
            alt="Wywiad Macieja Kaweckiego z Wojciechem Zarembą"
            className={styles.photo}
          />
        </a>
        <p className={styles.caption}>
          {t.about.caption}
        </p>

        {/* Partner logos */}
        <div className={styles.partnerLogos}>
          <img src="/ujlogofinal.png" alt="UJ Logo" className={styles.partnerLogo} />
          <img src="/thisisitlogofinal.png" alt="This is IT Logo" className={styles.partnerLogo} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
