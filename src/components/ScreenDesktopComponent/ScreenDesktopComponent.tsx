import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

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

      <div className="flex w-full h-full">
        {/* left colum */}
        <div
          className="flex flex-col items-center justify-start bg-[#BFDBFE] w-16 pt-5
        px-1 gap-2 rounded-bl-xl "
        >
          <div className="bg-[#93C5FD] w-[45.57px] h-[6.56px] rounded-lg"></div>
          <div className="flex w-full items-center justify-start gap-1">
            {/* Círculo com borda visível */}
            <div className=" w-[9.59px] h-[9.59px]  border-2 border-[#93C5FD] rounded-full"></div>
            <div className=" w-[33.58px] h-[3.28px] bg-white rounded-lg"></div>
          </div>
          <div className="flex w-full items-center justify-start gap-1">
            {/* Quadrado com borda visível */}
            <div className=" w-[9.59px] h-[9.59px] border-2 border-[#60A5FA]"></div>
            <div className=" w-[24.29px] h-[3.28px] bg-white rounded-lg"></div>
          </div>
          <div className="flex w-full items-center justify-start gap-1">
            {/* Quadrado com borda visível */}
            <div className=" w-[0px] h-[0px]  border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-[#93C5FD]"></div>
            <div className=" w-[29.38px] h-[3.28px] bg-white rounded-lg"></div>
          </div>
        </div>
        {/* right colum */}
        <div className="flex w-full h-full bg-sky-100  rounded-br-xl pt-5 px-5 ">
          <div className="flex flex-col w-28 gap-2">
            <div className="bg-[#BFDBFE] w-[39.58px] h-[4.37px] rounded-lg"></div>
            {/* Rectangles Container */}
            <div className="flex flex-col w-full mt-4 gap-1">
              <div className="flex justify-between w-full h-[4.37px] gap-1">
                <div className="bg-white w-[28.78px] h-[4.37px] rounded-lg"></div>

                <div className="bg-white flex-grow h-[4.37px] rounded-lg"></div>
              </div>

              <div className="bg-white w-[65.66px] h-[4.37px] rounded-lg"></div>
            </div>

            <div className="flex flex-col gap-1 mt-6">
              <div className="flex items-center gap-1 pb-4">
                <div className="bg-[#BFDBFE] w-[20.99px] h-[4.37px] rounded-lg"></div>
                <div className="bg-[#BFDBFE] w-[31.78px] h-[4.37px] rounded-lg"></div>
                <FaRegHeart
                  className="text-white"
                  style={{
                    width: "11.69px",
                    height: "9.84px",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div className="flex w-full h-[4.37px] gap-1">
                <div className="bg-white w-[28.78px] h-[4.37px] rounded-lg"></div>
                <div className="bg-white w-[33.58px] h-[4.37px] rounded-lg"></div>
              </div>
              <div className="bg-white w-[42.28px] h-[4.37px] rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-grow gap-2 pl-2">
            <div className="flex flex-col gap-2">
              {/* box 1 */}
              <div className="relative bg-white w-[59.97px] h-[74.89px] rounded-lg overflow-hidden">
                <div
                  className="absolute w-[74.66px] h-[68.63px] bg-[#FBBF24] rounded-full"
                  style={{
                    top: "40.64px",
                    left: "-34.71px",
                    gap: "0px",
                  }}
                ></div>
                <div
                  className="absolute border-2 border-[#BFDBFE] w-[28.69px] h-[28.69px]"
                  style={{
                    top: "17.14%",
                    left: "61.36%",
                    transform: "rotate(42.35deg)",
                  }}
                ></div>
              </div>
              {/* box 2 */}
              <div className="relative bg-white w-[59.97px] h-[83.64px] rounded-lg overflow-hidden">
                <div className="absolute w-[66.86px] h-[60.95px] top-[36.08px] left-[22.79px] rounded-full border-[4px] border-[#F59E0B]"></div>
                <div className="absolute w-[20.69px] h-[18.71px] top-[15.58px] left-[10.79px] bg-[#BFDBFE] rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {/* box 3 */}
              <div className="relative bg-white w-[59.97px] h-[55.21px] rounded-lg overflow-hidden">
                <div className="absolute w-[27.57px] h-[24.93px] top-[18.97px] left-[13.19px] border-2 border-[#BFDBFE] rounded-full "></div>
                <div
                  className="absolute w-0 h-0 border-l-[7.33px] border-l-transparent border-r-[7.33px] border-r-transparent border-b-[12.69px] border-b-[#FBBF24]"
                  style={{
                    left: "52.46%",
                    right: "11.09%",
                    top: "31.73%",
                    bottom: "18.27%",
                    transform: "rotate(-137.65deg)",
                  }}
                ></div>
              </div>
              {/* box 4 */}
              <div className="relative bg-white w-[59.97px] h-[93.48px] rounded-lg overflow-hidden">
                <div className="absolute rounded-full bg-[#BFDBFE] w-[35.38px] h-[32.53px] left-[14.39px] top-[16.67px]"></div>
                <div className="absolute border-2 border-[#BFDBFE] rounded-full w-[26.39px] h-[24.33px] left-[47.37px] top-[55.21px]"></div>
                {/* Frame for stars */}
                <div
                  className="absolute w-[93.48px] h-[24.93px]"
                  style={{
                    left: "12.5%",
                    right: "-6.5%",
                    top: "68.71%",
                    bottom: "24.27%",
                  }}
                >
                  {/* Star 1 */}
                  <FaStar
                    className="absolute text-[#FBBF24]"
                    style={{
                      left: "0%",
                      top: "0%",
                      width: "7px",
                      height: "7px",
                    }}
                  />

                  {/* Star 2 */}
                  <FaStar
                    className="absolute text-[#FBBF24]"
                    style={{
                      left: "14%",
                      top: "0%",
                      width: "7px",
                      height: "7px",
                    }}
                  />

                  {/* Star 3 */}
                  <FaStar
                    className="absolute text-[#FBBF24]"
                    style={{
                      left: "28%",
                      top: "0%",
                      width: "7px",
                      height: "7px",
                    }}
                  />

                  {/* Star 4 */}
                  <FaStar
                    className="absolute text-[#FBBF24]"
                    style={{
                      left: "40%",
                      top: "0%",
                      width: "7px",
                      height: "7px",
                    }}
                  />

                  {/* Star 5 (metade cortada) */}
                  <FaStar
                    className="absolute text-[#FBBF24]"
                    style={{
                      left: "52%",
                      top: "0%",
                      width: "7px",
                      height: "7px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDesktopComponent;
