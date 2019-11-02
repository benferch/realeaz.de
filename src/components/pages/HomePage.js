import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

function HomePage() {
    return (
        <div id="content">
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default HomePage;