import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="text-white font-josefin flex flex-col flex-nowrap justify-start items-center pb-[25vh] pt-[15vh] bg-bla">
      <h1 className="text-[4vh] items-center font-bold pb-4">Welcome to</h1>
      <h1 className="text-[6vh] items-center font-bold pb-[6vh]">Limeworth X-ray & Ultrasound</h1>
      <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} className=''>
        <div className="p-[2vh] bg-green-800 rounded-lg shadow-lg border border-white">
          <h3 className="font-bold pb-[1vh]">Working Hours (Ultrasounds by Appointment)</h3>
          <table className="table-auto border-collapse border border-white w-full text-left">
            <thead className="m-0 p-0">
              <tr>
                <th className="font-bold border border-gray-300 px-4 py-2">Day</th>
                <th className="font-bold border border-gray-300 px-4 py-2">Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Monday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 6PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tuesday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 6PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wednesday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 5PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Thursday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 6PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Friday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 5PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Saturday</td>
                <td className="border border-gray-300 px-4 py-2">8AM - 4PM</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sunday</td>
                <td className="border border-gray-300 px-4 py-2">CLOSED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;