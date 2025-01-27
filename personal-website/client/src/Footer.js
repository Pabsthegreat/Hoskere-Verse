import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="https://github.com/Pabsthegreat" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Profile</a>
          <a href="https://www.linkedin.com/in/adarsh-hoskere-56b92a279/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn Profile</a>
          <a href="https://leetcode.com/u/kingdash/" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode Profile</a>
        </nav>
        <p>© 2025 Adarsh Arun Hoskere. All rights reserved.</p>
        <nav className="footer-links" aria-label="Legal Links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
