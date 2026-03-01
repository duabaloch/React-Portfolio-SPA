import React, { useEffect, useState } from "react";

const testimonialsData = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    message:
      "Working with you on frontend projects was a great experience. Your understanding of HTML, CSS, and JS is solid, and your React components are clean and functional.",
  },
  {
    name: "Bob Smith",
    role: "Project Manager",
    message:
      "Impressed with your ability to quickly learn and apply new concepts. Your web applications are intuitive and visually appealing.",
  },
  {
    name: "Clara Lee",
    role: "UI/UX Designer",
    message:
      "Your attention to detail in designing responsive and interactive interfaces stands out. Great collaboration skills too.",
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    message:
      "The projects you built were well-structured and maintainable. You show a strong understanding of frontend-backend integration.",
  },
];

const Testimonials = () => {
  const [animate, setAnimate] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("testimonials");
    if (section) {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonials" className={`testimonials ${animate ? "animate" : ""}`}>
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <p>What people say about my work and projects</p>

        <div className="testimonial-grid">
          {testimonialsData.map((t, idx) => (
            <div
              className={`testimonial-card ${idx % 2 === 0 ? "slide-left" : "slide-right"}`}
              key={idx}
            >
              <p className="message">"{t.message}"</p>
              <h3 className="name">{t.name}</h3>
              <span className="role">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;