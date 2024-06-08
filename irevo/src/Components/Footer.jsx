import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#faq">FAQ</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <p>© 2024 SkillBoost. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
