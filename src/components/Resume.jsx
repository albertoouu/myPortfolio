import React from "react";
import "./resume.css";
import CV from "../assets/CV.pdf";
import Presume from "../assets/Resume.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Download my Resume</h1>
      <div className="language-op">
        <div className="cv btn-container">
          <p>Español</p>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download="albertoGutierrezCastroCV.pdf"
            className="botones es-btn"
          >
            CV
          </a>
        </div>
        <div className="resume btn-container">
          <p>English</p>
          <a
            href={Presume}
            target="_blank"
            rel="noopener noreferrer"
            className="botones"
            download={"albertoGutierrezCastroResume.pdf"}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
