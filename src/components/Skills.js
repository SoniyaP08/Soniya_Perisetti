import React from 'react'
import { Element } from 'react-scroll';
export default function Skills() {
  return (
    <Element name="skills" id="my-skills">
      <p className="subtitle">Explore My</p>
      <h1><b>Skills</b></h1>
      <div className="skills-container">
        <div className="skill-box">
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>HTML</span>
           <p>Experienced</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>CSS</span>
           <p>Experienced</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>JavaScript</span>
           <p>Basic</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>ReactJS</span>
           <p>Basic</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>Java</span>
           <p>Intermediate</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>Servlets & Jsp</span>
           <p>Basic</p>
           </div>
        </div>
        <div className="skill-box">
        <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>C</span>
           <p>Basic</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>Python</span>
           <p>Basic</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>MySQL</span>
           <p>Intermediate</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>PostgreSQL</span>
           <p>Intermediate</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>DSA</span>
           <p>Intermediate</p>
           </div>
           <div className="each-skill">
           <i className="fa-solid fa-circle-check fa-xl" style={{color: "#000000",marginRight: "8px"}}></i>
           <span>Git</span>
           <p>Basic</p>
           </div>
        </div>
      </div>
    </Element>
  )
}
