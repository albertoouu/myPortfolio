import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section class="projects-section" id="projects">
        <h2 class="project-section-header">Algunos de mis proyectos</h2>
        <div class="grid-container">
          <a
            href="https://codepen.io/albertoouu/pen/NWjZBzw"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img
              class="project-tile"
              src="https://i.ibb.co/sj2zJbs/Tribute-page.png"
              alt=""
            />
            <p class="proyect-title">Tribute Form</p>
          </a>
          <a
            href="https://codepen.io/albertoouu/pen/WNOejmb"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img
              class="project-tile"
              src="https://i.ibb.co/6sWvNKC/survey-form.png"
              alt=""
            />
            <p class="proyect-title">Survey Form</p>
          </a>
          <a
            href="https://codepen.io/albertoouu/pen/NWgKJwN"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img
              class="project-tile"
              src="https://i.ibb.co/kgDVm0N/product-landing-page.png"
              alt=""
            />
            <p class="proyect-title">Product Landing Page</p>
          </a>
          <a
            href="https://codepen.io/albertoouu/pen/mdwyJjX"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img
              class="project-tile"
              src="https://i.ibb.co/jy3vdvL/technical-documentation.png"
              alt=""
            />
            <p class="proyect-title">Technical Documental Page</p>
          </a>
          <a
            href="https://codepen.io/albertoouu/pen/abwzrqO"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img
              class="project-tile"
              src="https://i.ibb.co/Gv24Wt6/personal-portfolio.png"
              alt=""
            />
            <p class="proyect-title">Personal Portafolio Webpage</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
