import React, { useState } from 'react';
import './Projects.css';
import Deer from '../../assets/Deer.svg';
import ToDoLy1 from '../../assets/ToDoLy1.svg';
import CV from '../../assets/CV.png';
import Munamii from '../../assets/Munamii.png';
import AssetTracker from '../../assets/AssetTracker.png';
import PeopleManager from '../../assets/PeopleManager.png';
import HeaderBlack from '../../assets/HeaderBlack.svg';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  // Array of project details including unique images
  const projects = [
    { name: 'ToDoLy', image: ToDoLy1, repo: 'https://github.com/dc91/ToDoLy', content: 
      <p>This is a simple To-Do List console app, which allows users to Add/Edit/Remove and Save tasks to file. 
                <br /> The project is written in C#. It consists of three main parts: <br /><br />
                <b>Main Menu</b><br />
                <b>Add Task</b><br />
                <b>Edit Tasks</b><br /><br />
              The user is able to sort, search and filter tasks in various ways, in the Edit Menu.
              <br /><br />
              <img className='project-snap' src={ToDoLy1} alt={`ToDoLy Thumbnail`} />
              <br />
             It has some responsive design as well as a user friendly design. Allowing for fast navigation.
                Check it out on Github, if you wanna give it a go! <br /><br /></p>
    },
    { name: 'Asset Tracker', image: AssetTracker, repo: 'https://github.com/dc91/MiniProject3', content:
      <p>An asset tracker for a company with three offices, with different currencies. The currencies are fetched at load.
        <br /><br />
        <img className='project-snap' src={AssetTracker} alt={`ToDoLy Thumbnail`} />
        <br /><br />
        Check it out on GitHub!
        <br /><br />
      </p>
     },
    { name: 'CV', image: CV, repo: 'https://github.com/dc91/CV', content:
      <p>Just a classic CV made with HTML and CSS. No JavaScript. A copy made from the first search result when I googled "CV".
        <br /><br />
        <img className='project-snap' src={CV} alt={`ToDoLy Thumbnail`} />
        <br /><br />
        Feel free to snatch the code from GitHub and change it to your needs. <br /><br />
      </p>
    },
    { name: 'Munamii', image: Munamii, repo: 'https://github.com/dc91/Munamii', content:
      <p>A mock website for a bakery called "Munamii", using HTML and CSS. No JavaScript. It works on Mobile and PC.
        <br /><br />
        <img className='project-snap' src={Munamii} alt={`ToDoLy Thumbnail`} />
        <br /><br />
        See the full design at GitHub.
        <br /><br />
      </p>
    },
    { name: 'People Manager', image: PeopleManager, repo: 'https://github.com/dc91/Ex3', content:
      <p>A bare minimmum console app.
        <br /><br />
        <img className='project-snap' src={PeopleManager} alt={`ToDoLy Thumbnail`} />
        <br /><br />
        Copy it from GitHub and imporve it!
        <br /><br />
      </p>
    },
    { name: 'This Site', image: HeaderBlack, repo: 'https://github.com/dc91/my-portfolio', content:
      <p>HTML, CSS and React.js
        <br /><br />
        <img className='project-snap' src={HeaderBlack} alt={`ToDoLy Thumbnail`} />
        <br /><br />
        Hope you like it!
        <br /><br />
      </p>
     },
  ];

  const handleCardClick = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${activeProject === index ? 'active' : activeProject !== null ? 'inactive' : ''}`}
          >
            <p className='projectName'>{project.name}</p>
            <div className='viewPortCards' onClick={() => handleCardClick(index)}>
              <img id='projectImage' src={project.image} alt={`${project.name} Thumbnail`} />
              <div className='project-content'>
              <h1>{project.name}</h1>
              {project.content}
              </div>
              
            </div>
            <a className='button' href={project.repo} target="_blank" rel="noreferrer">GitHub Link</a>
            {activeProject === index && (
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
            )}
          </div>
        ))}
      </div>
      
      <img id="deerBlack" src={Deer} alt="Background Deer Illustration" />
    </section>
  );
}

export default Projects;
