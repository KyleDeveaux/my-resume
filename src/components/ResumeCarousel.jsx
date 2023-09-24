import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectImg from "../images/projectImg/projectOne.png";
import "../styling/Carousel.css";
import data from "../data.json";

function ResumeCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="App">
        <Carousel responsive={responsive}>
          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>

          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>

          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>

          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>

          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>

          <div className="card">
            <img className="product--image" src={projectImg} alt="projects" />
            <h2>MOT System</h2>
            <p>Summary of project</p>
            <p>
              <button>View Details</button>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ResumeCarousel;
