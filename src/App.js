import "./App.css";
import Header from "./components/Header";
import Promo from "./components/Promo";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const handleAboutClick = () => {
    about.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleExperienceClick = () => {
    experience.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleProjectsClick = () => {
    projects.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactClick = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="App">
      <ScrollToTop />
      <Header onAboutClick={handleAboutClick} onExperienceClick={handleExperienceClick} onProjectsClick={handleProjectsClick} onContactClick={handleContactClick}/>
      <Promo />
      <div ref={about}>
      <About />
      </div>
      <div ref={experience}>
      <Experience />
      </div>
      <div ref={projects}>
      <Projects />
      </div>
      <div ref={contact}>
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
