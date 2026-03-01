import React, { useEffect, useState, useRef } from "react";

const roles = ["Full Stack Developer", "MERN Stack Developer", "UI Designer"];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  // Scroll + anchor animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Anchor click fix
    const handleHashJump = () => {
      if (window.location.hash === "#home") {
        setAnimate(true);
      }
    };

    window.addEventListener("hashchange", handleHashJump);
    // Trigger once if page loads with hash
    handleHashJump();

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener("hashchange", handleHashJump);
    };
  }, []);

  return (
    <section
      className={`hero ${animate ? "fade-slide-in" : ""}`}
      id="home"
      ref={sectionRef}
    >
      <div className="hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <h3>Hello, I'm</h3>
          <h1>Dua Baloch</h1>
          <h2 className="animated-role">{currentText}</h2>

          <p>
            I design and develop both frontend and backend applications.
            I specialize in creating responsive, dynamic, and modern web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img
              src="https://i.ibb.co/gMpdNFj6/profile.png"
              alt="Dua Baloch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;