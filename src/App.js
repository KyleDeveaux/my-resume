import React, { useEffect } from "react";
import '../src/styling/App.css'
import AOS from "aos";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Modal from "./components/Modal";

function App() {
  return (
    <div >
      <div className="Header">
        <Navbar />
      </div>
      <div className="hero">
        <HeroSection />
      </div>
      <body className="body">
        <Project />
        <Skill />
      </body>
    </div>
  );
}

export default App;
