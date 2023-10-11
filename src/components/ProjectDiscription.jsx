import React from "react";
import {BiLike, BiDislike, BiSolidLike, BiSolidDislike  } from "react-icons/bi";
import {ImHome} from 'react-icons/im'
import { Link } from "react-router-dom";


function ProjectDiscription() {
  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>MOT System</h1>
          <Link to={"/"}><ImHome/></Link>
        </div>
        <div className="project-body">
          <button className="thumbs-up"><BiLike/></button>
          <button className="thumbs-down"><BiDislike/></button>
          <p className="project-discription">
            Leading Team 18, I orchestrated the development of a sophisticated
            system for Florida Power & Light to enhance worker safety by
            detecting vehicles entering maintenance zones. My key role involved
            steering both frontend and backend development, ensuring the
            seamless integration of cutting-edge technologies including
            microcontrollers and lidar sensors for real-time vehicle tracking.
            Our coordinated efforts and technical prowess led to the successful
            creation of a robust system, achieving FPL’s objectives and
            demonstrating our commitment to innovation and safety.
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
