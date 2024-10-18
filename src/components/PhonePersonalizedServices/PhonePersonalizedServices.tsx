import { FaArrowLeft } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoIosMenu, IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline, IoStar } from "react-icons/io5";

const PhonePersonalizedServices = () => {
  return (
    <div className="relative flex items-center justify-center py-10">
      {/* Purple oval behind the rectangle */}
      <div className="absolute w-[599.56px] h-[350px] -left-[250px] top-[90px] bg-[#581C87] rounded-full z-[1] -rotate-45"></div>

      {/* Phone rectangle */}
      <div className="w-[220px] h-[485.43px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-6">
        <div className="flex items-center justify-start gap-6 py-8 ">
          <FaArrowLeft size={20} className="text-white" />
          <div className="bg-[#BAE6FD] w-[82.97px] h-[10.06px] rounded-lg"></div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex gap-2">
            <div className="bg-white w-[60.34px] h-[7.54px] rounded-lg"></div>
            <div className="bg-white w-[70.4px] h-[7.54px] rounded-lg"></div>
          </div>
          <div className="bg-white w-[88.63px] h-[7.54px] rounded-lg"></div>
        </div>
        <div className="relative flex gap-3 py-7">
          {/* box 1 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] border-2 border-[#38BDF8] rounded-2xl shadow-2xl ">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute w-[34.09px] h-[34.3px] top-2 left-[25px] border-2 border-[#BAE6FD] rounded-full "></div>
              <div className="absolute w-[93.91px] h-[94.46px] top-[46.1px] -left-12 bg-[#FBBF24] rounded-full "></div>
            </div>
          </div>
          {/* box 2 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] border-2 border-[#38BDF8] rounded-2xl left-[85px] shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute w-[17.03px] h-[16.85px] left-11 top-4 bg-[#FBBF24] rounded-full "></div>
              <div className="absolute w-[34.67px] h-[34.3px] bottom-[15px] left-4 bg-[#BAE6FD] rounded-full "></div>
            </div>
          </div>
          {/* box 3 */}
          <div className="absolute bg-white w-[75.43px] h-[103.09px] border-2 border-[#38BDF8] rounded-2xl left-[170px] shadow-2xl">
            <div className="relative w-full h-full  rounded-2xl overflow-hidden">
              <div className="absolute w-[34.09px] h-[34.3px] top-5 left-8 border-2 border-[#BAE6FD] rounded-full z-1"></div>
              <IoStar size={42} className="absolute text-white top-6 left-1 " />
              <IoIosStarOutline
                size={50}
                className="absolute text-[#FBBF24] top-5 "
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-[98.06px] h-[7.54px] rounded-lg mt-28"></div>
        </div>
        <div className="relative">
          <div className="relative bg-white w-full h-[90px] rounded-t-lg mt-5 overflow-hidden">
            <div className="absolute w-[102.46px] h-[102.46px] top-[-27.66px] left-[-8.8px] border-4 border-[#E0F2FE] rounded-full "></div>
            <div className="absolute w-[24.51px] h-[24.51px] top-[28.91px] left-[105.63px] bg-[#FBBF24] rounded-full "></div>
            <div className="absolute bg-[#BAE6FD] w-[110.63px] h-[105.6px] top-[40px] -right-[70px] rotate-45"></div>
          </div>
          <div className="absolute bg-white w-[215px] h-[3px] -left-6"></div>
        </div>
        <div className="flex items-center  justify-between py-5">
          <FiActivity size={30} className="text-white" />
          <IoSearchOutline size={30} className="text-white" />
          <IoIosMenu size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default PhonePersonalizedServices;
