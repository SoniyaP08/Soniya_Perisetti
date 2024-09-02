import React from 'react';
import './index.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';
import './Home.css';
import './About.css';
import './Navbar.css';
import './Skills.css';
import './Project.css';
import './Contact.css';
// import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return(
<div>
<Navbar/>
<Home />
<About/>
<Skills/>
<Projects />
<Contact/>
</div>
  );
}

    


export default App;
