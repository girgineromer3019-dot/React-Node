import React from "react";
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2 className="Title">Contact</h2>
      <div className="button-container">
        <button id="mailButton"><i className="fa-regular fa-envelope"></i> E-mail</button>
        <button id="GitHubButton"><i className="fa-brands fa-github"></i> GitHub</button>
        <button id="whatsappButton"><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
        <button id="LinkedButton"><i className="fa-brands fa-linkedin"></i> Linked</button>
      </div>
    </section>
  );
}

export default Contact;
