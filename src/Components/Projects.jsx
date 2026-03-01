import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Task Manager",
    description: "A web-based Task Manager to create, track, and manage daily tasks efficiently.",
    code: "https://github.com/duabaloch/Task-Manager-",
    live: "https://task-manager-opal-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Calculator Project",
    description: "A fully functional web calculator for performing basic arithmetic operations.",
    code: "https://github.com/duabaloch/Calculator-Project",
    live: "https://calculator-project-zeta-mauve.vercel.app/",
  },
  {
    id: 3,
    title: "API Weather-Check",
    description: " A web app that fetches and displays real-time weather data for any city.",
    code: "https://github.com/duabaloch/API-Weather-Application-",
    live: "https://weather-check-application-rose.vercel.app/",
  },
  {
    id: 4,
    title: "Count-Down Project",
    description: "A simple countdown timer that counts down from 10 to 0 with a live display.",
    code: "https://github.com/duabaloch/Count-Down-Project",
    live: "https://count-down-project-puce.vercel.app/",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [animateIndexes, setAnimateIndexes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // IntersectionObserver for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateIndexes(projects.map((_, i) => i));
          } else {
            setAnimateIndexes([]);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Handle anchor link clicks (hash change)
    const handleHashJump = () => {
      if (window.location.hash === "#projects") {
        setAnimateIndexes(projects.map((_, i) => i));
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

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // toggle click effect
  };

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${
                animateIndexes.includes(index) ? "slide-in" : ""
              } ${activeIndex === index ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.25}s` }}
              onClick={() => handleCardClick(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-btn"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;