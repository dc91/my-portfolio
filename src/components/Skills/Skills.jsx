import React, { useState } from 'react';
import './Skills.css';
import Deer2 from '../../assets/Deer2.svg';

function Skills() {
  const [activeFace, setActiveFace] = useState(null);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleClick = (faceName) => {
    setActiveFace(faceName);
  };

  const handleReset = () => {
    if (activeFace) {
      setIsCollapsing(true);
    }
  };

  const handleAnimationEnd = (e) => {
    if (isCollapsing && e.animationName.startsWith('collapse')) {
      setActiveFace(null);
      setIsCollapsing(false);
    }
  };

  const getCubeWrapperClasses = () => {
    let classes = 'cube-wrapper';
    if (activeFace && !isCollapsing) {
      classes += ` show-${activeFace} expanded`;
    }
    if (isCollapsing && activeFace) {
      classes += ` collapsing-${activeFace}`;
    }
    return classes;
  };

  return (
    <div className="skills-container">

      {/* Conditionally add classes for the chosen face */}
      <div className={getCubeWrapperClasses()}>
        <div className="cube" onAnimationEnd={handleAnimationEnd}>
          <div
            className="face front"
            onClick={() => handleClick('frontend')}
            tabIndex="0"
            role="button"
            aria-label="Frontend Skills"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick('frontend'); }}
          >
            <span>Frontend Skills</span>
          </div>
          <div
            className="face right"
            onClick={() => handleClick('backend')}
            tabIndex="0"
            role="button"
            aria-label="Backend Skills"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick('backend'); }}
          >
            <span>Backend Skills</span>
          </div>
          <div
            className="face left"
            onClick={() => handleClick('design')}
            tabIndex="0"
            role="button"
            aria-label="Design Skills"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick('design'); }}
          >
            <span>Design Skills</span>
          </div>
        </div>

        {/* Render circles only if a face is active and not collapsing */}
        {activeFace === 'backend' && !isCollapsing && (
          <div className="circles-container">
            <div className="circle">C</div>
            <div className="circle">C++</div>
            <div className="circle">C#</div>
            <div className="circle">Python</div>
            <div className="circle">SQL</div>
          </div>
        )}
        {activeFace === 'frontend' && !isCollapsing && (
          <div className="circles-container">
            <div className="circle">HTML</div>
            <div className="circle">CSS</div>
            <div className="circle">JavaScript</div>
            <div className="circle">React</div>
          </div>
        )}
        {activeFace === 'design' && !isCollapsing && (
          <div className="circles-container">
            <div className="circle">Illustrator</div>
            <div className="circle">Photoshop</div>
            <div className="circle">Cubase</div>
          </div>
        )}

        {/* Reset Button */}
        {activeFace && !isCollapsing && (
          <span className="reset-button" onClick={handleReset}>
            Reset Cube
          </span>
        )}
      </div>

      <img src={Deer2} id="deer2Black" alt="Deer Illustration" />
    </div>
  );
}

export default Skills;
