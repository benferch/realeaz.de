import React from 'react';
import './Footer.sass';

function Footer() {
    return (
        <div id="footer">
            <span class="left">2017 - <span id="currentYear"></span></span>
            <div class="legal">
                <a href="imprint" title="This page is in German">Imprint</a>
                <a href="privacy" title="This page is in German">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Footer;