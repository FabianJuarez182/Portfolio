import React from "react";
import styles from "./Information.module.css";
import MailIcon from "/mail.png";
import GithubIcon from "/github.png";

const Information = () => {
  const contacts = [
    {
      text: "Chat with me",
      value: "jua21440@uvg.edu.gt",
      icon: MailIcon,
      link: "mailto:per21385@uvg.edu.gt",
    },
    {
      text: "Visit my workspace",
      value: "FabianJuarez182",
      icon: GithubIcon,
      link: "https://github.com/FabianJuarez182",
    },
  ];

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
                        <span>{list.value}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Information;