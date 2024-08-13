import { motion } from 'framer-motion';

function About() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-400">
      <motion.div
        className="flex flex-col justify-center items-center text-center p-8 bg-white rounded-lg shadow-lg w-[80vh]"
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>We are a diagnostic imaging clinic located in Hamilton Ontario, at the intersection of Mohawk Rd and Upper Wentworth St.</p>
        <p>Our technologists are experienced, friendly and strive to provide an efficient and relaxed appointment. We also provide services in three languages: English, Arabic and Urdu. Please feel free to contact us if you have any questions.</p>
      </motion.div>
    </div>
  );
}

export default About;