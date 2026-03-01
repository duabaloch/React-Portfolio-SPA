import React, { useEffect, useRef } from "react";

const blogPosts = [
  {
    title: "HTML Fundamentals",
    date: "2026",
    description: "Learned semantic markup, page structure, and best practices for clean HTML.",
  },
  {
    title: "CSS & Styling",
    date: "2026",
    description: "Explored flexbox, grid, responsive layouts, and creative styling techniques.",
  },
  {
    title: "JavaScript Essentials",
    date: "2026",
    description: "Learned JavaScript fundamentals including variables, loops, event handling, and DOM manipulation, applying them to create interactive web pages.",
  },
  {
    title: "React Basics",
    date: "2026",
    description: "Learned React fundamentals including components, state, props, and hooks, building dynamic and responsive user interfaces.",
  },
];

const Blog = () => {
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
    <section className="blog" id="blog" ref={sectionRef}>
      <div className="blog-container">
        <h2>Learning Highlights</h2>
        <p>Key topics I’ve studied and practiced during my web development courses:</p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div
              className="blog-card"
              key={index}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3>{post.title}</h3>
              <span className="blog-date">{post.date}</span>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;