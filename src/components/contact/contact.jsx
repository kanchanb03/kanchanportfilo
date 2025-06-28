import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./contact.module.css"

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>
                    Feel free to reach out!
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img className={styles.icon}
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email icon" />
                    <a href="mailto:kanchanbandesha@gmail.com">
                    kanchanbandesha@gmail.com
                    </a>
                </li>

                <li className={styles.link}>
                    <img className={styles.icon}
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon" />
                    <a href="http://www.linkedin.com/in/kanchan-bandesha">
                    Linkedin.com/kanchan-bandesha
                    </a>
                </li>

                <li className={styles.link}>
                    <img className={styles.icon}
                        src={getImageUrl("contact/githubIcon.png")}
                        alt="GitHub icon" />
                    <a href="https://github.com/kanchanb03">
                    github.com/kanchanb03
                    </a>
                </li>
                </ul>

        </footer>
    );
}