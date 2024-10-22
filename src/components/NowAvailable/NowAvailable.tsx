"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import NotebookScreen from "../NotebookScreen/NotebookScreen";
import { useInView } from "react-intersection-observer";

const NowAvailable = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const circleVariants = {
    hidden: { scale: 4, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const notebookVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#581C87] lg:bg-[#7E22CE] py-10">
      <div className="flex flex-col lg:flex-row lg:w-full items-center  justify-center lg:justify-between lg:px-40 gap-5 ">
        <div className="flex flex-col items-center  gap-2 w-full lg:w-[894px] h-[62px]">
          <h3 className="text-center lg:text-left text-[#FCD34D] text-[16px] lg:text-[20px] font-medium leading-[18px] w-full">
            Get the Sun to power your home
          </h3>
          <h2
            ref={ref}
            className="text-center lg:text-left text-white  text-[32px] lg:text-[56px] font-bold leading-[35px] lg:leading-[61.6px] w-full"
          >
            All the power that you need for your house is now available
          </h2>
        </div>
        <div className="flex flex-col gap-5 z-10">
          <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#FCD34D] rounded-full text-2xl text-[#FCD34D] font-bold flex items-center justify-center gap-8 hover:bg-[#FCD34D] hover:text-[#78350F] mt-20">
            Request a Quote
            <FaArrowRight size={18} />
          </button>
          <p className="text-center text-white  text-[16px] w-full px-8 pb-5">
            Egestas fringilla aliquam leo
          </p>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={notebookVariants}
        className="z-10"
      >
        <NotebookScreen />
      </motion.div>

      <motion.div
        className="absolute bg-[#A855F7] rounded-full w-[356px] h-[355px] lg:w-[782px] lg:h-[780px] -left-1/2 lg:left-[1200px] -bottom-[200px] lg:bottom-[420px] transform -translate-y-2/3 z-[1]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={circleVariants}
      ></motion.div>
    </section>
  );
};
export default NowAvailable;
