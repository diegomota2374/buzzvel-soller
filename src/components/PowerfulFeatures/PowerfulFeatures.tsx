"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhonePowerfulFeatures from "../PhonePowerfulFeatures/PhonePowerfulFeatures";

const PowerfulFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
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
  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row lg:gap-60 lg:p-16 overflow-hidden"
    >
      <motion.div
        className="lg:w-[60%] lg:py-36 "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center gap-6 pb-20">
          <div className="flex flex-col items-center gap-2 w-full h-[62px]">
            <h3 className="text-center lg:text-left text-[#D97706] text-[16px] lg:text-[20px] font-medium leading-[18px] w-full">
              System features
            </h3>
            <h2 className="text-center lg:text-left text-[#0F172A] text-[32px] lg:text-[56px] font-bold leading-[35px] lg:leading-[61.6px] w-full">
              Powerful features
            </h2>
          </div>
          <p className="text-center lg:text-left text-[16px] lg:text-[20px] leading-[22px] lg:leading-[36px] w-full px-8 lg:px-0">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-4 justify-items-center items-center"
          variants={itemVariants}
        >
          {/* Elementos com largura e altura ajustados para telas md */}
          <div className="w-[147.5px] h-[253px] lg:w-[95%] lg:h-[181px]">
            <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
              Erat sit
            </h3>
            <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] lg:w-[95%] lg:h-[181px]">
            <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
              Ullamcorper arcu
            </h3>
            <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] lg:w-[95%] lg:h-[181px]">
            <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
              Et pellentesque
            </h3>
            <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] lg:w-[95%] lg:h-[181px]">
            <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
              Amet egestas
            </h3>
            <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <PhonePowerfulFeatures />
    </div>
  );
};

export default PowerfulFeatures;
