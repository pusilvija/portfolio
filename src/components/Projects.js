import React, { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projects = document.querySelectorAll('.project, h2'); 
    
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

    projects.forEach((project) => observer.observe(project));

    return () => {
      projects.forEach((project) => observer.unobserve(project));
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
{/* 
      <h2 id="experience-type">Projects</h2>

        <div className="project">
          <div className="project-details">
            <a href="https://your-planner-fe-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className='project-link'>      
            <h1><strong>Your-Planner App</strong></h1>       
            </a>
            <div className="project-header">
              <p>
              Your Planner is a full-stack productivity application featuring a React frontend and a Python/Django REST backend, deployed on Railway. Implements authentication, Django REST framework and real-time task updates. Key features include task management, responsive UI, and modular code architecture. 
              </p>
            </div>
            <div className="links">
              <a href="https://github.com/pusilvija/your-planner-fe" target="_blank" rel="noopener noreferrer" className="github-button">
                <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div id='your-planner' className='project-logo'>
          <a href="https://your-planner-fe-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className='project-link'>      
              <img 
                  src={`${process.env.PUBLIC_URL}/your-planner.png`}
                  alt="Visit App" 
                  className="your-planner-link-icon" 
                />
            </a>
          </div>
        </div> */}

      <h2 id="experience-type">Work Experience</h2>

        <div className="project">
          <div className="project-year">2021 - 2024</div>
          <div className="project-details">
            <h1><strong>Python Developer at Gjensidige</strong></h1>
            <p>Supported Azure data platform migration in cross-country teams. Provided technical guidance on Python, Git, CI/CD, dbt, Databricks, and MLflow; handled code refactoring, testing, and ML model deployment. Led Streamlit integration with secure, project-level access and deployed apps on Azure Kubernetes. Delivered internal workshops and presentations.</p>
          </div>
          <div className='project-logo'>
            <img 
              src={`${process.env.PUBLIC_URL}/gjensidige-logo.png`}
              alt="Gjensidige Logo" 
              className="gjensidige-project-logo" 
            />
          </div>
        </div>

        <div className="project">
          <div className="project-year">2020 - 2021</div>
          <div className="project-details">
            <h1><strong>Python Developer at Biomatter</strong></h1>
            <p>Worked in a small developer team to build a platform for designing and evaluating stable proteins for clients, integrating machine learning tools and supporting unique, file-based data.</p>
          </div>
          <div className='project-logo'>
            <img 
              src={`${process.env.PUBLIC_URL}/biomatter-logo.png`}
              alt="Biomatter Logo" 
              className="biomatter-project-logo" 
            />
          </div>
        </div>

      <h2 id="experience-type">Education</h2>

        <div className="project">
          <div className="project-year">2018 - 2020</div>
          <div className="project-details">
            <h1><strong>MSc of Bioinformatics</strong></h1>
            <p>Gained strong foundation in Python, computer science, advanced algorithms, and data structures. Specialized in sequence and structural bioinformatics, genetic analysis, and machine learning. Hands-on with neural networks, Bayesian models, and sampling methods (Adam, HMC NUTS), with deep expertise in computational analysis and scientific programming.</p>
          </div>
          <div className='project-logo'>
            <img 
              src={`${process.env.PUBLIC_URL}/ku-logo.png`} 
              alt="KU Logo" 
              className="ku-project-logo" 
            />
          </div>
        </div>

        <div className="project">
          <div className="project-year">2014 - 2018</div>
          <div className="project-details">
            <h1><strong>BSc of Biochemistry</strong></h1>
            <p>Solid foundation in biochemistry with additional coursework in bioinformatics and data analysis using R. Developed analytical and problem-solving skills through scientific research.</p>
          </div>
          <div className='project-logo'>
            <img 
              src={`${process.env.PUBLIC_URL}/vu-logo.png`} 
              alt="VU Logo" 
              className="vu-project-logo" 
            />
          </div>
        </div>
      
    </section>
  );
}

export default Projects;
