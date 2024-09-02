import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pv8qx4m', 'template_s0f0ed2', form.current, {
        publicKey: 'c__EaR6A2LBJK0e7t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <Element name="contact" id="contact-me"> 
      <p className="subtitle">Get in Touch</p>
      <h1><b>Contact Me</b></h1>
      <div className="contact-container">
        <div className="contact-box">
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name="user_name" id='name' placeholder='Enter Your Name' className="input"/><br/>
          <input type='text' name="user_email" id='email' placeholder='Enter Your Email' className="input"/><br/>
          <textarea name="message" placeholder='Enter the Message' className='textarea'/><br/>
          <button type="submit" className="btn btn-primary" id="btn3">
              Send Message<i class="fa-solid fa-paper-plane fa-xl" style={{ marginLeft: "8px"}}></i>
              </button> 
          </form>
        </div>
       <footer>
       <h2><b>Soniya Perisetti</b></h2>
       <div className="items">
       <ul>
            <li>
              <Link to="about" smooth={true} duration={200}>About Me</Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={200}>Skills</Link>
            </li>
            <li >
              <Link to="projects" smooth={true} duration={200}>Projects</Link>
            </li>
            <li >
              <Link to="contact" smooth={true} duration={200}>Contact</Link>
            </li>
          </ul>
          <a href="mailto:soniyaperisetti@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-envelope fa-2xl" style={{color: "#000000",}}></i>
            </a>
            <a href="https://www.linkedin.com/in/naga-soniya-kalyani-perisetti-b57940254" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2xl" style={{color: "#000000",}}></i>
            </a>
            <a href="https://github.com/SoniyaP08" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2xl" style={{color: "#000000",}}></i>
            </a><br/>
       </div>

       </footer>
       <footer className="footer">
    <p>&copy; 2024 Perisetti Soniya. All Rights Reserved.</p>
</footer>
      </div>
    </Element>
  )
}
