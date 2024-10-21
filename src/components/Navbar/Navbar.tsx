import { FaArrowRight } from "react-icons/fa";
import { MdOutlineHeadphones } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 mx-5 lg:p-10 lg:mx-10 z-50">
      <div className="flex items-center gap-10">
        <h2 className="text-3xl font-bold leading-[35.2px] z-50">soller</h2>

        <div className="hidden lg:flex gap-10">
          <p>Products</p>
          <p>Solutions</p>
          <p>Services</p>
          <p>Configure</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-5 z-50">
        <MdOutlineHeadphones className="text-[#0369A1]" />
        <span className="text-[#0369A1]">555 818 282</span>
        <button className="w-[306px] h-[64px] py-2 px-3 border-2 border-[#581C87] hover:border-[#581C87] rounded-full text-2xl text-[#581C87] font-bold flex items-center justify-center gap-8 hover:bg-[#581C87] hover:text-[#FCD34D]">
          Request a Quote
          <FaArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
