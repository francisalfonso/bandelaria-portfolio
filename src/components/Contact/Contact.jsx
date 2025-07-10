import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.content}>
            <div className={styles.text}>
            <h2>Connect with me!</h2>
            <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:bandelariafrancis10@gmail.com">bandelariafrancis10@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked In icon"/>
                <a href="https://www.linkedin.com/in/francisbandelaria">linkedin.com/francisbandelaria</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/phone.png")} alt="Phone icon" className={styles.linkImg}/>
                <a>0919 355 1006</a>
            </li>
            </ul>
        </div>
        <div className={styles.rights}>
            <p>© 2023 FAB. All Rights Reserved.</p>
        </div>
    </footer>
  )
};