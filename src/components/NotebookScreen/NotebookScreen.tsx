import CustomScreenDesktop from "../CustomScreenDesktop/CustomScreenDesktop";

const NotebookScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16 z-10">
      {/* Tela do notebook */}
      <div className="bg-black w-[289.81px] h-[190.8px] lg:w-[806px] lg:h-[527px] rounded-t-xl flex items-center justify-center">
        <div className="w-full h-full p-3">
          <div className="relative w-full h-full aspect-[16/9]">
            <CustomScreenDesktop fromNotebookScreen={true} />
          </div>
        </div>
      </div>

      {/* Barra abaixo da tela */}
      <div className="bg-[#94A3B8] w-[358px] h-[2.12px] lg:w-[1008px] lg:h-[6px]"></div>

      {/* Trapézio invertido abaixo da barra */}
      <div
        className="relative w-[358px] h-[4.24px] lg:w-[1008px] lg:h-[12px]"
        style={{
          borderTop: "4.24px solid #475569",
          borderLeft: "45px solid transparent",
          borderRight: "45px solid transparent",
        }}
      ></div>
    </div>
  );
};

export default NotebookScreen;
