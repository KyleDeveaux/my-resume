import React from "react";
import ResumeCarousel from "../components/ResumeCarousel";
import "../styling/Resume.css";

function resume() {
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

export default resume;
