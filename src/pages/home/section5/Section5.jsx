import React from "react";
import { motion } from "framer-motion";
import Bg from "../../../assets/home/bgline.png";
import city from "../../../assets/home/city.png";

// Animation variant helper
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Section5 = () => {
  return (
    <section
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Animated card container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-3xl bg-[#0F0D0D] text-white rounded-md px-5 py-6 md:p-10 text-center shadow-xl border border-yellow-500"
      >
        <motion.h2
          variants={fadeUp(0)}
          style={{ fontFamily: "Luxerie" }}
          className="text-3xl md:text-6xl font-semibold"
        >
          CEO MESSAGE
        </motion.h2>

        <motion.p
          variants={fadeUp(0.3)}
          className="text-medium font-lexend font-[300] md:text-base md:mx-24 leading-tight mb-8"
        >
          We founded Kamdar with a simple belief; that real estate should stand
          the test of time, both in design and in trust. Every home we build is
          a reflection of that legacy.”
        </motion.p>

        <motion.h3
          variants={fadeUp(0.5)}
          style={{ fontFamily: "Luxerie" }}
          className="text-xl md:text-4xl font-medium"
        >
          YUSUF KAMDAR
        </motion.h3>

        <motion.p
          variants={fadeUp(0.6)}
          className="text-sm font-lexend font-[300]"
        >
          Chairman of Kamdar Developments
        </motion.p>

        <motion.img
          variants={fadeUp(0.8)}
          src={city}
          alt="City Silhouette"
          className="absolute bottom-0 left-0 -z-1 w-full h-28 object-cover"
        />
      </motion.div>

      {/* Optional final overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default Section5;
