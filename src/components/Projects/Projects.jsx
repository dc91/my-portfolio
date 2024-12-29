import React from 'react';
import './Projects.css';
import Deer from '../../assets/Deer.svg';
import Todoly1 from '../../assets/ToDoLy1.svg';


function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        <div className="project-card">
          <p className='projectName'>ToDoLy</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
        <div className="project-card">
          <p className='projectName'>Asset Tracker</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
        <div className="project-card">
          <p className='projectName'>CV</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
        <div className="project-card">
          <p className='projectName'>Munamii</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
        <div className="project-card">
          <p className='projectName'>People Manager</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
        <div className="project-card">
          <p className='projectName'>This Site</p>
          <div className='viewPortCards'>
            <img src={Todoly1} />
          </div>
          <a className='button' href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
      </div>
      <img id="deerBlack" src={Deer}/>
    </section>
  );
}


export default Projects;
