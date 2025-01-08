import React, { useState } from 'react';
import './Skills.css';
import Deer2 from '../../assets/Deer2.svg';
import SkillData from './SkillData.jsx';

function Skills() {
  const [activeFace, setActiveFace] = useState(null);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (faceName) => {
    setActiveFace(faceName);
  };

  const handleReset = () => {
    if (activeFace) {
      setIsCollapsing(true);
    }
    setActiveSkill(null)
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
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
            {activeSkill === null && (
              <span>Frontend Skills</span>
            )}
            {activeSkill !== null && (
              <div className='skill-details'>
                { SkillData.find((s) => s.skill === activeSkill).content }
              </div>
            )}
          </div>

          <div
            className="face right"
            onClick={() => handleClick('backend')}
            tabIndex="0"
            role="button"
            aria-label="Backend Skills"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick('backend'); }}
          >
            {activeSkill === null && (
              <span>Backend Skills</span>
            )}
            {activeSkill !== null && (
              <div className='skill-details'>
                { SkillData.find((s) => s.skill === activeSkill).content  }
              </div>
            )}
          </div>
          
          <div
            className="face left"
            onClick={() => handleClick('design')}
            tabIndex="0"
            role="button"
            aria-label="Design Skills"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick('design'); }}
          >
            {activeSkill === null && (
              <span>Design Skills</span>
            )}
            {activeSkill !== null && (
              <div className='skill-details'>
                { SkillData.find((s) => s.skill === activeSkill).content  }
              </div>
            )}
          </div>
        </div>

        {/* Render circles only if a face is active and not collapsing */}
        {activeFace !== null && !isCollapsing && (
          <div className="circles-container">
            {SkillData
            .filter((skill) => skill.skillBranch === activeFace)
            .map((skill, index) => (
            <div key={index} className={`circle`} onClick={() => handleSkillClick(skill.skill)} >
              {skill.skill}
            </div>
            ))
            }
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
