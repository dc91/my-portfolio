import React from 'react';
import './Contact.css';
import Fishing from '../../assets/Fishing.svg';
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name: <input type="text" name="name"/>
        </label>
        <label>
          Email: <input type="email" name="email"/>
        </label>
        <label>
          Subject: <input type="text" name="subject"/>
        </label>
        <label>
          Message:
          <textarea name="message" rows="5"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <img id="fishingBlack" src={Fishing}/>
    </section>
  );
}

export default Contact;
