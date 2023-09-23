import React, { useState, useEffect } from 'react';
import '../styling/HeroCarousel.css'


function ImageSlider({slides}) {
  const [currentIndex, setcurrentIndex] = useState(3);

  useEffect(() => {
    const updateSlide = () => {
      const randomNum = Math.floor(Math.random() * slides.length);
      setcurrentIndex(randomNum);
    }

    updateSlide();
    const intervalId = setInterval(updateSlide, 5000);
    return () => clearInterval(intervalId);
  }, [ slides ]);

  return (
   <div className='slides'>
     <img src={slides[currentIndex].url} alt= 'slides'/>
   </div>
  )}

export default ImageSlider;