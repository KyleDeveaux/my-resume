import React from "react";
import ProjectVideo from "../components/ProjectVideo";
import ProjectDiscription from "../components/ProjectDiscription";

function ProjectPage() {
  return (
    <>
      <div className="project-video">
        <ProjectVideo />
      </div>
      <div>
          <ProjectDiscription/>
      </div>
    </>
  );
}

export default ProjectPage;
