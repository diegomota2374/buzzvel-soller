"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhonePersonalizedServices from "../PhonePersonalizedServices/PhonePersonalizedServices";

const PersonalizedServices = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
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
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <section ref={ref} className="overflow-hidden ">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-64 lg:p-10">
        <PhonePersonalizedServices />

        <motion.div
          className="lg:w-[1180px] lg:py-36 "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center justify-center  gap-6 pb-20">
            <div className="flex flex-col items-center gap-2 w-full h-[62px]">
              <h3 className="text-center lg:text-left text-[#D97706] text-[16px] lg:text-[20px] font-medium leading-[18px] w-full">
                Services
              </h3>
              <h2 className="text-center  lg:text-left text-[#0F172A] text-[32px] lg:text-[56px] font-bold leading-[35px] lg:leading-[61.6px] w-full">
                Personalized services
              </h2>
            </div>
            <p className="text-center lg:text-left text-[#0F172A] text-[16px] lg:text-[20px] leading-[22px] lg:leading-[36px] w-full px-8 lg:px-0">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4 justify-items-center  items-center lg:justify-items-start"
            variants={itemVariants}
          >
            <div
              className="w-[147.5px] h-[253px] md:w-[167.5px] md:h-[273px] lg:w-[95.38%]
lg:h-[15.47%]
 "
            >
              <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
                Et mauris
              </h3>
              <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
                Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique.
              </p>
            </div>
            <div
              className="w-[147.5px] h-[253px] md:w-[167.5px] md:h-[273px] lg:w-[95.38%]
lg:h-[15.47%]
 "
            >
              <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
                Eget sit
              </h3>

              <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div
              className="w-[147.5px] h-[253px] md:w-[167.5px] md:h-[273px] lg:w-[95.38%]
lg:h-[15.47%]
"
            >
              <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
                Imperdiet pellentesque
              </h3>
              <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
                Platea arcu dapibus non magna cursus lectus id sollicitudin.
                Enim viverra parturient tristique nulla.
              </p>
            </div>
            <div
              className="w-[147.5px] h-[253px] md:w-[167.5px] md:h-[273px] lg:w-[95.38%]
lg:h-[15.47%]
"
            >
              <h3 className="text-[20px] lg:text-[24px] font-[500] leading-[22px] text-center lg:text-left pt-10 pb-4">
                Non libero
              </h3>
              <p className="text-[16px] lg:text-[18px] font-[400] leading-[22px] text-center lg:text-left">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                purus ut sed eros, consectetur viverra.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default PersonalizedServices;
