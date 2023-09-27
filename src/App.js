import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Modal from "./components/Modal";


function App() {
  return (
  <div> 
    <Navbar/>

    <Project/>
    <div>
        <Skill/>

      </div>
    
  </div>
  )
}

export default App;
