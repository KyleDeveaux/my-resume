import React from "react";
import ResumeCarousel from "./ResumeCarousel";
import "../styling/Project.css";

function Project() {
  return (
    <div className="projects">
      <div className="headerProjects">
        <h2>Projects</h2>
        <p>Snap shot of all the projects I </p>
      </div>
      <ResumeCarousel />
    </div>
  );
}

export default Project;
