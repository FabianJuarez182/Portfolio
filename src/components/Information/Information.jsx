/* eslint-disable react/no-array-index-key */
import React from 'react'
import styles from './Information.module.css'
import MailIcon from '../../assets/mail.png'
import GithubIcon from '../../assets/github.png'
import InstagramIcon from '../../assets/instagram.png'
import LinkedInIcon from '../../assets/linkedin.png'

function Information() {
  const contacts = [
    {
      text: 'Chat with me',
      value: 'jua21440@uvg.edu.gt',
      icon: MailIcon,
      link: 'mailto:per21385@uvg.edu.gt',
    },
    {
      text: 'Visit\u00a0my\u00a0workspace',
      value: 'FabianJuarez182',
      icon: GithubIcon,
      link: 'https://github.com/FabianJuarez182',
    },
    {
      text: 'Know\u00a0more\u00a0about\u00a0me',
      value: 'https.fabes_182',
      icon: InstagramIcon,
      link: 'https://instagram.com/https.fabes_182',
    },
    {
      text: 'Want to hire me',
      value: 'Fabián\u00a0Estuardo\u00a0Juárez',
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/fabi%C3%A1n-estuardo-ju%C3%A1rez-tello-051060274',
    },
  ]

  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <span className={styles.Mega}>Talk or meet with me</span>
      </div>
      <div className={styles.container}>
        {contacts.map((list, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.ContIcon}>
              <a href={list.link}>
                <img src={list.icon} className={styles.icon} alt="Icon" />
              </a>
            </div>
            <div>
              <div className={styles.title}>
                <span>{list.text}</span>
              </div>
              <div className={styles.value}>
                <div>{list.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
