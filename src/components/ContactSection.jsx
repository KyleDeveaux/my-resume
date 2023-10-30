import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import "../styling/ContactSection.css";
import resume from '../images/Kyle_Resume_2023 copy.pdf';

function ContactSection() {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000); // Notification disappears after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8t5bg5",
        "template_5zozmul",
        form.current,
        "xzbyYrr9DEubp_Ze7"
      )
      .then(
        (result) => {
          setNotification('Email sent successfully!');
          form.current.reset();  // Clear the form fields
          console.log(result.text);
        },
        (error) => {
          setNotification('Error sending email.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="box1">
        <h2>Contact Me</h2>
        {notification && <div className="notification show">{notification}</div>}
        <div className="content">
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail} >
              <div className="contact-form">
                <div className="input-group">
                  <FiUser className="icon" />
                  <input type="text" placeholder="Name" name="user_name" />
                </div>
                <div className="input-group">
                  <MdEmail className="icon" />
                  <input type="email" placeholder="Email" name="user_email" />
                </div>
                <div className="textarea-group input-group">
                  <textarea
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <button onClick={sendEmail} >
                  <AiOutlineSend className="send-icon" />
                  Send Message
                </button>
              </div>
            </form>
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
            <a
              href={resume} download="Kyle_Deveaux_Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
