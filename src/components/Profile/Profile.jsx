import React from "react";
import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import { getDocument } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.subTitle}>
                Welcome!
            </h3>
            <h1 className={`${styles.title} ${styles.typing}`}>
                Hi, I'm Francis
            </h1>
            <p className={styles.description}>
                I'm a Junior Software Engineer with nearly 2 years of 
                experience in building Website using Vue.js, Laravel 
                Framework, and PosgreSQL
            </p>
            <a
              href="mailto:bandelariafrancis10@gmail.com" 
              className={styles.contactBtn}
            >Contact Me</a>
            <a
              href={getDocument("document/resume.pdf")}
              download="Bandelaria_Resume.pdf"
              className={styles.resumeBtn}
            >My Resume</a>
        </div>
        <img src={getImageUrl("profile/profileIcon.jpg")} alt="Profile image of me" className={styles.profileImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.buttomBlur} />
    </section>
  );
};
