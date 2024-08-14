import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Contact from './components/Contact.jsx';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function App() {
  const [bgColor, setBgColor] = useState('bg-green-500'); // Initial background color

  const sections = [
    { id: 'Navbar', component: <Navbar />, color: 'bg-green-500' },
    { id: 'Home', component: <Home />, color: 'bg-green-500' },
    { id: 'About', component: <About />, color: 'bg-blue-400' },
    { id: 'Services', component: <Services />, color: 'bg-green-500' },
    { id: 'Contact', component: <Contact />, color: 'bg-blue-400' },
  ];

  return (
    <motion.div className={`transition-colors duration-500 ${bgColor}`}>
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          setBgColor={setBgColor}
          color={section.color}
        >
          {section.component}
        </Section>
      ))}
      <footer className='font-josefin flex items-stretch justify-evenly px-[2vh] py-[1vh] bg-green-200 border-t-2 border-black gap-[50vh]'>
        <p>© Limeworth X-ray & Ultrasound Inc. Medical Clinic.</p>
        <p>All Rights Reserved.</p>
      </footer>
    </motion.div>
  );
}

const Section = ({ id, setBgColor, color, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    setBgColor(color);
  }

  return (
    <section id={id} ref={ref} className="">
      {children}
    </section>
  );
};

export default App;
