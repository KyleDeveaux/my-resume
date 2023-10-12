import React from "react";
import ProjectVideo from "../components/ProjectVideo";
import ProjectDiscription from "../components/ProjectDiscription";
import { useParams } from "react-router-dom";
import data from "../data";

function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id, 10);
  const project = data.find((p) => p.id === projectId);

  return (
    <>
      <div className="project-video">
        <ProjectVideo project={project} />
      </div>
      <div>
        <ProjectDiscription project={project} />
      </div>
    </>
  );
}
export default ProjectPage;
