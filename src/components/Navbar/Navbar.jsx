/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react'
import styles from './Navbar.module.css'
import About from '../About/About'
import Intro from '../Introduction/Introduction'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Information from '../Information/Information'
import logo from './logo.png'

function Navbar() {
  const refAbout = useRef(null)
  const refProjects = useRef(null)
  const refIntro = useRef(null)
  const refEperience = useRef(null)
  const refInformation = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <header className={`${styles.header}`}>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="Logo"
            className={styles.logo}
            onClick={() => scrollToSection(refIntro)}
          />
        </div>
        <div className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
              <li>
                <button
                  className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`}
                  type="button"
                  onClick={() => scrollToSection(refAbout)}
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`}
                  type="button"
                  onClick={() => scrollToSection(refProjects)}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`}
                  type="button"
                  onClick={() => scrollToSection(refEperience)}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  className={`${styles.navbarButton} ${styles.navbarItem} ${styles.navbarLink}`}
                  type="button"
                  onClick={() => scrollToSection(refInformation)}
                >
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
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refProjects}>
        <Projects />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refEperience}>
        <Experience />
      </div>
      <div className={`${styles.nav} ${styles.navMargin}`} ref={refInformation}>
        <Information />
      </div>
    </div>
  )
}

export default Navbar
