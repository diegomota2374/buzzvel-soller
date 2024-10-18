import PhonePersonalizedServices from "../PhonePersonalizedServices/PhonePersonalizedServices";

const PersonalizedServices = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center  gap-6 pb-20">
        <div className="flex flex-col items-center gap-2 w-full h-[62px]">
          <h3 className="text-center text-[#D97706] text-[16px] font-medium leading-[18px] w-full">
            Services
          </h3>
          <h2 className="text-center text-[#0F172A] text-[32px] font-bold leading-[35px] w-full">
            Personalized services
          </h2>
        </div>
        <p className="text-center text-[#0F172A] text-[16px] leading-[22px] w-full px-8">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Et mauris
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Posuere quis sed mauris non curabitur pretium elementum eget.
            Feugiat sed maecenas eu accumsan tristique.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Eget sit
          </h3>

          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Imperdiet pellentesque
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
            viverra parturient tristique nulla.
          </p>
        </div>
        <div className="w-[147.5px] h-[253px] ">
          <h3 className="text-[20px] font-[500] leading-[22px] text-center pt-10 pb-4">
            Non libero
          </h3>
          <p className="text-[16px] font-[400] leading-[22px] text-center">
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
            ut sed eros, consectetur viverra.
          </p>
        </div>
      </div>
      <PhonePersonalizedServices />
    </div>
  );
};
export default PersonalizedServices;
