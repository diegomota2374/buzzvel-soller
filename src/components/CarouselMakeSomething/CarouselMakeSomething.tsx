"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/src/mocks/data";
import Image from "next/image";

const CarouselMakeSomething = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = slides.length;

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => {
        let newSlide = prev;

        if (direction === -1) {
          newSlide = (prev + 1) % totalSlides; // Próximo slide (circular)
        } else if (direction === 1) {
          newSlide = (prev - 1 + totalSlides) % totalSlides; // Slide anterior (circular)
        }

        return newSlide;
      });
      setIsAnimating(false);
    }, 500); // O tempo deve ser igual à duração da animação

    return () => clearTimeout(timeout);
  }, [isAnimating, direction, totalSlides]);

  const variants = {
    enter: (dir: number) => ({
      x: dir === -1 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir === -1 ? -300 : 300,
      opacity: 0,
    }),
  };

  const displaySlides = [];
  for (let i = 1; i <= 4; i++) {
    displaySlides.push(slides[(currentSlide + i) % totalSlides]);
  }

  return (
    <div
      id="controls-carousel"
      className="relative w-full flex flex-col items-end lg:items-start lg:justify-start lg:pl-24 overflow-hidden"
    >
      {/* Carousel wrapper */}
      <div className="relative h-[359px] lg:h-[490px] lg:w-[100vw] overflow-hidden rounded-lg my-7 lg:my-16 flex">
        {/* Slide Principal */}
        <div className="w-[343px] h-[359px] lg:w-[60%] lg:h-[490px] mb-10 relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={direction} // Passa a direção como parâmetro
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="w-[364px] h-full bg-white flex flex-col items-start justify-end rounded-lg shadow-lg p-10"
            >
              <p className="text-left text-[16px] lg:text-[18px] mb-8 lg:mb-12">
                {slides[currentSlide].text}
              </p>
              {/* Bloco de imagem e informações do usuário */}
              <div className="flex items-center">
                {/* Imagem do Avatar */}
                <div className="w-[50px] h-[50px] lg:w-[64px] lg:h-[64px] rounded-full overflow-hidden">
                  <Image
                    src={slides[currentSlide].user.avatar}
                    alt={`${slides[currentSlide].user.name} Avatar`}
                    width={50}
                    height={50}
                    className="object-cover w-full h-full "
                  />
                </div>

                {/* Texto ao lado da imagem */}
                <div className="ml-3 text-left">
                  <h2 className="text-[16px] font-normal leading-[22.4px]">
                    {slides[currentSlide].user.name}
                  </h2>
                  <p className="text-[16px] text-[#475569]">
                    {slides[currentSlide].user.site}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slides menores em lista horizontal à direita */}
        <div className="hidden w-full lg:flex items-center pl-5">
          <div className="relative w-full overflow-hidden">
            <motion.div className="flex space-x-4">
              {displaySlides.map((slide, index) => (
                <div
                  key={index}
                  className={`cursor-pointer w-[364px] h-[442px] flex-shrink-0 rounded-lg shadow-lg p-5 
                    flex flex-col justify-end bg-white ${
                      slides.indexOf(slide) === currentSlide
                        ? "border border-[#FCD34D]"
                        : ""
                    }`}
                >
                  <p className="text-left text-[14px] lg:text-[18px] mb-4 lg:mb-12">
                    {slide.text}
                  </p>
                  <div className="flex items-center">
                    {/* Imagem menor */}
                    <div className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full overflow-hidden">
                      <Image
                        src={slide.user.avatar}
                        alt={`${slide.user.name} Avatar`}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Texto ao lado da imagem */}
                    <div className="ml-3">
                      <h3 className="text-[14px] font-normal">
                        {slide.user.name}
                      </h3>
                      <p className="text-[12px] text-[#475569]">
                        {slide.user.site}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Adiciona um espaço adicional ao último slide da lista */}
              <div className="w-[100px] flex-shrink-0" />{" "}
              {/* Espaço extra para ficar fora da tela */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="flex justify-center lg:justify-start w-full">
        <div className="flex justify-center lg:justify-start space-x-4 py-10 ">
          {/* Previous Button */}
          <motion.button
            type="button"
            className="flex items-center justify-center w-12 h-12 border border-[#FCD34D] rounded-full focus:outline-none  transition-all duration-300"
            onClick={prevSlide}
            whileTap={{ scale: 0.6 }}
            transition={{ duration: 0.2 }}
            data-carousel-prev
          >
            <FaArrowLeft className="text-[#FCD34D]" />
            <span className="sr-only">Previous</span>
          </motion.button>

          {/* Next button */}
          <motion.button
            type="button"
            className="flex items-center justify-center w-12 h-12 border border-[#FCD34D] rounded-full focus:outline-none transition-all duration-300"
            onClick={nextSlide}
            whileTap={{ scale: 0.6 }}
            transition={{ duration: 0.2 }}
            data-carousel-next
          >
            <FaArrowRight className="text-[#FCD34D]" />
            <span className="sr-only">Next</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarouselMakeSomething;
