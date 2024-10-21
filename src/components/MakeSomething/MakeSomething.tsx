"use client";
import { FaArrowRight } from "react-icons/fa";
import CarouselMakeSomething from "../CarouselMakeSomething/CarouselMakeSomething";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MakeSomething = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const carouselVariants = {
    hidden: { opacity: 0, x: 400 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };
  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center overflow-hidden bg-[#581C87] py-10"
    >
      <div className="flex flex-col justify-center items-center md:items-start md:w-full md:flex-row md:justify-between md:px-40 md:py-20">
        <div className="flex flex-col items-center justify-center gap-14 md:w-[814px]">
          <div className="flex flex-col items-center gap-2 w-full h-[62px]">
            <h3 className="text-center md:text-left text-[#FCD34D] text-[16px] md:text-[20px] font-medium leading-[18px] w-full">
              Join other Sun harvesters
            </h3>
            <h2 className="text-center md:text-left text-white  text-[32px] md:text-[56px] font-bold leading-[35px] w-full">
              Make something awesome
            </h2>
          </div>
          <p className="text-center md:text-left text-white  text-[16px] md:text-[20px] leading-[22px] w-full px-8 md:px-0">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#FCD34D] rounded-full text-2xl text-[#FCD34D] font-bold flex items-center justify-center gap-8 hover:bg-[#FCD34D] hover:text-[#78350F] my-5">
          Request a Quote
          <FaArrowRight size={18} />
        </button>
      </div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={carouselVariants}
      >
        <CarouselMakeSomething />
      </motion.div>
    </section>
  );
};
export default MakeSomething;
