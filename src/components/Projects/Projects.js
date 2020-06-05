import React from "react";
import "./Projects.sass";

function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project-showcase">
          <h4>MetaPeta</h4>
          <p id="metapetaDescription" className="description">
            MetaPeta was created at{" "}
            <a
              href="https://jugendhackt.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Jugendhackt
            </a>{" "}
            2018 in Schwerin.
            <br />
            MetaPeta is a tool to remove meta data from images.
          </p>
          <a
            href="https://github.com/Jugendhackt/MetaPeta"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Code
          </a>
          <a
            href="https://jugendhackt.github.io/MetaPeta/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Demo
          </a>
        </div>
        <div className="project-showcase">
          <h4>PacTrac</h4>
          <p id="pactracDescription" className="description">
            PacTrac was created at{" "}
            <a
              href="https://jugendhackt.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Jugendhackt
            </a>{" "}
            2019 in Rostock.
            <br />
            PacTrac is a tool to track parcels from different delivery services.
          </p>
          <a
            href="https://github.com/Jugendhackt/PacTrac"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Code
          </a>
          <a
            href="https://jugendhackt.github.io/PacTrac/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
