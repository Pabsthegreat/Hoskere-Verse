import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://github.com/Pabsthegreat" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/adarshhoskere" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://leetcode.com/u/kingdash/" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
        </div>
        <p>© 2025 Adarsh Arun Hoskere. All rights reserved.</p>
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/terms-of-service" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
