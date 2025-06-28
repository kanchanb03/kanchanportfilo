import React from "react";
import styles from "./Hero.module.css";

export const Hero = () =>{
    return ( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, Im Kanchan
            </h1>
            <p className={styles.description}>
                A Software Engineer 
                    
            </p>
            <a href="mailto:kanchanbandesha@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/hero9.png" alt="Hero image " className={styles.heroImgs} />
        <div className={styles.topBlur}/>    
        <div className={styles.bottomBlur}/>


    </section>
    )
}