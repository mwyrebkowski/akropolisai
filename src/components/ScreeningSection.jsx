import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import styles from './ScreeningSection.module.css';
import speakerStyles from './GuestsSection.module.css';

const speakers = [
  {
    name: 'Maciej Kawecki',
    role: 'Popularyzator nauki, prezes Instytutu Lema, naukowiec oraz dyrektor Centrum Innowacji Uniwersytetu WSB Merito. Twórca kanałów popularnonaukowych This is IT oraz This is World.',
    photo: '/maciejkawecki.jpeg'
  },
  {
    name: 'Aureliusz Górski',
    role: 'Seryjny przedsiębiorca z prawie dwudziestoletnim doświadczeniem w venture buildingu. Twórca CampusAI, pierwszej na świecie wirtualnej szkoły AI-native.',
    photo: '/aureliuszgorski.jpg'
  }
];

const ScreeningSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.screening} data-testid="screening">
      <h2 className={styles.heading}>{t.screening.heading}</h2>
      <div className={styles.grid}>
        {speakers.map((sp) => (
          <div key={sp.name} className={speakerStyles.card}>
            <img src={sp.photo} alt={sp.name} className={speakerStyles.photo} />
            <div className={speakerStyles.meta}>
              <h3 className={speakerStyles.name}>{sp.name}</h3>
              <p className={speakerStyles.bio}>{sp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreeningSection; 