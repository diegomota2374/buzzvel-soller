import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <section id="powerHome" className="flex flex-col-reverse">
      <div className=" p-4 my-5 ">
        <div className="flex flex-col text-center justify-center items-center gap-8">
          <h1 className="text-[40px] font-bold leading-[44px]">
            Get the Sun to Power Your Home
          </h1>
          <p className="text-[18px] font-normal leading-[28.8px] text-center">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>

          <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#581C87] rounded-full text-2xl text-[#581C87] font-bold flex items-center justify-center gap-8 hover:bg-[#6b5e75] hover:text-[#FCD34D]">
            Request a Quote
            <FaArrowRight size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-5 text-left mt-20">
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
        </div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="pl-4">
          <h2 className="text-3xl font-bold leading-[35.2px] text-left z-50">
            Soller
          </h2>
        </div>
        <div className="right-0 rounded-full">
          <Image
            src="/img/soller.jpg"
            alt="Imagem Circular"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
