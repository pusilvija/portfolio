import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-buttons">
        {/* Gmail Button */}
        <a
          href="mailto:silvijapupsaite@gmail.com"
          className="contact-button email-button"
          aria-label="Email"
        >
          <FaEnvelope className="icon" />
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/silvija-pup%C5%A1ait%C4%97-b76742168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="contact-button linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/pusilvija"
          className="contact-button github-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;