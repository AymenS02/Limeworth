function Home() {
  return (
    <div className="flex flex-col flex-nowrap justify-evenly items-center py-[30vh]">
      <h1 className="text-[3vh] items-center font-bold p-2">Welcome to Limeworth X-ray & Ultrasound</h1>
      <div className="p-[2vh] bg-white rounded-lg shadow-lg">
        <h3 className="flex justify-center items-center font-bold p-[0.5vh]">Working Hours (Ultrasounds by Appointment)</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead className="">
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
      </div>
    </div>
  );
}

export default Home;