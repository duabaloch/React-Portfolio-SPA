import React, { useEffect, useRef, useState } from "react";

const About = ({ activeSection }) => {
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Animate when visible
          } else {
            setAnimate(false); // Reset animation when not visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  // Function to re-trigger animation on anchor click
  const handleAnchorClick = (e) => {
    e.preventDefault();

    // Smooth scroll to the section
    aboutRef.current.scrollIntoView({ behavior: "smooth" });

    // Remove and re-add animate class to replay animation
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 50); // small delay to force reflow
  };

  return (
    <section
      className={`about ${animate ? "animate" : ""}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I build modern, responsive web applications that are both
            user-friendly and visually appealing. I focus on crafting clean
            and intuitive user interfaces, ensuring that every design element
            contributes to a seamless user experience. My goal is to make
            websites and apps that are not only functional but also enjoyable
            to use.
          </p>
          <p>
            I specialize in <strong>HTML, CSS, JavaScript, and React</strong>,
            with experience integrating APIs and working with the MERN stack. I
            enjoy creating web applications that are both efficient and
            visually appealing, transforming ideas into practical,
            user-friendly solutions.
          </p>
          <div className="about-buttons">
            <a
              href="#skills"
              className={`btn primary-btn about-btn ${
                activeSection === "about" ? "active-about" : ""
              }`}
              onClick={handleAnchorClick} // Trigger animation on click
            >
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;