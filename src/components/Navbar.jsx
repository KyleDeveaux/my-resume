import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import HeroCarousel from "../components/HeroCarousel.jsx";
import "aos/dist/aos.css";
import "../styling/Navbar.css";
import video from "../images/video-1.mp4";

function Navbar() {
  return (
    <>
      <div className="nav-background">
        <video className="nav-background" src={video} autoPlay loop muted />

        <div className="header">
          {/* Will bring you down to the resume section of the page */}
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Link"
          >
            About
          </Link>
          {/* Will bring you down to the journey section of the page */}
          <Link
            to="Journey"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Link"
          >
            Journey
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Link"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
