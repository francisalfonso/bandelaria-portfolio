import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div>
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Sitting with a laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="cursor icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>
                                I'm a frontend developer that have experience
                                in responsive website.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="server icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>
                                I have experience in building backend codes
                                and queries and using REST API.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="se icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Software Engineer
                            </h3>
                            <p>
                                I have experience in developing, testing,
                                and maintaining software/websites.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.buttomBlur} />
        </section>
    </div>
  );
};
