import { FaArrowLeft } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoIosMenu, IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline, IoStar } from "react-icons/io5";

const PhonePersonalizedServices = () => {
  return (
    <div className="relative flex items-center justify-center py-10">
      {/* Purple oval behind the rectangle */}
      <div className="absolute w-[599.56px] h-[350px] md:w-[1146.54px] md:h-[750.13px] -left-[250px] md:-left-[600px] top-[90px] md:top-[100px] bg-[#581C87] rounded-full z-[1] -rotate-[35grad]"></div>

      {/* Phone rectangle */}
      <div className="w-[220px] h-[485.43px] md:w-[420px] md:h-[900px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-6 md:p-16">
        <div className="flex items-center justify-start gap-6 py-8 md:py-16">
          <FaArrowLeft size={20} className="text-white md:w-10 md:h-10" />
          <div className="bg-[#BAE6FD] w-[82.97px] h-[10.06px] md:w-[158.4px] md:h-[19.2px] rounded-lg"></div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex gap-2">
            <div className="bg-white w-[60.34px] h-[7.54px] md:w-[115.2px] md:h-[14.4px] rounded-lg"></div>
            <div className="bg-white w-[70.4px] h-[7.54px] md:w-[134.4px] md:h-[14.4px] rounded-lg"></div>
          </div>
          <div className="bg-white w-[88.63px] h-[7.54px] md:w-[169.2px] md:h-[14.4px] rounded-lg"></div>
        </div>
        <div className="relative flex gap-3 py-7 md:py-12">
          {/* box 1 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] md:w-[144px] md:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute w-[34.09px] h-[34.3px] md:w-[65px] md:h-[65px] top-2 md:top-4 left-[25px] md:left-[50px] border-2 border-[#BAE6FD] rounded-full"></div>
              <div className="absolute w-[93.91px] h-[94.46px] md:w-[180px] md:h-[180px] top-[46.1px] md:top-[90px] -left-12 md:-left-20 bg-[#FBBF24] rounded-full"></div>
            </div>
          </div>

          {/* box 2 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] md:w-[144px] md:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl left-[85px] md:left-[160px] shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute w-[17.03px] h-[16.85px] md:w-[35px] md:h-[35px] left-11 md:left-[80px] top-4 md:top-[40px] bg-[#FBBF24] rounded-full"></div>
              <div className="absolute w-[34.67px] h-[34.3px] md:w-[65px] md:h-[65px] bottom-[15px] left-4 md:left-[20px] bg-[#BAE6FD] rounded-full"></div>
            </div>
          </div>

          {/* box 3 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] md:w-[144px] md:h-[196.8px] border-2 border-[#38BDF8] rounded-2xl left-[170px] md:left-[320px] shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute w-[34.09px] h-[34.3px] md:w-[65px] md:h-[65px] top-5 md:top-[50px] left-8 md:left-[60px] border-2 border-[#BAE6FD] rounded-full z-1"></div>
              <IoStar
                size={42}
                className="absolute text-white md:w-20 md:h-20 top-6 md:top-[50px] left-1 md:left-[2px] "
              />
              <IoIosStarOutline
                size={50}
                className="absolute md:w-20 md:h-20 text-[#FBBF24] top-5 md:top-[50px]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white w-[98.06px] h-[7.54px] md:w-[180px] md:h-[14px] rounded-lg mt-12 md:mt-52"></div>
        </div>
        <div className="relative">
          <div className="relative bg-white w-full h-[90px] md:h-[150px] rounded-t-lg mt-5 md:mt-16 overflow-hidden">
            <div className="absolute w-[102.46px] h-[102.46px] md:w-[180px] md:h-[180px] top-[-27.66px] md:top-[-50px] left-[-8.8px] md:left-[-20px] border-4 md:border-8 border-[#E0F2FE] rounded-full"></div>
            <div className="absolute w-[24.51px] h-[24.51px] md:w-[45px] md:h-[45px] top-[28.91px] md:top-[50px] left-[105.63px] md:left-[160px] bg-[#FBBF24] rounded-full"></div>
            <div className="absolute bg-[#BAE6FD] w-[110.63px] h-[105.6px] md:w-[200px] md:h-[190px] top-[40px] md:top-[70px] -right-[70px] md:-right-[130px] rotate-45"></div>
          </div>
          <div className="absolute bg-white w-[215px] md:w-[415px] h-[3px] md:h-[6px] -left-6 md:-left-16"></div>
        </div>
        <div className="flex items-center justify-between py-5">
          <FiActivity size={30} className="text-white md:w-10 md:h-10" />
          <IoSearchOutline size={30} className="text-white md:w-10 md:h-10" />
          <IoIosMenu size={30} className="text-white md:w-10 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default PhonePersonalizedServices;
