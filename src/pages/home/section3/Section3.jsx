import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../assets/home/img1.jpg";
import img2 from "../../../assets/home/img2.png";

// Animation presets
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Section3 = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-20 lg:px-32 xl:px-80 py-10 md:pb-28 font-['Lexend']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp(0)}
            style={{ fontFamily: 'Luxerie' }}
            className="text-3xl text-center m-auto md:text-left md:m-0 sm:text-4xl md:text-6xl font-normal tracking-tight"
          >
            OUR PROJECTS
          </motion.h2>

          <motion.div
            variants={fadeUp(0.2)}
            className="flex-shrink-0 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg transition font-lexend text-sm
              bg-[linear-gradient(126.53deg,_#FAECC9_-6.95%,_#CCAB64_53.15%,_#FAECC9_113.25%)]
              text-black hover:opacity-90"
            >
              View All Project
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[{ img: img1, title: "105 Residencies By Kamdar", location: "JVC, Dubai" }, { img: img2, title: "Meydan Villas", location: "Meydan, Dubai" }]
            .map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden aspect-[13/9] w-full"
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{ delay: 0.3 }}
                />

                {/* Text Over Image */}
                <motion.div
                  className="absolute bottom-4 left-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm sm:text-base font-light text-white/80">{project.location}</p>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
