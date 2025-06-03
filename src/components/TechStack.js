import React, { useEffect, useRef } from 'react';
import './TechStack.css';

function TechStack() {
  const techStackRef = useRef(null);

  useEffect(() => {
    const categories = document.querySelectorAll('.tech-category');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add the `visible` class with a delay based on the index
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    categories.forEach((category) => observer.observe(category));

    return () => {
      categories.forEach((category) => observer.unobserve(category));
    };
  }, []);

  return (
    <section
      id="tech-stack"
      className="tech-stack-section"
      ref={techStackRef}
    >
        <div className="tech-stack">
          <div className="tech-category">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Data Engineering</h3>
            <ul>
              <li>dbt</li>
              <li>Databricks</li>
              <li>Azure Data Factory</li>
              <li>Jinja</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>Azure</li>
              <li>Azure Kubernetes Service</li>
              <li>Docker</li>
              <li>Terraform</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Development Tools</h3>
            <ul>
              <li>PyCharm, VS Code</li>
              <li>Git</li>
              <li>Ubuntu, Windows</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Data Visualization & Analytics</h3>
            <ul>
              <li>Streamlit</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Machine Learning </h3>
            <ul>
              <li>OpenAI API</li>
              <li>ML, Neural networks</li>
            </ul>
          </div>
        </div>
    </section>
  );
}

export default TechStack;