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
        I'm a Python developer with experience in data engineering and a growing focus on full-stack web development.
      </p>
      <p>
        Over the past few years, I've worked primarily with Python in backend and data-related roles, gaining hands-on
        experience in data processing, automation, and building scalable scripts and tools. I have worked in data
        engineering environments, where I contributed to building and maintaining ETL pipelines, handling large datasets,
        and integrating data sources efficiently.
      </p>
      <p>
        Recently, I've shifted my focus toward full-stack development. I'm actively learning and building projects using
        <strong> Django</strong> for backend APIs and <strong>React</strong> for frontend interfaces. My goal is to combine
        my strong programming foundation with modern web technologies to deliver complete, end-to-end web solutions.
      </p>
      <p>
        I enjoy solving real-world problems by applying best practices, writing clean code, and embracing continuous
        learning.
      </p>
    </section>
  );
}

export default About;