"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/src/mocks/data";
import Image from "next/image";

const CarouselMakeSomething = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction === 1 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction === 1 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div id="controls-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-[359px] overflow-hidden rounded-lg my-10 flex justify-end">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-[359px] h-[359px] bg-white flex
            flex-col items-start justify-end rounded-lg shadow-lg p-10"
          >
            <p className="text-left text-[16px] mb-8">
              {slides[currentSlide].text}
            </p>
            {/* Bloco de imagem e informações do usuário */}
            <div className="flex items-center">
              {/* Imagem do Avatar */}
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src={slides[currentSlide].user.avatar}
                  alt={`${slides[currentSlide].user.name} Avatar`}
                  width={50}
                  height={50}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Texto ao lado da imagem */}
              <div className="ml-3 text-left">
                <h2 className="text-[16px] font-normal leading-[22.4px]">
                  {slides[currentSlide].user.name}
                </h2>
                <p className="text-[14px] text-[#475569]">
                  {slides[currentSlide].user.site}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider controls */}
      <div className="flex justify-center pt-2 space-x-4">
        {/* Previous Button */}
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 border border-[#FCD34D] rounded-full focus:outline-none"
          onClick={prevSlide}
          data-carousel-prev
        >
          <FaArrowLeft className="text-[#FCD34D]" />
          <span className="sr-only">Previous</span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 border border-[#FCD34D] rounded-full focus:outline-none"
          onClick={nextSlide}
          data-carousel-next
        >
          <FaArrowRight className="text-[#FCD34D]" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselMakeSomething;
