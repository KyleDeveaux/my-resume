import React, { useState, useEffect } from "react";
import { FaGithub, FaPython, FaAws } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiXcode, SiTypescript } from "react-icons/si";
import { BsGit, BsCommand } from "react-icons/bs";
import Modal from "../components/Modal";
import "../styling/About.css";
import me from "../images/me1.png";

function About() {
  const [showModal, setShowModal] = useState(false);
  // will open modal once called
  const openModal = () => {
    setShowModal(true);
  };
  // will close modal
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="about-container" id="About">
        <img className="kyle" src={me} />
        <div className="about-body">
          <h1 className="head-line" >
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
              <BiLogoNodejs /> Node.js
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
              <SiXcode /> Xcode
            </li>
            <li>
              <BiLogoDocker /> Docker
            </li>
            <li>
              <BiLogoRedux /> Redux
            </li>
            <li>
              <SiTypescript /> Typescript
            </li>
            <li>
              <BiLogoMongodb /> Mongodb
            </li>
            <li>
              <BsGit /> Git
            </li>
            <li>
              <FaGithub /> Github
            </li>

            <li>
              <button className="skill-btn" onClick={() => openModal()}>
                See more
              </button>
              {showModal && <Modal closeModal={closeModal} />}
            </li>
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
