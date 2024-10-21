"use client";
import React from "react";
import ScreenDesktopComponent from "../ScreenDesktopComponent/ScreenDesktopComponent";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const PickTheSun: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.17,
  });
  const screenVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.5,
      },
    },
  };
  return (
    <section
      ref={ref}
      className="flex flex-col  items-center justify-center gap-6 z-1 py-10 px-5 mt overflow-hidden"
    >
      <div className="flex flex-col items-center gap-2 w-[343px] h-[62px]">
        {/* Caption */}
        <div className="  font-medium text-[16px] md:text-[20px] leading-[18px] text-center text-[#D97706]">
          No more waste
        </div>
        {/* Main Headline */}
        <div className="  font-bold text-[32px] md:text-[56px] leading-[35px] text-center">
          Pick the Sun
        </div>
      </div>

      {/* Paragraph */}
      <div className="  font-normal md:w-[900px] text-[16px] md:text-[20px] leading-[22px] text-center text-gray-900">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec
        ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
        pharetra sed in mauris elementum sollicitudin.
      </div>

      <div className="relative">
        {/* Ellipse 14 - círculo no canto superior esquerdo */}
        <div className="absolute w-[249.86px]  h-[250.22px] md:w-[710px] md:h-[710px] bg-[#F59E0B] left-0 top-0 transform -translate-x-2/3 -translate-y-16 rounded-full z-[-10]"></div>

        <div className="absolute w-[209.74px] h-[210.1px]  md:w-[596px] md:h-[596px] bg-[#7E22CE] right-0 top-0 md:top-28 rounded-full transform translate-x-48 -translate-y-5 z-[-10]"></div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={screenVariants}
        >
          <ScreenDesktopComponent />
        </motion.div>
      </div>
    </section>
  );
};

export default PickTheSun;
