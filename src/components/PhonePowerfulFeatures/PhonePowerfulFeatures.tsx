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
      <div className="absolute w-[599.56px] h-[350px] lg:w-[1146.54px] lg:h-[750.13px] -right-[250px] lg:-right-[600px] top-[80px] lg:top-[30px] bg-[#FBBF24] rounded-full z-[-1] -rotate-[35grad]"></div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={phoneVariants}
      >
        {/* Phone rectangle */}
        <div className="w-[220px] h-[485.43px] lg:w-[420px] lg:h-[900px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-4 lg:p-8">
          <div className="relative">
            <div className="relative bg-white w-full h-[128.32px] lg:h-[200px] rounded-lg mt-1 overflow-hidden">
              <div className="absolute w-[60.78px] h-[60.78px] lg:w-[120px] lg:h-[120px] top-[85px] left-[135px] lg:top-[120px] lg:left-[280px] bg-[#FBBF24] rounded-full "></div>
              <div className="absolute bg-white w-[65.08px] h-[65.08px] lg:w-[130px] lg:h-[130px] top-[56px] right-[10px] border-4 border-[#E0F2FE] rounded-full "></div>
              <div className="absolute bg-[#BAE6FD] w-[180.63px] h-[105.6px] lg:w-[300px] lg:h-[200px] -top-[30px] -left-[75px] lg:-left-[150px] lg:-top-[90px] -rotate-45"></div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2 pt-5 lg:pt-8">
            <div className="flex items-center gap-1 lg:gap-4">
              <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] lg:w-[90px] lg:h-[19.2px] rounded-lg"></div>
              <div className="bg-[#BAE6FD] w-[69.05px] h-[10.47px] lg:w-[140px] lg:h-[19.2px] rounded-lg"></div>
              <FaRegHeart
                className="text-white ml-6 lg:ml-8 lg:w-12 lg:h-12"
                size={25}
              />
            </div>
            <div className="flex gap-2 lg:gap-4 lg:mb-2">
              <div className="bg-white w-[60.34px] h-[7.54px] lg:w-[120px] lg:h-[14.4px] rounded-lg"></div>
              <div className="bg-white w-[70.4px] h-[7.54px] lg:w-[140px] lg:h-[14.4px] rounded-lg"></div>
            </div>
            <div className="bg-white w-[88.63px] h-[7.54px] lg:w-[170px] lg:h-[14.4px] rounded-lg"></div>
          </div>

          <div className="flex items-center gap-1 pt-14 lg:pt-16">
            <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] lg:w-[90px] lg:h-[14.4px] rounded-lg"></div>
            <div className="bg-[#BAE6FD] w-[31.27px] h-[10.47px] lg:w-[60px] lg:h-[14.4px] rounded-lg"></div>
          </div>

          <div className="relative flex gap-3 py-7 lg:py-14">
            {/* box 1 */}
            <div className="absolute bg-[#FBBF24] w-[62.54px] h-[62.54px] lg:w-[120px] lg:h-[120px] border-2 border-white rounded-full shadow-2xl "></div>
            {/* box 2 */}
            <div className="absolute bg-white w-[62.54px] h-[62.54px] lg:w-[120px] lg:h-[120px] border-2 border-[#BAE6FD] rounded-full left-[80px] lg:left-[150px] shadow-2xl"></div>
            {/* box 3 */}
            <div className="absolute bg-[#BAE6FD] w-[62.54px] h-[62.54px] lg:w-[120px] lg:h-[120px] border-2 border-white rounded-full left-[156px] lg:left-[300px] shadow-2xl"></div>
          </div>

          <div className="flex items-center justify-between py-4 relative mt-20 lg:mt-60">
            <div className="absolute bg-white w-[215px] h-[3px] lg:w-[415px] lg:h-[6px] top-0 -left-4 lg:-left-8"></div>
            <FiActivity size={30} className="text-white lg:w-12 lg:h-12" />
            <IoSearchOutline size={30} className="text-white lg:w-12 lg:h-12" />
            <IoIosMenu size={30} className="text-white lg:w-12 lg:h-12" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhonePowerfulFeatures;
