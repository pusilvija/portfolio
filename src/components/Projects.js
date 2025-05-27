import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';


function Projects() {

  return (
    <section id="projects" className="projects-section">

      <h2 id="personal-projects">Projects</h2>

        <div className="project">
          <div className="project-details">
            <a href="https://your-planner-fe-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className='project-link'>      
            <strong>Your-Planner App</strong>       
            </a>
            <div className="project-header">
              <p>
                A React-based task management app with a responsive design, leveraging modern state management, RESTful API integration, and dynamic components to deliver an efficient and user-friendly planning experience.
              </p>
            </div>
            <div className="links">
              <a href="https://github.com/pusilvija/your-planner-fe" target="_blank" rel="noopener noreferrer" className="github-button">
                <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className='project-logo'>
          <a href="https://your-planner-fe-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className='project-link'>      
              <img 
                      src="your-planner.png" 
                      alt="Visit App" 
                      className="your-planner-link-icon" 
                    />
            </a>
          </div>
        </div>

      <h2 id="work-experience">Experience</h2>

        <div className="project">
          <div className="project-year">2021 - 2024</div>
          <div className="project-details">
            <strong>Python Developer at Gjensidige</strong>
            <p>Developed and maintained ...</p>
          </div>
          <div className='project-logo'>
            <img 
              src="gjensidige-logo.png" 
              alt="Gjensidige Logo" 
              className="gjensidige-project-logo" 
            />
          </div>
        </div>

        <div className="project">
          <div className="project-year">2020 - 2021</div>
          <div className="project-details">
            <strong>Python Developer at Biomatter</strong>
            <p>Developed and maintained ...</p>
          </div>
          <div className='project-logo'>
            <img 
              src="biomatter-logo.png" 
              alt="Biomatter Logo" 
              className="biomatter-project-logo" 
            />
          </div>
        </div>

      <h2 id="education">Education</h2>

        <div className="project">
          <div className="project-year">2018 - 2020</div>
          <div className="project-details">
            <strong>MSc of Bioinformatics, Copenhagen Univeristy</strong>
            <p>Studies, projects...</p>
          </div>
          <div className='project-logo'>
            <img 
              src="ku-logo.png" 
              alt="KU Logo" 
              className="ku-project-logo" 
            />
          </div>
        </div>

        <div className="project">
          <div className="project-year">2014 - 2018</div>
          <div className="project-details">
            <strong>BSc of Biochemistry, Vilnius university</strong>
            <p>Developed and maintained ...</p>
          </div>
          <div className='project-logo'>
            <img 
              src="vu-logo.png" 
              alt="VU Logo" 
              className="vu-project-logo" 
            />
          </div>
        </div>
      
    </section>
  );
}

export default Projects;
