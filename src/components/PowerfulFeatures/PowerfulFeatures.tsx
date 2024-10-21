import PhonePowerfulFeatures from "../PhonePowerfulFeatures/PhonePowerfulFeatures";

const PowerfulFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-60 md:p-16 overflow-hidden">
      <div className="md:w-[1180px] md:py-36 ">
        <div className="flex flex-col items-center justify-center gap-6 pb-20">
          <div className="flex flex-col items-center gap-2 w-full h-[62px]">
            <h3 className="text-center md:text-left text-[#D97706] text-[16px] md:text-[20px] font-medium leading-[18px] w-full">
              System features
            </h3>
            <h2 className="text-center md:text-left text-[#0F172A] text-[32px] md:text-[56px] font-bold leading-[35px] md:leading-[61.6px] w-full">
              Powerful features
            </h2>
          </div>
          <p className="text-center md:text-left text-[16px] md:text-[20px] leading-[22px] md:leading-[36px] w-full px-8 md:px-0">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
          {/* Elementos com largura e altura ajustados para telas md */}
          <div className="w-[147.5px] h-[253px] md:w-[566px] md:h-[181px]">
            <h3 className="text-[20px] md:text-[24px] font-[500] leading-[22px] text-center md:text-left pt-10 pb-4">
              Erat sit
            </h3>
            <p className="text-[16px] md:text-[18px] font-[400] leading-[22px] text-center md:text-left">
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] md:w-[566px] md:h-[181px]">
            <h3 className="text-[20px] md:text-[24px] font-[500] leading-[22px] text-center md:text-left pt-10 pb-4">
              Ullamcorper arcu
            </h3>
            <p className="text-[16px] md:text-[18px] font-[400] leading-[22px] text-center md:text-left">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] md:w-[566px] md:h-[181px]">
            <h3 className="text-[20px] md:text-[24px] font-[500] leading-[22px] text-center md:text-left pt-10 pb-4">
              Et pellentesque
            </h3>
            <p className="text-[16px] md:text-[18px] font-[400] leading-[22px] text-center md:text-left">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>
          <div className="w-[147.5px] h-[253px] md:w-[566px] md:h-[181px]">
            <h3 className="text-[20px] md:text-[24px] font-[500] leading-[22px] text-center md:text-left pt-10 pb-4">
              Amet egestas
            </h3>
            <p className="text-[16px] md:text-[18px] font-[400] leading-[22px] text-center md:text-left">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </div>
      </div>

      <PhonePowerfulFeatures />
    </div>
  );
};

export default PowerfulFeatures;
