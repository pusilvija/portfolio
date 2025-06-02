import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/portfolio">Home</Link></li>
        <li><Link to="/experience">Experience</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;