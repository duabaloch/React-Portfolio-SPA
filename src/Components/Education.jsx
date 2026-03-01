import React, { useEffect, useRef } from "react";

const educationData = [
  {
    degree: "Bachelor of Arts in English Language and Literature",
    institution: "University GCUH",
    period: "2025 - Present",
    description: "Studying English deeply with a strong interest in history and the beauty of the English language.",
  },
  {
    degree: "Full Stack Web Development",
    institution: "PITP-MUET",
    period: "2 months course (2026)",
    description: "Learned HTML, CSS, and JavaScript from basics to advanced, gained hands-on experience with React for responsive interfaces, and explored backend development with the MERN stack. Completed several frontend projects and one comprehensive backend project, continuing to grow in web development",
  },
];

const Education = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="education" id="education" ref={sectionRef}>
      <div className="education-container">
        <h2>My Education</h2>
        <p>Here’s a brief overview of my academic and professional learning journey:</p>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div
              className="education-card"
              key={index}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="edu-period">{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;