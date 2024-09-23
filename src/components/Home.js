//import { Container } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll';
import Sonu from '../assets/profile1.jpg';
import '../Home.css'; 
import {Link} from 'react-scroll'
export default function Home() {
  return (
    <Element name="header" className="about">
   <section id="header"> 
   <div className="image-sec">
   <img src={Sonu} alt="About me"/>
   </div>
   <div className="introContent">
   <span id="hello">Hello,</span>
   <span className="introText">I'm <span id="introName">Soniya</span><br/>Web Developer</span>
   <p id="intropara">I'm passionate about coding and web development.
   </p>
   <div className="btns">
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-success" id="btn1">
                <i className="fa-solid fa-suitcase" style={{ marginRight: "8px"}}></i>
                Hire Me
              </button>
            </Link>
            <a href="https://drive.google.com/file/d/1E7SaUiPVH0WSL925qrjP5HQU2vfmAz_f/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success ms-4" id="btn1">
                <i className="fa-solid fa-file" style={{ marginRight: "8px"}}></i>
                My Resume
              </button>
            </a>
          </div>
   </div>
   </section>
    </Element>
  );
}
