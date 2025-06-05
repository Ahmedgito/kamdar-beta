import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-20 lg:px-32 xl:px-80 pt-20 pb-10 font-['Lexend']">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Luxerie' }}
          className="
            text-3xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl
            font-normal leading-8 md:leading-14 tracking-tight
          "
        >
          WE DEVELOP QUALITY<br />
          <span className="block">INFRASTRUCTURE AND REAL</span>
          <span className="block">ESTATE PROJECTS</span>
        </motion.h2>

        {/* Statistics */}
        <div className="mt-10 flex flex-col sm:flex-row gap-10 sm:gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl sm:text-6xl font-medium bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-transparent bg-clip-text">
              40+
            </h3>
            <p className="mt-0 text-base sm:text-lg font-light tracking-wide">
              Years of Experience
            </p>
          </motion.div>

          {/* Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl sm:text-6xl font-medium bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] text-transparent bg-clip-text">
              500+
            </h3>
            <p className="mt-0 text-base sm:text-lg font-light tracking-wide">
              Properties
            </p>
          </motion.div>
        </div>

        {/* Bottom Divider Line */}
        <motion.hr
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 border-gray-600"
        />
      </div>
    </section>
  );
};

export default Section2;
