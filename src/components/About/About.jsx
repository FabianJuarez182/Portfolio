import React from "react"
import styles from "./About.module.css"

function About(){

    return(
        <div className={styles.about}>
            <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <img className={styles.ball} alt="ball icon" src="/soccer.png"/>
                    <h2 className={styles.aboutme}>About me</h2>
                </div>

                <p className={styles.description}>
                Hello everybody. I'm Fabian Juarez, a third year computer science student.
                </p>
                <p className={styles.description}>
                    I'm mainly interested in backend development and cybersecurity.
                </p>
                <p className={styles.description}>
                    My biggest hobbies are soccer and ping pong.
                </p>
            </div>
            <img className={styles.pic} alt="myself illustration" src="/picme.png"/>
        </div>
    )

}

export default About