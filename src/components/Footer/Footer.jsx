import React from 'react';
import './Footer.css';
import PhoneIcon from '../../assets/phone.svg';
import EmailIcon from '../../assets/email.svg';
import PinIcon from '../../assets/pin.svg';
import GitIcon from '../../assets/githubIcon.svg';

function Footer() {
  return (
    <footer className="footer-section">
      <a id="phoneFoot" href="tel:076-70 39 336" className="footer-link">
        <img id="phoneIcon" src={PhoneIcon} alt="Phone icon" className="footerIcons" />
        076-70 39 336
      </a>
      <a id="emailFoot" href="mailto:dc91_@hotmail.com" className="footer-link">
        <img id="emailIcon" src={EmailIcon} alt="Email icon" className="footerIcons" />
        dc91_@hotmail.com
      </a>
      <a id="pinFoot"
         href="https://www.google.com/maps/search/?api=1&query=Malm%C3%B6%2C+Sweden"
         target="_blank"
         rel="noopener noreferrer"
         className="footer-link">
        <img id="pinIcon" src={PinIcon} alt="Location icon" className="footerIcons" />
        Malmö, Sweden
      </a>
      <a id="githubFoot"
         href="https://github.com/dc91"
         target="_blank"
         rel="noopener noreferrer"
         className="footer-link">
        <img id="gitIcon" src={GitIcon} alt="GitHub icon" className="footerIcons" />
        GitHub: dc91
      </a>
    </footer>
  );
}

export default Footer;
