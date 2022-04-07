import React from "react";
import "./Portfolio.css";
import cipher from "../assets/images/projects/caesarCipher.png";
import cross from "../assets/images/projects/CrossFt.png";
import dashboard from "../assets/images/projects/DataDashboard.png";
import memory from "../assets/images/projects/MemoryGame.png";
import mexflix from "../assets/images/projects/Mexflix.png";
import notes from "../assets/images/projects/NotesApp.png";
import piano from "../assets/images/projects/Piano.png";
import socialnet from "../assets/images/projects/SocialNetwork.png";
import trivia from "../assets/images/projects/Trivia.png";
import visitor from "../assets/images/projects/VisitorReception.png";

const Portfolio = () => {
  return (
    <>
      <section class="projects-section" id="projects">
        <h2 class="project-section-header">Some of my open projects to see:</h2>
        <div class="grid-container">
          <a //-----------------------------------------------------cross
            href="https://albertoouu.github.io/crossfit_ajusco/"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={cross} alt="" />
            <p class="proyect-title">CrossFt (On development)</p>
          </a>
          <a //-----------------------------------------------------notes
            href="https://albertoouu.github.io/technicalChallenge_2ndBlock/src/index.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={notes} alt="" />
            <p class="proyect-title">Notes app</p>
          </a>
          <a //-----------------------------------------------------socialnet
            href="https://albertoouu.github.io/11_socialnetwork/"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={socialnet} alt="" />
            <p class="proyect-title">Social Network for dogs</p>
          </a>
          <a //-----------------------------------------------------mexflix
            href="https://albertoouu.github.io/04-Mexflix/src/index.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={mexflix} alt="" />
            <p class="proyect-title">Catalog of movies</p>
          </a>
          <a //-----------------------------------------------------visitor
            href="https://elibabah.github.io/07_Visitors_Reception/src/index.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={visitor} alt="" />
            <p class="proyect-title">Flow control in a coworking building</p>
          </a>
          <a //-----------------------------------------------------memory
            href="https://albertoouu.github.io/05memoryGame/src/index.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={memory} alt="" />
            <p class="proyect-title">Memory game (English idioms)</p>
          </a>
          <a //-----------------------------------------------------dashboard
            href="https://jaz0king.github.io/06_Students_data-analitics/src/login.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={dashboard} alt="" />
            <p class="proyect-title">Data Dashboard (usr:directora, psw:123)</p>
          </a>
          <a //-----------------------------------------------------trivia
            href="https://albertoouu.github.io/Trivia_project/"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={trivia} alt="" />
            <p class="proyect-title">Pokémon questions and answers</p>
          </a>
          <a //-----------------------------------------------------cipher
            href="https://albertoouu.github.io/03_SecurityCypher-/src/index.html"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={cipher} alt="" />
            <p class="proyect-title">Caesar cipher (usr:usuario , psw:123)</p>
          </a>
          <a //-----------------------------------------------------piano
            href="https://albertoouu.github.io/01_MusicalKeyBoard_project/"
            target="_blank"
            class="tiles"
            rel="noreferrer"
          >
            <img class="project-tile" src={piano} alt="" />
            <p class="proyect-title">Musical Keyboard</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
