import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import DesignIcon from "../../../assets/home/innovate.png";
import QualityIcon from "../../../assets/home/superior.png";
import CommunityIcon from "../../../assets/home/focus.png";
import ExpertiseIcon from "../../../assets/home/unmatched.png";
import SustainabilityIcon from "../../../assets/home/sustainable.png";
import CustomerIcon from "../../../assets/home/customer.png";
import Bg from "../../../assets/home/bg.jpg";

const features = [
  { icon: DesignIcon, title: "Innovative designs" },
  { icon: QualityIcon, title: "Superior quality" },
  { icon: CommunityIcon, title: "Community focus" },
  { icon: ExpertiseIcon, title: "Unmatched expertise" },
  { icon: SustainabilityIcon, title: "Sustainable practices" },
  { icon: CustomerIcon, title: "Customer-centric approach" },
];

// Animation helper
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Section4 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative text-white bg-cover bg-center py-20 font-['Lexend'] overflow-hidden"
      style={{backgroundImage: `url(${Bg})` }}
    >
      {/* Overlay + Fades */}
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 text-center">
        <motion.h2
          variants={fadeUp(0.3)}
          className="text-5xl sm:text-4xl md:text-6xl font-normal mb-8 md:mb-16 tracking-tight"
          style={{ fontFamily: "Luxerie" }}
        >
          WHY CHOOSE US
        </motion.h2>

        {/* Desktop Grid */}
        <motion.div
          variants={fadeUp(0.4)}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-0"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp(index * 0.2 + 0.5)}
              className="flex flex-col items-center text-center"
            >
              <motion.img
                src={feature.icon}
                alt={feature.title}
                className="h-20 w-20 object-contain mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.p className="text-sm sm:text-base font-light">
                {feature.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        <div className="block sm:hidden relative mt-10">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex flex-col items-center text-center py-10 px-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp(index * 0.2)}
                >
                  <motion.img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-24 w-24 object-contain mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.p className="text-base font-light">
                    {feature.title}
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Arrow Styling */}
          <style>{`
            .swiper-button-prev,
            .swiper-button-next {
              color: #facc15;
              top: 35%;
            }
            .swiper-button-prev {
              left: 0;
            }
            .swiper-button-next {
              right: 0;
            }
            .swiper-pagination-bullet {
              background-color: #facc15;
            }
          `}</style>
        </div>
      </div>
    </motion.section>
  );
};

export default Section4;
