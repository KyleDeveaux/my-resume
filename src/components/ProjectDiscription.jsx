import React, { useState } from "react";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineDownSquare } from "react-icons/ai"
import "../styling/ProjectDiscription.css";

function ProjectDiscription({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>{project?.title}</h1>
        </div>
        <div className="project-body">
          <div className="thumbs">
            <button className="thumbs-up">
              <BiLike />
            </button>
            <button className="thumbs-down">
              <BiDislike />
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
          <ul>
            <p className="comments"></p>
            <p className="comments"></p>
            <p className="comments"></p>
            <p className="comments"></p>
            <p className="comments"></p>
          </ul>
        </div>
        <div className="recommendation">
          <ul>
            <iframe
              src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG"
              frameborder="0"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG"
              frameborder="0"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG"
              frameborder="0"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG"
              frameborder="0"
            ></iframe>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectDiscription;
