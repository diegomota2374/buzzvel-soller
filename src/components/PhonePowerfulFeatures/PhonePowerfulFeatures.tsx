import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoIosMenu, IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline, IoStar } from "react-icons/io5";

const PhonePowerfulFeatures = () => {
  return (
    <div className="relative flex items-center justify-center py-5">
      {/* Purple oval behind the rectangle */}
      <div className="absolute w-[599.56px] h-[350px] -right-[250px] top-[80px] bg-[#FBBF24] rounded-full z-[1] -rotate-45"></div>

      {/* Phone rectangle */}
      <div className="w-[220px] h-[485.43px] bg-[#E0F2FE] border-4 border-white rounded-3xl shadow-lg z-[2] p-4">
        <div className="relative">
          <div className="relative bg-white w-full h-[128.32px] rounded-lg mt-1 overflow-hidden">
            <div className="absolute w-[60.78px] h-[60.78px] top-[85px] left-[135px] bg-[#FBBF24] rounded-full "></div>
            <div className="absolute bg-white w-[65.08px] h-[65.08px] top-[56px] right-[10px] border-4 border-[#E0F2FE] rounded-full "></div>
            <div className="absolute bg-[#BAE6FD] w-[180.63px] h-[105.6px] -top-[30px] -left-[75px] -rotate-45"></div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-2 pt-5">
          <div className="flex items-center gap-1">
            <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] rounded-lg"></div>
            <div className="bg-[#BAE6FD] w-[69.05px] h-[10.47px] rounded-lg"></div>
            <FaRegHeart className="text-white ml-6" size={25} />
          </div>
          <div className="flex gap-2">
            <div className="bg-white w-[60.34px] h-[7.54px] rounded-lg"></div>
            <div className="bg-white w-[70.4px] h-[7.54px] rounded-lg"></div>
          </div>
          <div className="bg-white w-[88.63px] h-[7.54px] rounded-lg"></div>
        </div>

        <div className="flex items-center gap-1 pt-14">
          <div className="bg-[#BAE6FD] w-[45.6px] h-[10.47px] rounded-lg"></div>
          <div className="bg-[#BAE6FD] w-[31.27px] h-[10.47px] rounded-lg"></div>
        </div>

        <div className="relative flex gap-3 py-7">
          {/* box 1 */}
          <div className="absolute bg-[#FBBF24] w-[62.54px] h-[62.54px] border-2 border-white rounded-full shadow-2xl "></div>
          {/* box 2 */}
          <div className="absolute bg-white w-[62.54px] h-[62.54px] border-2 border-[#BAE6FD] rounded-full left-[80px] shadow-2xl"></div>
          {/* box 3 */}
          <div className="absolute bg-[#BAE6FD] w-[62.54px] h-[62.54px] border-2 border-white rounded-full left-[156px] shadow-2xl"></div>
        </div>

        <div className="flex items-center  justify-between py-4 relative mt-20">
          <div
            className="absolute bg-white w-[215px] h-[3px]
          top-0 -left-4"
          ></div>
          <FiActivity size={30} className="text-white" />
          <IoSearchOutline size={30} className="text-white" />
          <IoIosMenu size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default PhonePowerfulFeatures;
