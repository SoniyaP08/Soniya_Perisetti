import React from 'react'
import { Element } from 'react-scroll';
import p1 from '../assets/project2.png';
import p2 from '../assets/project3.webp';
import p3 from '../assets/project4.jpg';
import p4 from '../assets/project5.jpg';
export default function Projects() {
  return (
   <Element name="projects" id="my-project">
  <p className="subtitle">Explore My Recent</p>
  <h1><b>Projects</b></h1>
  <div className="project-container">
    <div className="project-box">
    <div className="project-img">
    <img src={p1} alt="About me"/>
    </div>
    <h4><b>Sentiment Analysis on Online Product Reviews</b></h4>
    <a href="/" rel="noopener noreferrer">
              <button className="btn btn-light" id="btn2">
              <i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>
                Show Demo
              </button>
            </a>
    </div>
    <div className="project-box">
    <div className="project-img">
    <img src={p2} alt="About me"/>
    </div>
    <h4><b>Online Ticket Booking System</b></h4>
    <a href="https://github.com/SoniyaP08/online_ticket_booking" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark" id="btn2">
              <i className="fa-solid fa-display fa-lg" style={{ marginRight: "8px"}}></i>
                Show Demo
              </button>
            </a>
    </div>
    <div className="project-box">
    <div className="project-img">
    <img src={p3} alt="About me"/>
    </div>
    <h4><b>TextUtils App</b></h4>
    <a href="https://soniyap08.github.io/Textutils-app/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark" id="btn2">
              <i className="fa-solid fa-display fa-lg" style={{marginRight: "8px"}}></i>
                Show Demo
              </button>
            </a>
    </div>
    <div className="project-box">
    <div className="project-img">
    <img src={p4} alt="About me"/>
    </div>
    <h4><b>Weather App</b></h4>
    <a href="https://soniyap08.github.io/Weather-app/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark" id="btn2">
              <i className="fa-solid fa-display fa-lg" style={{marginRight: "8px"}}></i>
                Show Demo
              </button>
            </a>
    
    </div>
  </div>
   </Element>
  )
}
