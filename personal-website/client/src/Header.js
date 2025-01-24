import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-title-container">
        <Link to='/'><h1 className="header-title">Adarsh Arun Hoskere</h1></Link>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><h3><Link to="/certifications">Certifications</Link></h3></li>
          <li><h3><Link to="/blogposts">BlogPosts</Link></h3></li>
          <li><h3><Link to="/profile">Profile</Link></h3></li>
          <li><h3><Link to="/projects">Projects</Link></h3></li>
          <li><h3><Link to="/resume">Resume</Link></h3></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span role="img" aria-label="menu">🍔</span>
      </div>
    </header>
  );
};

export default Header;
