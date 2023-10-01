import React from "react";
import ResumeCarousel from "./ResumeCarousel";
import "../styling/Project.css";

function Project() {
  return (
    <>
      <div className="projects">
        <div className="headerProjects">
          <h1>Journey</h1>
          <p>
            From frontend, backend, mobile applications, all the way to embedded
            system. I am proud that these project have helped me create a
            greater understanding what it means to be an engineer.
          </p>
        </div>
        <div className="carousel">
          <ResumeCarousel />
        </div>
      </div>
    </>
  );
}

export default Project;
