import React from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectsSlider } from "./ProjectsSlider";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      {/* Slider if >3, static grid otherwise */}
      <ProjectsSlider
        projects={projects}
        gridClass={styles.projects}   /* reuse your existing grid class */
      />
    </section>
  );
};
