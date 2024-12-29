import React from 'react';
import './Sidebar.css';
import HeaderBlack from '../../assets/HeaderBlack.svg';
import Line from '../../assets/Line.svg';
function Sidebar({ setActiveSection }) {
  return (
    <aside className="sidebar">
      <div id="headerImg">
        <img src={HeaderBlack} alt="Person illustration" className="header-illustration" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => setActiveSection('about')}>
            <a className="navButtons" href="#about" >
              About Me
            </a>
          </li>
          <li onClick={() => setActiveSection('projects')}>
            <a className="navButtons" href="#projects">
              Projects
            </a>
          </li>
          <li onClick={() => setActiveSection('skills')}>
            <a className="navButtons" href="#skills" >
              Skills
            </a>
          </li>
          <li onClick={() => setActiveSection('contact')}>
            <a className="navButtons" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
