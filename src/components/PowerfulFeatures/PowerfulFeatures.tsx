import PhonePowerfulFeatures from "../PhonePowerfulFeatures/PhonePowerfulFeatures";

const PowerfulFeatures = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="flex flex-col items-center justify-center  gap-6 pb-20">
        <div className="flex flex-col items-center gap-2 w-full h-[62px]">
          <h3 className="text-center text-[#D97706] text-[16px] font-medium leading-[18px] w-full">
            System features
          </h3>
          <h2 className="text-center  text-[32px] font-bold leading-[35px] w-full">
            Powerful features{" "}
          </h2>
        </div>
        <p className="text-center  text-[16px] leading-[22px] w-full px-8">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Erat sit
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Id quis lectus pharetra, ultricies integer montes, amet, gravida
            consectetur. Nunc convallis fringilla nisl magna sagittis.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Ullamcorper arcu
          </h3>

          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
            auctor habitant duis dictum.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Et pellentesque
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Mi vitae, massa eu molestie massa euismod volutpat condimentum.
            Blandit molestie ullamcorper hendrerit purus lorem vulputate.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Amet egestas
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
            velit et, ullamcorper malesuada amet, felis.
          </p>
        </div>
      </div>
      <PhonePowerfulFeatures />
    </div>
  );
};
export default PowerfulFeatures;
