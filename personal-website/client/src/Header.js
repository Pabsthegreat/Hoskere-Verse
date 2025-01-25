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
        <Link to='/' title="Home"><h1 className="header-title">Adarsh Arun Hoskere</h1></Link>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><h3><Link to="/certifications" title="Certifications">Certifications</Link></h3></li>
          <li><h3><Link to="/blogposts" title="Blog Posts">Blog Posts</Link></h3></li>
          <li><h3><Link to="/profile" title="Profile">Profile</Link></h3></li>
          <li><h3><Link to="/projects" title="Projects">Projects</Link></h3></li>
          <li><h3><Link to="/resume" title="Resume">Resume</Link></h3></li>
        </ul>
      </nav>
      <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
        <span role="img" aria-label="menu">🍔</span>
      </button>
    </header>
  );
};

export default Header;
