import React, { useEffect, useRef, useState } from "react";

const skillsData = [
  { name: "HTML", level: 90, color: "#e44d26" },
  { name: "CSS", level: 85, color: "#264de4" },
  { name: "JavaScript", level: 80, color: "#f0db4f" },
  { name: "React", level: 80, color: "#61dafb" },
  { name: "MERN", level: 75, color: "#4db33d" },
  { name: "API Integration", level: 85, color: "#f97316" },
];

const Skills = () => {
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <section
      className={`skills ${animate ? "animate" : ""}`}
      id="skills"
      ref={skillsRef}
    >
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>Here are some of my technical skills and expertise:</p>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{
                    width: animate ? `${skill.level}%` : 0,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;