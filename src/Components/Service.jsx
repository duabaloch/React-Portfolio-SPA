import React, { useEffect, useRef } from "react";
import { FaLaptopCode, FaPaintBrush, FaServer, FaMobileAlt } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Building responsive, modern websites with React, HTML, CSS, and JavaScript." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing clean and user-friendly interfaces for web and mobile applications." },
  { icon: <FaServer />, title: "Backend Development", description: "Creating scalable APIs and managing databases with Node.js and MongoDB." },
  { icon: <FaMobileAlt />, title: "Mobile Friendly", description: "Ensuring websites and apps are fully responsive on all devices." },
];

const Service = () => {
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
    <section className="service" id="service" ref={sectionRef}>
      <div className="service-container">
        <h2>My Services</h2>
        <p>Providing professional full-stack solutions with a focus on design and functionality.</p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;