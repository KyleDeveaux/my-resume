import React from "react";
import "../styling/Modal.css";
import data from "../data";
function Modal({ title, closeModal, objective, lesson }) {
  if (title == undefined) {
    return (
      <div className="modal-background">
        <div className="modalContainer">
          <div className="skill">
            <h1>Skills</h1>
            <div class="row">
              <div class="col col-md-4">
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div class="col col-md-4">
                <ul>
                  <li>API Development</li>
                  <li>Data Analytics</li>
                  <li>Data Structures</li>
                  <li>Test Engineering</li>
                  <li>Debugging</li>
                </ul>
              </div>
              <div class="col col-md-4">
                <ul>
                  <li>Python</li>
                  <li>C++</li>
                  <li>Node</li>
                  <li>Documentation</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer">
            <button onClick={closeModal}> Close </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-background">
        <div className="modalContainer">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="body">
            <h2 className="dataSections">Objective:</h2>
            <p>{objective}</p>
            <h2 className="dataSections"> Lesson Learned:</h2>
            <p>{lesson}</p>
          </div>
          <div className="footer">
            <button onClick={closeModal}> Close </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
