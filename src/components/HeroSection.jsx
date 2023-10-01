import React, { useEffect, useState } from "react";
import video from "../images/video-1.mp4";
import AOS from "aos";
import "../styling/HeroSection.css";
import me from "../images/me1.png";

function HeroSection() {
  const qoutes = [
    "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    "Some people want it to happen, some wish it would happen, others make it happen.” ― Michael Jordan",
    "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
    "Hard work beats talent when talent doesn’t work hard.” ― Tim Notke",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. — Socrates",
    "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles. ― Wayne Dyer",
  ];

  const [randomQoute, setRandomQoute] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 3000,
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

  <div className="hero-container">
    <video src={video} autoPlay loop muted  />
    <img className="profile-pic" src={me} />
    <h1 data-aos="fade-up">Kyle Deveaux</h1>
    <p className="qoute" data-aos="fade-up">
      {randomQoute}
    </p>
  </div>
  <div className="button"></div>
</>
  );
}

export default HeroSection;
