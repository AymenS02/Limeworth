
function About() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className="flex flex-col justify-center items-center text-center m-10 p-8 bg-white rounded-lg shadow-lg w-[80vh]">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>We are a diagnostic imaging clinic located in Hamilton Ontario, at the intersection of Mohawk Rd and Upper Wentworth St.</p>
        <p>Our technologists are experienced, friendly and strive to provide an efficient and relaxed appointment. We also provide services in three languages: English, Arabic and Urdu. Please feel free to contact us if you have any questions.</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8 bg-white rounded-lg shadow-lg w-[80vh]">
        <h1 className="mb-2">How to Schedule an Appointment:</h1>
        <p>All exams require a signed requisition from a doctor.</p>
        <p>All exams except x-ray require an appointment.</p>
        <p>Please call 905-574-7755 to schedule an appointment.</p>
      </div>
    </div>
  );
}

export default About;