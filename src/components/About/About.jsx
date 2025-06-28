import React from "react";
import styles from "./About.module.css"

export const About = ()=> {
    return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className= {styles.content}>
        </div>
        <ul className={styles.aboutItems}>
            {/* Full-stack */}
            <li className={styles.aboutItem}>
            <img src="/assets/about/laptopIcon_dark.png" alt="laptop icon" />
            <div className={styles.aboutItemText}>
                <h3>Full-Stack Engineer</h3>
                <p>
                I build end-to-end apps with Django / FastAPI back-ends and React or
                Tailwind front-ends, all containerized with Docker for friction-free CI/CD.
                </p>
            </div>
            </li>

            {/* DevOps / Cloud */}
            <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon_dark.png" alt="server icon" />
            <div className={styles.aboutItemText}>
                <h3>Cloud & DevOps</h3>
                <p>
                Comfortable provisioning on AWS & GCP, wiring GitHub Actions pipelines,
                and monitoring production containers—so features ship fast and stay up.
                </p>
            </div>
            </li>

            {/* UI / UX */}
            <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon_dark.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>UI / UX Design</h3>
                <p>
                I craft accessible, responsive interfaces in React, Tailwind, and UIKit,
                blending clean layouts with user-centered micro-interactions.
                </p>
            </div>
            </li>

            <li className={styles.aboutItem}>
                <img src="/assets/about/codeIcon_dark.png" alt="code icon" />
                <div className={styles.aboutItemText}>
                    <h3>Software Engineer</h3>
                    <p>
                    I design scalable back-end services and write clean, test-driven code in
                    Python, Java, and SQL—applying solid algorithms and data-structure
                    principles to keep features fast and reliable.
                    </p>    
                </div>
            </li>

        </ul>
    </section>
    )
}