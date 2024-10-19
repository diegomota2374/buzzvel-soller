import { FaArrowRight } from "react-icons/fa";
import NotebookScreen from "../NotebookScreen/NotebookScreen";

const NowAvailable = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#581C87] py-10">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="flex flex-col items-center gap-2 w-full h-[62px]">
          <h3 className="text-center text-[#FCD34D] text-[16px] font-medium leading-[18px] w-full">
            Get the Sun to power your home
          </h3>
          <h2 className="text-center text-white  text-[32px] font-bold leading-[35px] w-full">
            All the power that you need for your house is now available
          </h2>
        </div>
        <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#FCD34D] rounded-full text-2xl text-[#FCD34D] font-bold flex items-center justify-center gap-8 hover:bg-[#FCD34D] hover:text-[#78350F] mt-20">
          Request a Quote
          <FaArrowRight size={18} />
        </button>
        <p className="text-center text-white  text-[16px] w-full px-8 pb-5">
          Egestas fringilla aliquam leo
        </p>
      </div>
      <NotebookScreen />
      <div className="absolute bg-[#A855F7] rounded-full w-[356px] h-[355px] -left-1/2 -bottom-2/3  transform -translate-y-2/3 z-2"></div>
    </div>
  );
};
export default NowAvailable;
