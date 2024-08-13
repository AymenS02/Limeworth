import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="flex justify-center items-center bg-green-500">
      <motion.div
        className="p-8 w-1/2  rounded-lg shadow-lg"
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-6">Our Services</h1>
        <div className='flex flex-wrap flex-row gap-8'>
          <div className='flex items-center justify-start flex-wrap bg-white w-1/4'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap bg-white'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap bg-white'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap bg-white'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap bg-white'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap bg-white'>
            <h1>X-Ray</h1>
            <p>An x-ray examination is an imaging procedure that uses radiation to create images of inside the body. X-rays can be used to image the skeletal system and sometimes soft tissues as well.</p>
            <div>
              <h3>Preparing for your X-Ray:
              </h3>
              <p>"To avoid needing to change, you can wear lightweight clothing without zippers or buttons."</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;