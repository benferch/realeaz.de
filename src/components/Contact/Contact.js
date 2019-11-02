import React from 'react';
import './Contact.sass';

function Contact() {
    return (
        <div id="content">
            <div id="contact">
                <h2>
                    Contact
                </h2>
                <p>If you want to contact me, feel free to send me an <a
                        href="mailto:ben@benferch.de?subject=Hey">e-mail</a>.</p>
            </div>
        </div>
    );
}

export default Contact;