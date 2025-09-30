import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current; // Store the current value of the ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref value
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <h2>About Me</h2>
        <p>
          I'm a Software Engineer with a strong foundation in backend development, data engineering, and an expanding skill set in full-stack web development.
        </p>
        <p>
          Over the past few years, I've worked extensively with Python in backend and data-focused roles, building scalable tools, automation workflows, and robust data pipelines. My experience includes designing and maintaining ETL processes, optimizing large-scale data handling, and integrating diverse systems to improve efficiency and reliability.
        </p>
        <p>
          More recently, I've broadened my focus to full-stack engineering. I've been developing applications with Django and FastAPI for backend services and React for frontend interfaces, with the goal of delivering seamless, end-to-end solutions. I'm also comfortable working with cloud platforms, databases, and containerization to support modern application development.
        </p>
        <p>
          I'm passionate about solving real-world problems through technology, writing clean and maintainable code, and continuously learning new tools and best practices to grow as an engineer.
        </p>
    </section>
  );
}

export default About;