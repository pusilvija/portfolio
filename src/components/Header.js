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
      <div className="header-contact">
        Contact me:
        <Contact />
      </div>
    </header>
  );
}

export default Header;