import React from "react";
import ImageSlider from "./ImageSlider";
import image1 from "../images/heroCar/IMG1.jpg";
import image2 from "../images/heroCar/IMG3.JPG";
import image3 from "../images/heroCar/IMG4.JPG";
import '../styling/HeroCarousel.css'

function HeroCarousel() {
  const slides = [   
    { url: image1},
    { url: image2 },
    { url: image3 },
    {
      url: "https://www.floridacareercenters.org/wp-content/uploads/2017/11/Florida-Atlantic-University-FAU.jpg",
    },
  ];
  return (
    <div className="slidesBox">
      <ImageSlider slides={slides} />
    </div>
  );
}

export default HeroCarousel;
