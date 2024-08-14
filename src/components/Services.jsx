import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="m-0 b-0">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-2xl font-bold pb-[4vh]">Our Services</h1>

        <div className="flex flex-row justify-center align-center m-[10vh] mb-[5vh]" >
          <img className="w-[20vh] h-auto mx-10" src='/xray.png' alt='X-ray' />
          <div className='mt-10'>
            <h2 className="text-xl font-bold ">X-ray</h2>
            <p>Our clinic provides x-ray services for all body parts. No appointment is necessary for x-ray services.</p>
          </div>
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh]" >
          <div className='mt-10'>
            <h2 className="text-xl font-bold">Ultrasound</h2>
            <p>Our clinic provides ultrasound services for all body parts. Ultrasounds are by appointment only.</p>
          </div>
          <img className="w-[20vh] h-auto mx-10" src='/ultrasound.png' alt='Ultrasound' />
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh]" >
          <img className="w-[20vh] h-auto mx-10" src='/mammo.png' alt='Mammography' />
          <div className='mt-10'>
            <h2 className="text-xl font-bold">Mammography</h2>
            <p>Our clinic provides mammography services for breast imaging. Mammograms are by appointment only.</p>
          </div>
        </div>

        <div className="flex flex-row justify-center align-center m-[10vh] my-[5vh]" >
          <div className='mt-10'>
            <h2 className="text-xl font-bold">Bone Mineral Density</h2>
            <p>Our clinic provides bone mineral density services for osteoporosis screening. Bone mineral density tests are by appointment only.</p>
          </div>
          <img className="w-[20vh] h-auto mx-10" src='/bone.png' alt='Bone Density' />
        </div>

      </div>
    </div>
  );
}

export default Services;