import React from 'react';
import './About.sass';

function About() {
    return (
        <div id="about">
                <h1 class="heading">Hey.</h1>
                <p>
                    My name is Ben, I am currently <span id="age"></span> years old and I live on Rügen, Germany. I'm
                    interested in webtechnologies since I was 13 years old.<br />
                    Since August 2018 I am working in a smaller company, where I mainly work with Drupal.
                </p>
            </div>
    );
}

export default About;