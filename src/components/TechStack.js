import React from 'react';
import './TechStack.css';

function TechStack() {
  return (
    <section id="offer" className="offer-section">
      <div className="offer-content">
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
      </div>
    </section>
  );
}

export default TechStack;