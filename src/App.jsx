import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Profile />
    <About />
    <Experience />
    <Project />
    <Contact />
  </div>;
}

export default App
