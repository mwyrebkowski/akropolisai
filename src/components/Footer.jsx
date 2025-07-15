import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copy}>
      © This is IT sp. z o.o.
    </div>
    <div className={styles.rightSection}>
      <div className={styles.socialSection}>
        <span className={styles.sectionTitle}>This is IT:</span>
        <div className={styles.sectionLinks}>
          <a href="https://www.facebook.com/kawecki.maciej" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/maciejkawecki/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@MK_ThisIsIT" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className={styles.socialSection}>
        <span className={styles.sectionTitle}>Uniwersytet Jagielloński:</span>
        <div className={styles.sectionLinks}>
          <a href="https://www.facebook.com/jagiellonian.university" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/jagiellonian_university/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/user/unijagiellonski" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 