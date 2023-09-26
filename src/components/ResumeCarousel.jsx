import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styling/Carousel.css";
import data from "../data";

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
  // Use mapping to cycle through each of our data in our data file
  const projectData = data.map(item => {
    return (
      // structure our data
<div className="App">
          <div className="card">
            <img className="product--image" src={item.image} alt="projects" />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <p>
              <button>View Details</button>
            </p>
          </div>
      </div>
    )
  })
  
  
  
  return (
    <div>
      <Carousel responsive={responsive}>
        {projectData}
      </Carousel>
    </div>
  );
}

export default ResumeCarousel;

