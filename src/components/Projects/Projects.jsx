import React from "react"
import styles from "./Projects.module.css"

function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.texts}>
                    <div className={styles.subtitle}>
                        <h2 className={styles.aboutme}>Data Base Project with react</h2>
                    </div>

                    <p className={styles.description}>
                    Hello everybody. I&apos;m Fabian Juarez, a third year computer science student.
                    </p>
                    <p className={styles.description}>
                        I&apos;m mainly interested in backend development and cybersecurity.
                    </p>
                    <p className={styles.description}>
                        My biggest hobbies are soccer and ping pong.
                    </p>
                </div>
                <img className={styles.pic} alt="myself illustration" src="/picme.png"/>
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                    <div className={styles.subtitle}>
                        <h2 className={styles.aboutme}>Calculator with React</h2>
                    </div>

                    <p className={styles.description}>
                    Hello everybody. I&apos;m Fabian Juarez, a third year computer science student.
                    </p>
                    <p className={styles.description}>
                        I&apos;m mainly interested in backend development and cybersecurity.
                    </p>
                    <p className={styles.description}>
                        My biggest hobbies are soccer and ping pong.
                    </p>
                </div>
                <img className={styles.pic} alt="myself illustration" src="/picme.png"/>
            </div>
        </div>
    )
}
export default Projects