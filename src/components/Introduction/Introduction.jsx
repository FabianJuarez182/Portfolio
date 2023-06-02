import React, { useState, useEffect } from "react";
import styles from "./Introduction.module.css";

function Intro() {
  const [waveActive, setWaveActive] = useState(false);

  useEffect(() => {
    let timer;
    if (waveActive) {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter, index) => {
        timer = setTimeout(() => {
          letter.classList.add(styles.animate);
        }, index * 100);
      });
    } else {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter) => {
        letter.classList.remove(styles.animate);
      });
    }
    return () => clearTimeout(timer);
  }, [waveActive]);

  const handleHover = () => {
    setWaveActive(true);
  };

  const handleLeave = () => {
    setWaveActive(false);
  };

  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <img className={styles.atom} alt="atom" src="./intro.png" />
        <div className={styles.title}>
          {["<","m", "y", ".", "p", "o", "r", "t", "f", "o", "l", "i", "o", " ", "/",">"].map(
            (letter, index) => (
              <div
                key={index}
                className={styles.letter}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {letter}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;


