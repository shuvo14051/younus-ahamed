import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="home-section">
        <Home />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="projects" className="projects-section">
        <Projects />
      </section>
      <section id="publications" className="publications-section">
        <Publications />
      </section>
      <section id="skills" className="skills-section">
        <Skills />
      </section>
      <section id="contact" className="contact-section">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
