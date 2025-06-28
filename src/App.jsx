import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import {About} from "./components/About/About";
import { Experience } from "./components/experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import {Projects} from  "./components/Projects/Projects";
import { Contact } from "./components/contact/contact";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

    
    </div>
  );
}

export default App;