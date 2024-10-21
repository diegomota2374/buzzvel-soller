"use client";
import { FaRegHeart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const PhonePowerfulFeatures = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const phoneVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.5,
      },
    },
  };
  return (
    <div ref={ref} className="relative flex items-center justify-center py-5">
      {/* Purple oval behind the rectangle */}
      <div className="absolute w-[599.56px] h-[350px] md:w-[1146.54px] md:h-[750.13px] -right-[250px] md:-right-[600px] top-[80px] md:top-[30px] bg-[#FBBF24] rounded-full z-[-1] -rotate-[35grad]"></div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={phoneVariants}
      >
        {/* Phone rectangle */}
        <div className="w-[220px] h-[485.43px] md:w-[420px] md:h-[900px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-4 md:p-8">
          <div className="relative">
            <div className="relative bg-white w-full h-[128.32px] md:h-[200px] rounded-lg mt-1 overflow-hidden">
              <div className="absolute w-[60.78px] h-[60.78px] md:w-[120px] md:h-[120px] top-[85px] left-[135px] md:top-[120px] md:left-[280px] bg-[#FBBF24] rounded-full "></div>
              <div className="absolute bg-white w-[65.08px] h-[65.08px] md:w-[130px] md:h-[130px] top-[56px] right-[10px] border-4 border-[#E0F2FE] rounded-full "></div>
              <div className="absolute bg-[#BAE6FD] w-[180.63px] h-[105.6px] md:w-[300px] md:h-[200px] -top-[30px] -left-[75px] md:-left-[150px] md:-top-[90px] -rotate-45"></div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2 pt-5 md:pt-8">
            <div className="flex items-center gap-1 md:gap-4">
              <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] md:w-[90px] md:h-[19.2px] rounded-lg"></div>
              <div className="bg-[#BAE6FD] w-[69.05px] h-[10.47px] md:w-[140px] md:h-[19.2px] rounded-lg"></div>
              <FaRegHeart
                className="text-white ml-6 md:ml-8 md:w-12 md:h-12"
                size={25}
              />
            </div>
            <div className="flex gap-2 md:gap-4 md:mb-2">
              <div className="bg-white w-[60.34px] h-[7.54px] md:w-[120px] md:h-[14.4px] rounded-lg"></div>
              <div className="bg-white w-[70.4px] h-[7.54px] md:w-[140px] md:h-[14.4px] rounded-lg"></div>
            </div>
            <div className="bg-white w-[88.63px] h-[7.54px] md:w-[170px] md:h-[14.4px] rounded-lg"></div>
          </div>

          <div className="flex items-center gap-1 pt-14 md:pt-16">
            <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] md:w-[90px] md:h-[14.4px] rounded-lg"></div>
            <div className="bg-[#BAE6FD] w-[31.27px] h-[10.47px] md:w-[60px] md:h-[14.4px] rounded-lg"></div>
          </div>

          <div className="relative flex gap-3 py-7 md:py-14">
            {/* box 1 */}
            <div className="absolute bg-[#FBBF24] w-[62.54px] h-[62.54px] md:w-[120px] md:h-[120px] border-2 border-white rounded-full shadow-2xl "></div>
            {/* box 2 */}
            <div className="absolute bg-white w-[62.54px] h-[62.54px] md:w-[120px] md:h-[120px] border-2 border-[#BAE6FD] rounded-full left-[80px] md:left-[150px] shadow-2xl"></div>
            {/* box 3 */}
            <div className="absolute bg-[#BAE6FD] w-[62.54px] h-[62.54px] md:w-[120px] md:h-[120px] border-2 border-white rounded-full left-[156px] md:left-[300px] shadow-2xl"></div>
          </div>

          <div className="flex items-center justify-between py-4 relative mt-20 md:mt-60">
            <div className="absolute bg-white w-[215px] h-[3px] md:w-[415px] md:h-[6px] top-0 -left-4 md:-left-8"></div>
            <FiActivity size={30} className="text-white md:w-12 md:h-12" />
            <IoSearchOutline size={30} className="text-white md:w-12 md:h-12" />
            <IoIosMenu size={30} className="text-white md:w-12 md:h-12" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhonePowerfulFeatures;
