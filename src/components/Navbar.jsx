import React from "react";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-background">
        <div className="header">
          <a
            href="https://www.linkedin.com/in/kyle-deveaux-74ba57170/"
            className="links"
          >
            LinkedIn
          </a>
          {/* Will bring you down to the journey section of the page */}
          <a href="" className="Link">
            Journey
          </a>
          {/* Will bring you down to the resume section of the page */}
          <a href="" className="links">
            Resume
          </a>
        </div>
        <div className="personal">
          <div className="headerQoute">
            <h2 className="header_name">Kyle Deveaux</h2>
            <p className="qoute">
              "Your future is created by what you do today, not tomorrow." —
              Robert Kiyosaki
            </p>
          </div>
          {/* Caresel */}
          <div className="carr">
            <img src="" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
