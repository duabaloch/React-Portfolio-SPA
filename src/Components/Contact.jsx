import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show popup
    setShowPopup(true);

    // Clear the form fields
    e.target.reset();

    // Hide popup after 4 seconds
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <section
      className={`contact ${animate ? "animate" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or inquiries.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="contact-popup">
          Your message has been sent successfully! Please keep an eye on your
          email for my response.
        </div>
      )}
    </section>
  );
};

export default Contact;