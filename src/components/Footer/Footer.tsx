import LogoSoller from "../LogoSoller/LogoSoller";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between max-h-[198px] gap-5 p-5 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
        <div className="flex items-center justify-center gap-2">
          <LogoSoller />
          <h2 className="text-[24px] font-bold ">Soller</h2>
        </div>
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-5">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Support</p>
      </div>
    </div>
  );
};
export default Footer;
