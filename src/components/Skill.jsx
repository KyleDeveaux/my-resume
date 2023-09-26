import React from "react";
import '../styling/Skill.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Skill() {
  return (
    <div className="skill">
        <h2>Skills</h2>
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
  );
}

export default Skill;
