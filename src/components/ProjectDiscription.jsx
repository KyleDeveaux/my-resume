import React from "react";
import {BiLike, BiDislike, BiSolidLike, BiSolidDislike  } from "react-icons/bi";
import {ImHome} from 'react-icons/im'
import { Link } from "react-router-dom";


function ProjectDiscription({ project }) {
  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>{project?.title}</h1>
          <Link to={"/"}><ImHome/></Link>
        </div>
        <div className="project-body">
          <button className="thumbs-up"><BiLike/></button>
          <button className="thumbs-down"><BiDislike/></button>
          <p className="project-discription">
            {project?.objective}
          </p>
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
            <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG" frameborder="0"></iframe>
            <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG" frameborder="0"></iframe>
            <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG" frameborder="0"></iframe>
            <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZlV1aJzu2G6VZpeG" frameborder="0"></iframe>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectDiscription;
