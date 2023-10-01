import React, { useState, useEffect } from "react";
import AOS from "aos";
import HeroCarousel from "../components/HeroCarousel.jsx";
import "aos/dist/aos.css";
import "../styling/Navbar.css";
import video from "../images/video-1.mp4";

function Navbar() {
  const qoutes = [
    "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    "Some people want it to happen, some wish it would happen, others make it happen.” ― Michael Jordan",
    "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
    "Hard work beats talent when talent doesn’t work hard.” ― Tim Notke",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. — Socrates",
    "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles. ― Wayne Dyer",
  ];
  const [randomQoute, setRandomQoute] = useState("");
  //Fade in text for qoutes ~~(broken)~~
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // To generate random qoutes
  useEffect(() => {
    const updateQoute = () => {
      const randomNum = Math.floor(Math.random() * qoutes.length);
      setRandomQoute(qoutes[randomNum]);
    };

    updateQoute();
    const intervalId = setInterval(updateQoute, 5000);
    return () => clearInterval(intervalId);
  }, [qoutes]);

  return (
    <>
      <div className="nav-background">
        <video className="nav-background" src={video} autoPlay loop muted />

        <div className="header">
          <a
            href="https://www.linkedin.com/in/kyle-deveaux-74ba57170/"
            className="Link"
          >
            LinkedIn
          </a>
          {/* Will bring you down to the journey section of the page */}
          <a href="" className="Link">
            Journey
          </a>
          {/* Will bring you down to the resume section of the page */}
          <a href="" className="Link">
            Resume
          </a>
        </div>
        {/* <div className="personal">
          <div className="headerQoute">
            <h2 className="header_name">Kyle Deveaux</h2>
            <p className="qoute" data-aos="fade-up">
              {randomQoute}
            </p>
          </div>
          {/* Caresel */}
         {/* <div className="carr">
            <HeroCarousel />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
