"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verifica o tamanho da janela ao carregar
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      id="powerHome"
      ref={ref}
      className="relative flex flex-col-reverse md:flex-row pb-10"
    >
      <motion.div
        className="p-4 my-5 md:w-[920px] md:px-20 md:py-0 md:my-0 pt-60 md:pt-0"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col text-center justify-center items-center md:items-start md:w-[600px] gap-8">
          <h1 className="text-[40px] md:text-[70px] font-bold leading-[44px] md:leading-[79.2px] md:text-left ">
            Get the Sun to Power Your Home
          </h1>
          <p className="text-[18px] md:text-[24px] font-normal leading-[28.8px] text-center md:text-left">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>

          <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#581C87] hover:border-[#581C87] rounded-full text-2xl text-[#581C87] font-bold flex items-center justify-center gap-8 hover:bg-[#581C87] hover:text-[#FCD34D]">
            Request a Quote
            <FaArrowRight size={18} />
          </button>
        </div>

        <motion.div
          className="flex flex-col gap-5 text-left mt-20 md:w-[600px] "
          variants={itemVariants}
        >
          <p className="text-[18px] font-normal leading-[28.8px]">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="flex items-center justify-start w-full ">
            {/* Imagem do usuário como avatar */}
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/5cb0/be39/b2c74b3ecb21ab1072178c96b4d1002f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XigZci51x6iwu4i3YpiQtfBTJqajDEX5CrSz3Swwyp7xhsL4yTm4TD6CK3-qX~MEepRgWYBq5jREcEqjf~W9WeqEJfyVThLfSUS4Aluqv5wx5jymxBA-HadLq9cBkHoEg7Gj-rvfhJCeQluQzZkgPULJeuIujcWus8JxWNlxsCPE4LgE5Sb~YIGZmO4qGsjk4j5RegF8R4-wXPyCq9jS414qZb7llVZEIeme0ln5bg20pcouZ6~va1avAX6rOS6nU5UP7kX6rGmPCKLLO-Dp6IOgfN3T8WPX42kPqlhmqWNfHBKFhbAN~mbYQyPOGT3N1vPHADB18NB5cASMrEyFHw__"
                alt="User Avatar"
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Texto ao lado da imagem */}
            <div className="ml-4 text-left">
              <h2 className="text-[18px] font-normal leading-[28.8px]">
                Rwanda Melfor
              </h2>
              <p className="text-[16px] text-[#475569]">zerowste.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className=" absolute bg-[#BAE6FD]  w-[350px] h-[350px] md:w-[850px] md:h-[700px] right-0 -top-24 md:-top-40 z-0"></div>
      <div className=" absolute  w-[350px] h-[350px] md:w-[850px] md:h-[800px] right-0 -top-24 md:-top-40 z-20 overflow-hidden">
        <motion.div
          className="absolute will-change-auto shadow-[0_0_0_1250px] shadow-white rounded-full -right-20 -top-10 md:-right-20 md:-top-28 -z-50 -rotate-[55grad] md:rotate-[55grad]"
          initial={{ width: 0, height: 0 }}
          animate={{
            width: inView ? (isMobile ? 350 : 700) : 0,
            height: inView ? (isMobile ? 300 : 800) : 0,
          }}
          exit={{ width: 0, height: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute  right-0 md:right-0 -top-14 md:-top-20 rounded-full z-10">
        <Image
          src="/img/soller.png"
          alt="Imagem Circular"
          width={1357}
          height={904}
          className="object-contain w-[300px] h-[300px] md:w-[800px] md:h-[800px]"
        />
      </div>
    </section>
  );
};

export default HeaderComponent;
