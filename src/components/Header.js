import React from 'react';
import Contact from './Contact';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-info">
        <h1>Silvija Pupsaite</h1>
        <p>Full Stack Developer</p>
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/profile.png`}
        alt="Silvija Pupsaite" 
        className="header-image" 
      />
      <div className="offer-section">
        <div className="services-list">
          🐍 Python & Data Automation <br />
          ⚙️ ETL / Data Pipeline Development <br />
          🌐 Web development <br />
          📉 Data Analytics & Visualization <br />
          ☁️ Cloud Deployment <br />
          🔧 DevOps for Data <br />
          🧠 Technical Consulting & Training <br />
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