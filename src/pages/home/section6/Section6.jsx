import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../../assets/home/bg_5.png'; // Replace with your actual path

const Section6 = () => {
  return (
    <>
      <style>{`
        .section6-shadow {
          position: relative;
        }

        .section6-shadow::before,
        .section6-shadow::after {
          content: '';
          position: absolute;
          top: 0;
          width: 60px;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }

        .section6-shadow::before {
          left: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
        }

        .section6-shadow::after {
          right: 0;
          background: linear-gradient(to left, rgba(0,0,0,0.8), transparent);
        }
      `}</style>

      <section
        className="w-full py-16 px-4 md:px-0 flex justify-center items-center bg-black text-white section6-shadow"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="max-w-xl w-full bg-black bg-opacity-80 p-6 md:p-10 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2
            className="text-4xl md:text-7xl font-bold text-center"
            style={{ fontFamily: 'Luxerie' }}
          >
            REGISTER NOW
          </h2>
          <p className="text-center text-sm mb-8 text-white font-lexend">
            Send an enquiry by filling in the form below
          </p>
          <form className="space-y-4 font-lexend font-[300]">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 px-4 py-2 bg-black border border-white rounded-md text-white placeholder-white"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 px-4 py-2 bg-black border border-white rounded-md text-white placeholder-white"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="w-1/2 px-4 py-2 bg-black border border-white rounded-md text-white placeholder-white"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-1/2 px-4 py-2 bg-black border border-white rounded-md text-white placeholder-white"
              />
            </div>
            <select className="w-full px-4 py-2 bg-black border border-white rounded-md text-white">
              <option>Enquiry Type</option>
              <option>Sales</option>
              <option>Support</option>
              <option>General</option>
            </select>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 bg-black border border-white rounded-md text-white placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-[#FAECC9] via-[#CCAB64] to-[#FAECC9] text-black font-[300] shadow-md hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Section6;
