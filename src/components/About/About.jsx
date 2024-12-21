import React from 'react';
import './About.css';
import JumpingBlack from '../../assets/JumpingBlack.svg';
import JumpingColor from '../../assets/JumpingColor.svg';
import StandingBlack from '../../assets/StandingBlack.svg';

function About() {
  return (
    <section id="about" className="about-section">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit 
        in vulputate velit esse molestie. Ut wisi enim ad 
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit 
        in vulputate velit esse molestie.
      </p>
      <div className="about-imgs">
          {/* <img id="standingBlack" src={StandingBlack}/> */}
          
          <img id="jumpingBlack"src={JumpingBlack}/>
          {/* <img id="jumpingColor"src={JumpingColor}/> */}
      </div>
    </section>
  );
}

export default About;
