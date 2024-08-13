import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <motion.div
        className="p-8 bg-white rounded-lg shadow-lg"
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold pb-4">Contact Us</h1>
        <p className='pb-2'><strong>Address:</strong>849 Upper Wentworth St, Hamilton, ON L9A 5H4</p>
        <p className='pb-2'><strong>Phone:</strong> (905) 574-7755</p>
        <p className='pb-2'><strong>Fax:</strong> (905) 574-0384</p>
        <p className='pb-2'><strong>Email:</strong> limeworthxray@gmail.com</p>
      </motion.div>
    </div>
  );
}

export default Contact;