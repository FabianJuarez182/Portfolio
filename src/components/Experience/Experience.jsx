/* eslint-disable import/no-unresolved */
import React from 'react'
import styles from './Experience.module.css'
import ProgressBar from '../progressbar/progressBar'
import ViteIcon from '../../assets/vitest-seeklogo.com.svg'

function Experience() {
  return (
    <div className={styles.intro}>
        <div className={styles.titleMega}>
        <span className={styles.Mega}>Skills</span>
        </div>
        <div className={`${styles.container}`}>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>React</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={35} />
                </div>
                </div>
                <img className={styles.pic} alt="react icon" src="/react.png" />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>Vitest</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={25} />
                </div>
                </div>
                <img className={styles.pic} alt="vitest icon" src={ViteIcon} />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>CSS</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={40} />
                </div>
                </div>
                <img className={styles.pic} alt="csst icon" src="/css.png" />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>ESLINT</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={40} />
                </div>
                </div>
                <img className={styles.pic} alt="eslint icon" src="/eslint.png" />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>Yarn</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={30} />
                </div>
                </div>
                <img className={styles.pic} alt="vitest icon" src="/yarn.png" style={{ height: '100px', width: '190px' }} />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>Github</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={40} />
                </div>
                </div>
                <img className={styles.pic} alt="github icon" src="/git.png"  />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>PSQL</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={50} />
                </div>
                </div>
                <img className={styles.pic} alt="github icon" src="/postgres.png"  />
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <h2 className={styles.title}>Figma</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar bgcolor="#572364" completed={30} />
                </div>
                </div>
                <img className={styles.pic} alt="github icon" src="/Figma.png"  />
            </div>
        </div>
    </div>
  )
}
export default Experience
