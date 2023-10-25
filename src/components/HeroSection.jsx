import React, { useEffect, useState } from "react";
import video from "../images/video-1.mp4";
import AOS from "aos";
import { VscGithub } from 'react-icons/vsc'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'
import "../styling/HeroSection.css";
// import me from "../images/me1.png";

function HeroSection() {
  // const qoutes = [
  //   "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
  //   "Some people want it to happen, some wish it would happen, others make it happen.” ― Michael Jordan",
  //   "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
  //   "Hard work beats talent when talent doesn’t work hard.” ― Tim Notke",
  //   "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. — Socrates",
  //   "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles. ― Wayne Dyer",
  // ];

  // const [randomQoute, setRandomQoute] = useState("");
  
  // useEffect(() => {
  //   AOS.init(
  //     duration: 3000,
  //   });
  // }, []);

  // // To generate random qoutes
  // useEffect(() => {
  //   const updateQoute = () => {
  //     const randomNum = Math.floor(Math.random() * qoutes.length);
  //     setRandomQoute(qoutes[randomNum]);
  //   };

  //   updateQoute();

  //   const intervalId = setInterval(updateQoute, 5000);
  //   return () => clearInterval(intervalId);
  // }, [qoutes]);

  return (
<>
    <video src={video} autoPlay loop muted  />
  <div className="hero-container">
    
    <h1>Hi, I'm Kyle | <span className="highlighted-text">Software</span></h1>
      <h1><span className="highlighted-text">Engineer</span></h1>
    <div className="btn-list">
      <ul>
        <a href="https://www.linkedin.com/in/kyle-deveaux-74ba57170/" ><BsLinkedin className="icon-btn" size='3em'/></a>
        <a href="https://github.com/KyleDeveaux"><VscGithub className="icon-btn" size='3em'/></a>
        <a href='https://www.instagram.com/kdev0/'><BsInstagram className="icon-btn" size='3em'/></a>
        <a  href="mailto:kyledeveaux@gmail.com"><BiMailSend className="icon-btn" size='3em'/></a>
      </ul>
    </div>
      <p className="qoute">“I have a passion for exploration and innovation Every line of code I write is backed by my commitment as a lifelong learner 🎓 always pushing the boundaries of what's possible 🚀”</p>
  </div>
  <div className="button"></div>
</>
  );
}

export default HeroSection;

{/* <img className="profile-pic" src={me} />
<h1 data-aos="fade-up">Kyle Deveaux</h1>
<p className="qoute" data-aos="fade-up">
  {randomQoute}
</p> */}