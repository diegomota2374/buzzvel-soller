import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import CustomScreenDesktop from "../CustomScreenDesktop/CustomScreenDesktop";

const ScreenDesktopComponent: React.FC = () => {
  return (
    <div className="box-border flex flex-col items-center w-[358px] h-[246px] bg-white border-4 border-white shadow-lg rounded-2xl mt-14">
      {/* Top Bar */}
      <div className="flex items-center w-full h-[41px] p-2 gap-7">
        {/* Circles */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        {/* Arrows */}
        <div className="flex flex-grow justify-end items-center gap-1">
          <div className="w-6 h-6 text-gray-400 rounded-full">
            <IoIosArrowBack />
          </div>
          <div className="w-6 h-6 text-gray-500 rounded-full">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <CustomScreenDesktop />
    </div>
  );
};

export default ScreenDesktopComponent;
