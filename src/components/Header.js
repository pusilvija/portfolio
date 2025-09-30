import React from 'react';
import Contact from './Contact';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-info">
        <h1>Silvija Pupsaite</h1>
        <p>Software Engineer</p>
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/profile.png`}
        alt="Silvija Pupsaite" 
        className="header-image" 
      />
      <div className="offer-section">
        <div className="services-list">
          💻 Software Development <br />
          🌐 Web Applications <br />
          ⚙️ Data Engineering <br />
          ☁️ Cloud Deployment <br />
          🔧 DevOps <br />
          📊 Data Analytics & Visualization <br />
          🧠 Consulting & Mentorship <br />
        </div>
      </div>
      <div className="header-contact">
        Find me on:
        <Contact />
      </div>
    </header>
  );
}

export default Header;