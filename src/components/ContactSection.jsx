import React from "react";
import { MdEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import "../styling/ContactSection.css";

function ContactSection() {
  return (
    <div className="contact-container">
        <div className="box1">
        <h2>Contact Me</h2>
      <div className="content">
        <div className="contact-form-container">
          <div className="contact-form">
            <div className="input-group">
              <FiUser className="icon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <MdEmail className="icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="textarea-group input-group">
              <textarea placeholder="Your message"></textarea>
            </div>
            <button>
              <AiOutlineSend className="send-icon" />
              Send Message
            </button>
          </div>
        </div>
        <div className="video-resume-container">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XZZJnXHtNDI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <a href="link-to-your-resume" target="_blank" rel="noopener noreferrer" className="resume-button">
            View My Resume
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactSection;

