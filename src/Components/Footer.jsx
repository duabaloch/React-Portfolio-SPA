import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section">
          <h2 className="footer-logo">MyPortfolio</h2>
          <p>
            Building modern, responsive and high-performance web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <a href="#service">Web Development</a>
          <a href="#service">UI/UX Design</a>
          <a href="#service">Frontend Development</a>
          <a href="#service">Backend Development</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: dua@email.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Karachi</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;