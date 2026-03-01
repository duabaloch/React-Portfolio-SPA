import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>MyPortfolio</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#service" onClick={closeMenu}>Service</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#blogs" onClick={closeMenu}>Blogs</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;