import React from 'react';
import { Reveal } from './Reveal.tsx';



function About() {
  return (
    <div className="font-josefin flex flex-col justify-center items-center pb-[30vh] text-white">
      <Reveal>
        <div
          className="flex flex-col justify-center items-center text-center p-8 bg-blue-800 rounded-lg shadow-lg xl:mx-[40vh] mx-[5vh]  my-[5vh]">
          <h1 className="text-[6vh] font-bold">About Us</h1>
          <p className="text-[2vh] xl:text-[3vh]">We are a diagnostic imaging clinic located in Hamilton Ontario, at the intersection of Mohawk Rd and Upper Wentworth St. Our technologists are experienced, friendly and strive to provide an efficient and relaxed appointment. We also provide services in three languages: English, Arabic and Urdu. Please feel free to contact us if you have any questions.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col justify-center items-center text-center p-8 bg-blue-800 rounded-lg shadow-lg xl:mx-[40vh] mx-[5vh] my-[5vh]">
          <h1 className="mb-2 text-[4vh] font-bold">How to Schedule an Appointment:</h1>
          <ul className="list-disc list-inside text-[2vh] xl:text-[3vh]">
            <li>All exams require a signed requisition from a doctor.</li>
            <li>All exams except X-ray require an appointment.</li>
            <li>Please call (905)-574-7755 to schedule an appointment.</li>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export default About;