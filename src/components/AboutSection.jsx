import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.about} data-testid="about">
      {/* Textual content */}
      <div className={styles.left}>
        <h2 className={styles.title}>Being Human in the Age of AI</h2>
        <p className={styles.description}>
          Kanał <strong>This is IT</strong> wraz z <strong>Uniwersytetem Jagiellońskim</strong> zapraszają na pierwsze w historii takie
          wydarzenie technologiczne w gmachu najstarszej uczelni w Polsce. <strong>Dedykujemy je laureatom i finalistom olimpiad
          przedmiotowych zainteresowanych sztuczną inteligencją.</strong>
        </p>

        <p className={styles.description}>
          To dla nich 31 lipca zgromadzą się tam największe umysły sztucznej inteligencji w Polsce. Zaszczyci nas swoją obecnością
          <strong> Wojciech Zaremba</strong>, twórca ChatuGPT i współzałożyciel <strong>OpenAI</strong>. Na scenie będą również twórcy największych polskich
          jednorożców technologicznych – <strong>Eleven Labs</strong> oraz <strong>IceEYE</strong> oraz najlepsi w kraju eksperci od sztucznej inteligencji.
        </p>

        <p className={styles.invitation}>
          Wspólnie spróbujemy zrozumieć co to znaczy być człowiekiem w erze sztucznej inteligencji. Jak odnaleźć się w erze wykładniczego
          postępu, co to znaczy dla nauki i dla Polski. Jak młode talenty mogą wykorzystać tę szansę.
        </p>
        <button className={styles.button}>Formularz zgłoszeniowy</button>
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
          Wywiad Macieja Kaweckiego z Wojciechem Zarembą
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
