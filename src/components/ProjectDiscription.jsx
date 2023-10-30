import React, { useState } from "react";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import "../styling/ProjectDiscription.css";
import ResumeCarousel from "./ResumeCarousel";

function ProjectDiscription({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [numOfLikes, setNumOfLikes] = useState(121);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };  
  // state of the like button
    const [isLiked, setIsLiked] = useState(false);
    
    // When like button is pressed˜
    const thumbsUp = () => {
        setIsLiked(true);
        setNumOfLikes(prevLikes => prevLikes + 1);
        console.log('count of likes',numOfLikes);
    }
  
    // When dislike button is pressed
    const thumbsDown = () => {
        setIsLiked(false);
        setNumOfLikes(prevLikes => prevLikes - 1);
        console.log('count of likes',numOfLikes);
    }

  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>{project?.title}</h1>
        </div>
        <div className="project-body">
          <div className="thumbs">
            <button onClick={ ()=> { thumbsUp() }
        } className="thumbs-up">
                {isLiked ? <BiSolidLike/> : <BiLike/>}
              {numOfLikes}
            </button>
            <button onClick={ ()=> { thumbsDown() }} className="thumbs-down">

              {!isLiked ? <BiSolidDislike/> : <BiDislike/>}
            </button>
            <Link className="HOME" to={"/"}>
            <ImHome />
          </Link>
          </div>
          <div className="description-box">
            <p
              className={`project-discription ${isExpanded ? "expanded" : ""}`}
            >
              {project?.objective}
            </p>
            <button className="toggle-button" onClick={toggleDescription}>
              {isExpanded ? "Show less" : "More..."}
            </button>
          </div>
        </div>
        <div className="recommendation">
            <h2>Recommendations</h2>
          <ResumeCarousel/>
        </div>
      </div>
    </>
  );
}

export default ProjectDiscription;
