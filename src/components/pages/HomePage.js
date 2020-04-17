import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
// import Skills from '../Skills/Skills';
import Links from '../Links/Links';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <>
        <Helmet>
            <title>Ben Ferch</title>
        </Helmet>
        <div id="content">
            <About />
            <Projects />
            {/* <Skills /> */}
            <Links />
            <Contact />
            <Footer />
        </div>
        </>
    );
}

export default HomePage;