import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="p-8 bg-white rounded-lg shadow-lg"
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Welcome to Limeworth X-ray & Ultrasound</h1>
      </motion.div>
    </div>
  );
}

export default Contact;