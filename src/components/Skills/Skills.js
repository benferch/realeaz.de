import React from "react";
import "./Skills.sass";

function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="skills">
        <div id="html">
          <div className="showcase">
            <h3>HTML</h3>
            <div className="skill-showcase">
              <h4>HTML</h4>
            </div>
          </div>
        </div>
        <div id="css">
          <div className="showcase">
            <h3>CSS</h3>
            <div className="skill-showcase">
              <h4>CSS</h4>
            </div>
            <div className="skill-showcase">
              <h4>SASS</h4>
            </div>
            <div className="skill-showcase">
              <h4>Scss</h4>
            </div>
            <div className="skill-showcase">
              <h4>Bootstrap</h4>
            </div>
          </div>
        </div>
        <div id="js">
          <div className="showcase">
            <h3>JavaScript</h3>
            <div className="skill-showcase">
              <h4>JavaScript</h4>
            </div>
            <div className="skill-showcase">
              <h4>React</h4>
            </div>
            <div className="skill-showcase">
              <h4>Node</h4>
            </div>
            <div className="skill-showcase">
              <h4>jQuery</h4>
            </div>
          </div>
        </div>
        <div id="cms">
          <div className="showcase">
            <h3>CMS</h3>
            <div className="skill-showcase">
              <h4>Drupal</h4>
            </div>
            <div className="skill-showcase">
              <h4>Wordpress</h4>
            </div>
          </div>
        </div>
        <div id="tools">
          <div className="showcase">
            <h3>Tools</h3>
            <div className="skill-showcase">
              <h4>Git</h4>
              <h5>Gitlab | Github | Bitbucket</h5>
            </div>
            <div className="skill-showcase">
              <h4>PhpStorm | Visual Studio Code</h4>
            </div>
            <div className="skill-showcase">
              <h4>Command Line</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
