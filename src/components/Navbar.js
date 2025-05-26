import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Experience</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;