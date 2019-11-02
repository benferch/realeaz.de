import React from 'react';
import './Skills.sass';

function Skills() {
    return (
        <div id="skills">
            <h2>
                Skills
            </h2>
            <div className="skills">
                <div id="frontend">
                    <div className="showcase">
                        <h3>
                            Front-End
                        </h3>
                        <div className="skill-showcase">
                            <h4>
                                HTML
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                CSS
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                JS
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                    SASS / SCSS
                            </h4>
                        </div>
                    </div>
                </div>
                <div id="cms">
                    <div className="showcase">
                        <h3>
                            CMS
                        </h3>
                        <div className="skill-showcase">
                            <h4>
                                Drupal
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                Wordpress
                            </h4>
                        </div>
                    </div>
                </div>
                <div id="tools">
                    <div className="showcase">
                        <h3>
                            Tools
                        </h3>
                        <div className="skill-showcase">
                            <h4>
                                Git
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                Gitlab / Github / Bitbucket
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                PhpStorm / Visual Studio
                            </h4>
                        </div>
                        <div className="skill-showcase">
                            <h4>
                                Terminal
                            </h4>
                            </div>
                        </div>
                    </div>
                    <div id="frameworks-libraries">
                        <div className="showcase">
                            <h3>
                                Frameworks and Libraries
                            </h3>
                            <div className="skill-showcase">
                                <h4>
                                    Bootstrap
                                </h4>
                            </div>
                            <div className="skill-showcase">
                                <h4>
                                    jQuery
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Skills;