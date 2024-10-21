import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomScreenDesktop from "../CustomScreenDesktop/CustomScreenDesktop";

const ScreenDesktopComponent: React.FC = () => {
  return (
    <div className="box-border flex flex-col items-center w-[368px] h-[246px] bg-white border-4 border-white shadow-lg rounded-2xl mt-14 md:w-[1520px] md:h-[854px] transition-all duration-500 ease-in-out">
      {/* Top Bar */}
      <div className="flex items-center w-full h-[41px] p-2 gap-7 md:h-[62px] md:px-10">
        {/* Circles */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full md:w-5 md:h-5"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full md:w-5 md:h-5"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full md:w-5 md:h-5"></div>
        </div>
        {/* Arrows */}
        <div className="flex flex-grow justify-end items-end gap-1">
          <div className="w-6 h-6 text-gray-400 rounded-full md:w-6 md:h-6">
            <IoIosArrowBack />
          </div>
          <div className="w-6 h-6 text-gray-500 rounded-full md:w-6 md:h-6">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      {/* Custom Screen */}
      <div className="flex-grow w-full h-full p-2 md:px-3">
        <CustomScreenDesktop />
      </div>
    </div>
  );
};

export default ScreenDesktopComponent;
