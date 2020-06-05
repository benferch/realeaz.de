import React from "react";
import "./About.sass";

function About() {
  function calcAge(dob) {
    const birthday = new Date(dob);
    return ~~((Date.now() - birthday) / 31557600000);
  }

  const age = calcAge("08/10/2002");

  return (
    <div id="about">
      <h1 className="heading">Hey.</h1>
      <p>
        My name is Ben, I am currently <span id="age">{age}</span> years old
        live on the island of Rügen in Germany. I am interested in
        webtechnologies since I was 13 years old.
        <br />
        Since August 2018 I have been working in a company where I mainly work
        with Drupal. I also enjoy working with Node.js and React.
      </p>
    </div>
  );
}

export default About;
