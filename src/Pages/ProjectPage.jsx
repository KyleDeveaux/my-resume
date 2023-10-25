import React, { useState, useEffect } from "react";
import ProjectVideo from "../components/ProjectVideo";
import ProjectDiscription from "../components/ProjectDiscription";
import { useParams } from "react-router-dom";
import data from "../data";

function ProjectPage() {
  // state of the like button
  const [isLiked, setIsLiked] = useState(false);
  let numOfLikes = 0;

  // When like button is pressed
  const thumbsUp = () => {
      setIsLiked(true);
      numOfLikes = numOfLikes + 1;
  }

  // When dislike button is pressed
  const thumbsDown = () => {
      setIsLiked(false);
      numOfLikes = numOfLikes - 1;
  }

  //count of like
  let count = 0
  const params = useParams();
  const projectId = parseInt(params.id, 10);
  const project = data.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);
  
  
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
