import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#personal-projects">Projects</a></li>
        <li><a href="#work-experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;