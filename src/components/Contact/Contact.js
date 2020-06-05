import React from "react";
import "./Contact.sass";

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>
        If you would like to contact me, you can send me an{" "}
        <a href="mailto:ben@benferch.de?subject=Hey">e-mail</a>.
      </p>
    </div>
  );
}

export default Contact;
