import React from 'react';
import './Footer.sass';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div id="footer">
            <span className="left">2017 - <span id="currentYear">{ currentYear }</span></span>
            <div className="right legal">
                <a href="imprint" title="This page is in German">Imprint</a>
                <a href="privacy" title="This page is in German">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Footer;