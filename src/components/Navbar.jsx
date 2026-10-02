import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
          <span>Dana Paskin / </span>
          <span className="brand-serif">Design Portfolio</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
