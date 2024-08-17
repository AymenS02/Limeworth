import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Reveal } from './Reveal.tsx';

function Services() {
  // Motion settings for up and down animation
  const hoverEffect = {
    y: [0, 20, 0], // Moves up and down
    transition: {
      repeat: Infinity, // Infinite loop
      duration: 5, // Time it takes to complete one loop (5 seconds)
      ease: "easeInOut",
    },
  };

  // Hover effect for scaling the div
  const scaleEffect = {
    scale: 1.05, // Scale up by 5%
    transition: { duration: 0.3 } // Duration of the scaling effect
  };

  return (
    <div className="font-josefin m-0 b-0 pb-[25vh] text-white">
      <div className="flex flex-col justify-between items-center">
        <h1 className="font-josefin text-[8vh] font-bold pb-[4vh]">Our Services</h1>

        <div className="flex flex-row justify-center align-center m-[10vh] mb-[5vh] gap-[3vh]" >
          <motion.img 
            className="w-[20vh] h-auto mx-10" 
            src='/xray.png' 
            alt='X-ray'
            animate={hoverEffect}
          />
          <motion.div whileHover={scaleEffect} >
            <Reveal>
              <div className='mt-10 p-[2vh] bg-green-800 rounded-2xl shadow-lg'>
                <div className='flex flex-row items-center gap-[2vh]'>
                  <h2 className="text-[4vh] font-bold ">X-ray</h2>
                  <div className='flex flex-row items-center gap-[1vh]'>
                    <img src="/xmark.png" alt="Xmark" className="h-auto inline-block w-[3vh]" />
                    <h2>No Appointment Needed</h2>
                  </div>
                </div>
                <p>Our clinic provides x-ray services for all body parts. No appointment is necessary for x-ray services.</p>
              </div>
            </Reveal>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh] gap-[3vh]" >
          <motion.div whileHover={scaleEffect} >
            <Reveal>
              <div className='mt-10 p-[2vh] bg-green-800 rounded-2xl shadow-lg'>
                <div className='flex flex-row items-center gap-[2vh] '>
                  <h2 className="text-[4vh] font-bold ">Ultrasound</h2>
                  <div className='flex flex-row items-center gap-[1vh]'>
                    <img src="/checkmark.png" alt="Checkmark" className="h-auto inline-block w-[3vh]" />
                    <h2>Appointment Needed</h2>
                  </div>
                </div>
                <p>Our clinic provides ultrasound services for all body parts. Ultrasounds are by appointment only.</p>
              </div>
            </Reveal>
          </motion.div>
          <motion.img 
            className="w-[20vh] h-auto mx-10" 
            src='/ultrasound.png' 
            alt='Ultrasound'
            animate={hoverEffect}
          />
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh] gap-[3vh]" >
          <motion.img 
            className="w-[20vh] h-auto mx-10" 
            src='/mammo.png' 
            alt='Mammography'
            animate={hoverEffect}
          />
          <motion.div whileHover={scaleEffect} >
            <Reveal>
              <div className='mt-10 p-[2vh] bg-green-800 rounded-2xl shadow-lg'>
                <div className='flex flex-row items-center gap-[2vh]'>
                  <h2 className="text-[4vh] font-bold ">Mammography</h2>
                  <div className='flex flex-row items-center gap-[1vh]'>
                    <img src="/checkmark.png" alt="Xmark" className="h-auto inline-block w-[3vh]" />
                    <h2>Appointment Needed</h2>
                  </div>
                </div>
                <p>Our clinic provides mammography services for breast imaging. Mammograms are by appointment only.</p>
              </div>
            </Reveal>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh] gap-[3vh]">
          <motion.div whileHover={scaleEffect} >
            <Reveal>
              <div className='mt-10 p-[2vh] bg-green-800 rounded-2xl shadow-lg'>
                <div className='flex flex-row items-center gap-[2vh]'>
                  <h2 className="text-[4vh] font-bold ">Bone density Test</h2>
                  <div className='flex flex-row items-center gap-[1vh]'>
                    <img src="/checkmark.png" alt="Checkmark" className="h-auto inline-block w-[3vh]" />
                    <h2>Appointment Needed</h2>
                  </div>
                </div>
                <p>Our clinic provides bone mineral density services for osteoporosis screening. Bone mineral density tests are by appointment only.</p>
              </div>
            </Reveal>
          </motion.div>
          <motion.img 
            className="w-[20vh] h-auto mx-10" 
            src='/bone.png' 
            alt='Bone Density'
            animate={hoverEffect}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
