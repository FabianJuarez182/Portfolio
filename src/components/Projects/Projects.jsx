/* eslint-disable import/no-unresolved */
/* eslint-enable import/no-absolute-path */
import React from 'react'
import styles from './Projects.module.css'
import ViteIcon from '../../assets/vitest-seeklogo.com.svg'

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.subtitle}>
            <a
              className={styles.title}
              href="https://jdgomez2002.github.io/Proj2_DBI/"
            >
              <h2 className={styles.project}>Hospital with Data Base</h2>
            </a>
          </div>
          <p className={styles.description}>Database project for a hospital.</p>
          <p className={styles.description}>
            Use username: Hector1 password:123 to view all the stuff.
            <a
              className={styles.link}
              href="https://jdgomez2002.github.io/Proj2_DBI/"
            >
              go to
            </a>
          </p>
          <p className={styles.used}>Technologies I used:</p>
          <div className={styles.imageContainer}>
            <img
              className={styles.technologies}
              alt="react icon"
              src="/react.png"
            />
            <img
              className={styles.technologies}
              alt="eslint icon"
              src="/eslint.png"
            />
            <img
              className={styles.technologies}
              alt="vite icon"
              src="/Vite.png"
            />
            <img
              className={styles.technologies}
              alt="materialui icon"
              src="/materialui.png"
            />
            <img
              className={styles.technologies}
              alt="supabase icon"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/shcbxwzc3rgg8del8jbp"
            />
          </div>
        </div>
        <img
          className={styles.pic}
          alt="dataBase illustration"
          src="/dataBase.png"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.subtitle}>
            <a
              className={styles.title}
              href="https://jua21440calculator.netlify.app/"
            >
              <h2 className={styles.project}>Calculator</h2>
            </a>
          </div>
          <p className={styles.description}>
            Calculator on which many operations can be performed.
            <a
              className={styles.link}
              href="https://jua21440calculator.netlify.app/"
            >
              go to
            </a>
          </p>
          <p className={styles.used}>Technologies I used:</p>
          <div className={styles.imageContainer}>
            <img
              className={styles.technologies}
              alt="react icon"
              src="/react.png"
            />
            <img
              className={styles.technologies}
              alt="eslint icon"
              src="/eslint.png"
            />
            <img
              className={styles.technologies}
              alt="vite icon"
              src="/Vite.png"
            />
            <img
              className={styles.technologies}
              alt="vitest icon"
              src={ViteIcon}
            />
          </div>
        </div>
        <img
          className={styles.pic}
          alt="calculator illustration"
          src="/webCalculator.png"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.subtitle}>
            <a
              className={styles.title}
              href="https://uvgenios.online/21440/Proyecto1/"
            >
              <h2 className={styles.project}>Identical copy of the website</h2>
            </a>
          </div>
          <p className={styles.description}>
            Identical copy of the website thebeastisback
            <a
              className={styles.link}
              href="https://uvgenios.online/21440/Proyecto1/"
            >
              go to
            </a>
          </p>
          <p className={styles.used}>Technologies I used:</p>
          <div className={styles.imageContainer}>
            <img
              className={styles.technologies}
              alt="react icon"
              src="/react.png"
            />
            <img
              className={styles.technologies}
              alt="eslint icon"
              src="/eslint.png"
            />
            <img
              className={styles.technologies}
              alt="vite icon"
              src="/Vite.png"
            />
            <img
              className={styles.technologies}
              alt="vitest icon"
              src={ViteIcon}
            />
            <img
              className={styles.technologies}
              alt="postcss icon"
              src="/postcss.png"
            />
          </div>
        </div>
        <img
          className={styles.pic}
          alt="web page illustration"
          src="/webPage.png"
        />
      </div>
    </div>
  )
}
export default Projects
