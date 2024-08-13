import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
    <>
      <section id="Home" className='sectionAll'>
        {/* <Navbar /> */}
        <Home />
      </section>
      <section id="About" className="sectionAbout">
        <About />
      </section>
      <section id="Experience" className='sectionExperience'>
        <Services />
      </section>
      <section id="Skills" className='sectionSkills'>
        <Contact />
      </section>
      <footer className='flex items-stretch'>
        <p>© 2024 by <a href="https://www.linkedin.com/in/aymen-shoteri/" target="_blank" rel="noreferrer">Limeworth X-ray & Ultrasound</a></p>
        <p>All Rights Reserved</p>
      </footer>
    </>
  )
}

export default App;

