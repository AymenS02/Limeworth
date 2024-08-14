import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="font-josefin flex bg-green-200 shadow-lg">
      <ul className="nav-links flex flex-row justify-between items-center w-screen gap-[2vh] m-[2vh]">
        <li className="flex justify-start">
          <img 
            src="/limeworth-logo.png" 
            alt="Logo" 
            className="m-0 p-0 w-[15vh]" 
          />
        </li>

        {/* Navigation Links with Motion */}
        <div className="flex flex-row items-center gap-[2vh] font-bold">
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="nav-link-container bg-blue-400 text-white hover:bg-green-500 hover:text-black transition-all duration-300 px-6 py-1 rounded-2xl"
          >
            <a href="/" className="nav-link">Home</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="nav-link-container bg-blue-400 text-white hover:bg-green-500 hover:text-black transition-all duration-300 px-6 py-1 rounded-2xl"
          >
            <a href="/about" className="nav-link">About</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="nav-link-container bg-blue-400 text-white hover:bg-green-500 hover:text-black transition-all duration-300 px-6 py-1 rounded-2xl"
          >
            <a href="/services" className="nav-link">Services</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="nav-link-container bg-blue-400 text-white hover:bg-green-500 hover:text-black transition-all duration-300 px-6 py-1 rounded-2xl "
          >
            <a href="/contact" className="nav-link">Contact</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="bg-blue-400 text-white hover:bg-green-500 hover:text-black transition-all duration-300 px-6 py-1 rounded-2xl"
          >
            <a 
              href="/LimeworthRequisitionForm.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Requisition
            </a>
          </motion.div>

        </div>
      </ul>
    </div>
  );
}

export default Navbar;
