import React from "react";
import "../styling/Modal.css";
import data from "../data";
function Modal({ title, closeModal, objective, lesson }) {
  console.log(title);
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

export default Modal;
