import React from "react";
import { Reveal } from './Reveal.tsx';

function Contact() {
  return (
    <Reveal>
      <div className="font-josefin flex justify-center items-center gap-[10vh] pb-[30vh] text-white">
        <div className="p-[3vh] bg-blue-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold pb-4">Contact Us</h1>
          <p className='pb-2'><strong>Address:</strong> 849 Upper Wentworth St, Hamilton, ON L9A 5H4</p>
          <p className='pb-2'><strong>Phone:</strong> (905) 574-7755</p>
          <p className='pb-2'><strong>Fax:</strong> (905) 574-0384</p>
          <p className='pb-2'><strong>Email:</strong> 849xray@gmail.com</p>
        </div>
        <div className="m-8 flex justify-center items-center border border-white rounded-full w-[30vh] h-[30vh] overflow-hidden">
          <img src={`${process.env.PUBLIC_URL}/building.jpg`} alt="Building" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </Reveal>
  );
}

export default Contact;
