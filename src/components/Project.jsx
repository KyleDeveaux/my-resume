import React from "react";
import ResumeCarousel from "./ResumeCarousel";
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
    </>
  );
}

export default Project;
