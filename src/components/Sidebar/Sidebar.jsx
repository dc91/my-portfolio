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
        {/* <img className="line" src={Line}/> */}
      </li>
      <li onClick={() => setActiveSection('projects')}>
        <a className="navButtons" href="#projects">
          Projects
        </a>
        {/* <img className="line" src={Line}/> */}
      </li>
      <li onClick={() => setActiveSection('skills')}>
        <a className="navButtons" href="#skills" >
          Skills
        </a>
        {/* <img className="line" src={Line}/> */}
      </li>
      <li onClick={() => setActiveSection('contact')}>
        <a className="navButtons" href="#contact">
          Contact
        </a>
        {/* <img className="line" src={Line}/> */}
      </li>
    </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
