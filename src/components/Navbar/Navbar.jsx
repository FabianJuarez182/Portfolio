import React, { useRef} from 'react';
import styles from "./Navbar.module.css";
import About from '/src/components/About/About.jsx';
import Intro from '/src/components/Introduction/Introduction.jsx'
import Experience from '/src/components/Experience/Experience.jsx'
import Projects from '/src/components/Projects/Projects.jsx';
import Information from '/src/components/Information/Information.jsx';
import logo from './logo.png';

function Navbar() {
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refExperience = useRef(null);
  const refIntro = useRef(null);
  const refInformation = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className={`${styles.header}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} onClick={() => scrollToSection(refIntro)} />
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
              <li>
                <button className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`} onClick={() => scrollToSection(refInformation)}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refIntro}>
        <Intro />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refAbout}>
        <About />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refExperience}>
        <Experience />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refProjects}>
        <Projects />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refInformation}>
        <Information />
      </div>
    </div>
  );
}

export default Navbar;



