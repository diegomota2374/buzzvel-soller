"use client";
import { FaArrowLeft } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoIosMenu, IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline, IoStar } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const PhonePersonalizedServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const phoneVariants = {
    hidden: { opacity: 0, x: -100 },
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
    <div ref={ref} className="relative flex items-center justify-center py-10">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={phoneVariants}
      >
        {/* Phone rectangle */}
        <div className="w-[220px] h-[485.43px] lg:w-[420px] lg:h-[900px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-6 lg:p-16">
          <div className="flex items-center justify-start gap-6 py-8 lg:py-16">
            <FaArrowLeft size={20} className="text-white lg:w-10 lg:h-10" />
            <div className="bg-[#BAE6FD] w-[82.97px] h-[10.06px] lg:w-[158.4px] lg:h-[19.2px] rounded-lg"></div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex gap-2">
              <div className="bg-white w-[60.34px] h-[7.54px] lg:w-[115.2px] lg:h-[14.4px] rounded-lg"></div>
              <div className="bg-white w-[70.4px] h-[7.54px] lg:w-[134.4px] lg:h-[14.4px] rounded-lg"></div>
            </div>
            <div className="bg-white w-[88.63px] h-[7.54px] lg:w-[169.2px] lg:h-[14.4px] rounded-lg"></div>
          </div>
          <div className="relative flex gap-3 py-7 lg:py-12">
            {/* box 1 */}
            <div className="absolute bg-white w-[75.43px] h-[103.09px] lg:w-[144px] lg:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute w-[34.09px] h-[34.3px] lg:w-[65px] lg:h-[65px] top-2 lg:top-4 left-[25px] lg:left-[50px] border-2 border-[#BAE6FD] rounded-full"></div>
                <div className="absolute w-[93.91px] h-[94.46px] lg:w-[180px] lg:h-[180px] top-[46.1px] lg:top-[90px] -left-12 lg:-left-20 bg-[#FBBF24] rounded-full"></div>
              </div>
            </div>

            {/* box 2 */}
            <div className="absolute bg-white w-[75.43px] h-[103.09px] lg:w-[144px] lg:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl left-[85px] lg:left-[160px] shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute w-[17.03px] h-[16.85px] lg:w-[35px] lg:h-[35px] left-11 lg:left-[80px] top-4 lg:top-[40px] bg-[#FBBF24] rounded-full"></div>
                <div className="absolute w-[34.67px] h-[34.3px] lg:w-[65px] lg:h-[65px] bottom-[15px] left-4 lg:left-[20px] bg-[#BAE6FD] rounded-full"></div>
              </div>
            </div>

            {/* box 3 */}
            <div className="absolute bg-white w-[75.43px] h-[103.09px] lg:w-[144px] lg:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl left-[170px] lg:left-[320px] shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute w-[34.09px] h-[34.3px] lg:w-[65px] lg:h-[65px] top-5 lg:top-[50px] left-8 lg:left-[60px] border-2 border-[#BAE6FD] rounded-full z-1"></div>
                <IoStar
                  size={42}
                  className="absolute text-white lg:w-20 lg:h-20 top-6 lg:top-[50px] left-1 lg:left-[2px] "
                />
                <IoIosStarOutline
                  size={50}
                  className="absolute lg:w-20 lg:h-20 text-[#FBBF24] top-5 lg:top-[50px]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white w-[98.06px] h-[7.54px] lg:w-[180px] lg:h-[14px] rounded-lg mt-12 lg:mt-52"></div>
          </div>
          <div className="relative">
            <div className="relative bg-white w-full h-[90px] lg:h-[150px] rounded-t-lg mt-5 lg:mt-16 overflow-hidden">
              <div className="absolute w-[102.46px] h-[102.46px] lg:w-[180px] lg:h-[180px] top-[-27.66px] lg:top-[-50px] left-[-8.8px] lg:left-[-20px] border-4 lg:border-8 border-[#E0F2FE] rounded-full"></div>
              <div className="absolute w-[24.51px] h-[24.51px] lg:w-[45px] lg:h-[45px] top-[28.91px] lg:top-[50px] left-[105.63px] lg:left-[160px] bg-[#FBBF24] rounded-full"></div>
              <div className="absolute bg-[#BAE6FD] w-[110.63px] h-[105.6px] lg:w-[200px] lg:h-[190px] top-[40px] lg:top-[70px] -right-[70px] lg:-right-[130px] rotate-45"></div>
            </div>
            <div className="absolute bg-white w-[215px] lg:w-[415px] h-[3px] lg:h-[6px] -left-6 lg:-left-16"></div>
          </div>
          <div className="flex items-center justify-between py-5">
            <FiActivity size={30} className="text-white lg:w-10 lg:h-10" />
            <IoSearchOutline size={30} className="text-white lg:w-10 lg:h-10" />
            <IoIosMenu size={30} className="text-white lg:w-10 lg:h-10" />
          </div>
        </div>
      </motion.div>
      {/* Purple oval behind the rectangle */}
      <div className="absolute w-[599.56px] h-[350px] lg:w-[1146.54px] lg:h-[750.13px] -left-[250px] lg:-left-[600px] top-[90px] lg:top-[100px] bg-[#581C87] rounded-full z-[-1] -rotate-[35grad]"></div>
    </div>
  );
};

export default PhonePersonalizedServices;
