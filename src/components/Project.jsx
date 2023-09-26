import React from "react";
import ResumeCarousel from "./ResumeCarousel";
import Skill from "./Skill";
import "../styling/Project.css";

function Project() {
  return (
    <>
    <div className="projects">
      <div className="headerProjects">
        <h2>Projects</h2>
      </div>
      <div>
        <ResumeCarousel />
      </div>
    </div>
      <div>
        <Skill/>
      </div>
    </>
  );
}

export default Project;
