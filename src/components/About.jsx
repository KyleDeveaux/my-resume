import React, { useState, useEffect } from "react";
import { FaGithub, FaPython, FaAws } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoDocker, BiLogoRedux, BiLogoNodejs, BiLogoMongodb } from "react-icons/bi";
import { SiXcode, SiTypescript } from 'react-icons/si'
import { BsGit, BsCommand } from "react-icons/bs";
import "../styling/About.css";
import me from "../images/me1.png";

function About() {
    
  return (
    <>
      <div className="about-container">
        <img className="kyle" src={me} />
        <div className="body">
          <h1 className="head-line" id="About">
            My Skills 🤌
          </h1>
          <ul className="skill-img">
            <li>
              <BiLogoHtml5 /> HTML
            </li>
            <li>
              <BiLogoCss3 /> CSS
            </li>
            <li>
              <SiJavascript /> JavaScript
            </li>
            <li>
              <BiLogoReact /> React
            </li>
            <li>
            <BiLogoNodejs/> Node.js
            </li>
            <li>
              <FaPython />
              Python
            </li>
            <li>
              <FaAws />
              AWS
            </li>
            <li>
            <SiXcode/> Xcode
            </li>       
            <li>
            <BiLogoDocker/> Docker
            </li>
            <li>
            <BiLogoRedux/> Redux
            </li>
            <li>
            <SiTypescript/> Typescript
            </li>
            <li>
            <BiLogoMongodb/> Mongodb
            </li>
            <li>
            <BsCommand/> Command Line
            </li>
            <li>
              <BsGit /> Git
            </li>
            <li>
            <FaGithub/> Github
            </li>
            <button onClick={console.log("Hello world")}> See more</button>
          </ul>
          <h3 className="intro">I'm a nerd for technology 💻 </h3>
          <p className="bio">
            "My fascination with technology was ignited the moment my mother
            handed me an original Gameboy, accompanied by Pokémon Yellow.
            Growing up in an era before smartphones and when connecting to AOL
            was a test of patience, I've witnessed the remarkable pace of
            technological evolution. It's this firsthand experience that fuels
            my passion to contribute and be part of technology's ever-evolving
            journey."
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
