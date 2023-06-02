import React, { useRef, useState } from 'react';
import styles from "./Navbar.module.css";
import About from '/src/components/About/About.jsx';
import Intro from '/src/components/Introduction/Introduction.jsx'
import logo from './logo.png';

function Navbar() {
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refExperience = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className={`${styles.header}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
              <li>
                <button className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`} onClick={() => scrollToSection(refAbout)}>
                  About me
                </button>
              </li>
              <li>
                <button className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`} onClick={() => scrollToSection(refExperience)}>
                  Experience
                </button>
              </li>
              <li>
                <button className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`} onClick={() => scrollToSection(refProjects)}>
                  Projects
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Intro />
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refAbout}>
        <About />
      </div>
    </div>
  );
}

export default Navbar;



