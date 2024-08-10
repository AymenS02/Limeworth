import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="p-8 bg-white rounded-lg shadow-lg"
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl items-center font-bold p-2">Welcome to Limeworth X-ray & Ultrasound</h1>
        <h3 className="flex justify-center items-center font-bold p-2">Working Hours (Ultrasound by Appointment)</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Hours</th>
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
      </motion.div>
    </div>
  );
}

export default Home;