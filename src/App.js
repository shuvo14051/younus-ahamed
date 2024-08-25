import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
