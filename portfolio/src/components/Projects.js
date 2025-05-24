import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Personal Projects</h2>
      <div className="project">
        <h3>Your-Planner App</h3>
        <p>A React-based task management app with a responsive design, leveraging modern state management, RESTful API integration, and dynamic components to deliver an efficient and user-friendly planning experience</p>
        <div className="links">
          <a href="https://your-planner-fe-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Visit App</a>
          <a href="https://github.com/pusilvija/your-planner-fe" target="_blank" rel="noopener noreferrer">Frontend GitHub</a>
          <a href="https://github.com/pusilvija/your-planner" target="_blank" rel="noopener noreferrer">Backend GitHub</a>
        </div>
      </div>
      {/* More projects can go here */}
    </section>
  );
}

export default Projects;
