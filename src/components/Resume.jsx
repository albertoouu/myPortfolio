import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Download my Resume</h1>
      <div className="language-op">
        <div className="cv btn-container">
          <p>Español</p>
          <button className="botones es-btn">CV</button>
        </div>
        <div className="resume btn-container">
          <p>English</p>
          <button className="botones">Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
