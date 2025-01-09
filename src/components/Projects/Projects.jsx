import React, { useState } from 'react';
import './Projects.css';
import Deer from '../../assets/Deer.svg';
import projects from './ProjectsData.jsx';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <section id='projects' className='projects-section'>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${activeProject === index ? 'active' : activeProject !== null ? 'inactive' : ''}`}>
            <p className='projectName'>{project.name}</p>
            <div className='viewPortCards' onClick={() => handleCardClick(index)}>
              <img id='projectImage' src={project.image} alt={`${project.name} Thumbnail`} />
              <div className='project-content'>
              <h1>{project.name}</h1>
              {project.content}
              </div>
            </div>
            <a className='gitLinkButton' href={project.repo} target="_blank" rel="noreferrer">GitHub Link</a>
            {activeProject === index && (
              <button className='closeButton' onClick={handleClose}>
                Close
              </button>
            )}
          </div>
        ))}
      </div>
      
      <img id='deerBlack' src={Deer} alt="Background Deer Illustration" />
    </section>
  );
}

export default Projects;
