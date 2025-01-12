import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title-container">
        <h1 className="header-title">Adarsh Arun Hoskere</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/blogposts">BlogPosts</Link></li>
          <li><Link to="/quicklinks">QuickLinks</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
