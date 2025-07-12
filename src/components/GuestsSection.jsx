import React from 'react';
import styles from './GuestsSection.module.css';

const guests = [
  {
    name: 'Wojciech Zaremba',
    title: 'OpenAI',
    img: '/wojciechzaremba.jpeg',
    bio: 'Współzałożyciel OpenAI, twórca ChatGPT.'
  },
  {
    name: 'Rafał Modrzewski',
    title: 'ICEYE',
    img: '/rafalmodrzewski.webp',
    bio: 'Współzałożyciel ICEYE, firmy budującej największą na świecie komercyjną konstelację mikrosatelit.'
  },
  {
    name: 'Piotr Dąbkowski',
    title: 'ElevenLabs',
    img: '/piotrdabkowski.webp',
    bio: 'CTO ElevenLabs, twórca najlepszego modelu głosowego na świecie.'
  },
  {
    name: 'Andrzej Dragan',
    title: 'Uniwersytet Warszawski',
    img: '/andrzejdragan.jpeg',
    bio: 'Profesor fizyki teoretycznej, artysta i popularyzator nauki, wykładowca na Wydziale Fizyki UW.'
  },
  {
    name: 'Marcin Markiewicz',
    title: 'Silent Eight',
    img: '/marcinmarkiewicz.png',
    bio: 'Twórca firmy Silent Eight, specjalizującej się w technologiach AI do walki z przestępstwami finansowymi, z wyceną przekraczającą miliard złotych.'
  },
];

const GuestsSection = () => {
  return (
    <section className={styles.guests} data-testid="guests">
      <h2 className={styles.heading}>Keynote Speakers</h2>
      <div className={styles.grid}>
        {guests.map((g) => (
          <div key={g.name} className={styles.card} data-testid="guest-card">
            <img src={g.img} alt={g.name} className={styles.photo} />
            <div className={styles.meta}>
              <h3 className={styles.name}>{g.name}</h3>
              <p className={styles.title}>{g.title}</p>
              <p className={styles.bio}>
                {g.bio || 'Bio description'}
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
          Formularz zgłoszeniowy
        </a>
      </div>
    </section>
  );
};

export default GuestsSection; 