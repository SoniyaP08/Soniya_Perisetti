import React from 'react'
import { Element } from 'react-scroll';
import Sonu from '../assets/profile1.jpg';
export default function About() {
  return (
    <Element name="about" className="about-me">
      <p className="subtitle">Get to know more</p>
      <h1><b>About Me</b></h1>
      <div className="about-container">
        <div className="image-container">
        <img src={Sonu} alt="About me"/>
        </div>
    <div className="content">
      <div className="boxes">
        <div className="box">
        <i class="fa-solid fa-graduation-cap fa-xl" style={{color: "#000000", margin: "20px"}}></i>
            <h4><b>Education</b></h4>
            <p>Pursuing B.Tech at RGUKT Nuzvid</p>
        </div>
        <div className="box">
        <i class="fa-solid fa-code fa-xl" style={{color: "#000000", margin: "20px"}}></i>
            <h4><b>Coding</b></h4>
            <p>Actively engaged in solving coding problems</p>
        </div>
        <div className="box">
        <i class="fa-solid fa-briefcase fa-xl" style={{color: "#000000", margin: "20px"}}></i>
            <h4><b>Experience</b></h4>
            <p >Java Full Stack internship at Edubot Technologies</p>
        </div>
        </div>
        <div className="paraContent">
           <p> I'm Soniya, a Computer Science student with a strong foundation in Java and a growing 
            passion for coding and web development.
            I have gained hands-on experience through a full-stack Java internship at Edubot Technologies.
            I enjoy solving complex problems and am always eager to take on new challenges that help me expand my skill set.</p>
        </div>
      </div>
      
      </div>
    </Element>

  )
}
