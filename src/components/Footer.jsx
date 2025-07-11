import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copy}>
      © This is IT sp. z o.o.
    </div>
    <div className={styles.links}>
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
  </footer>
);

export default Footer; 