import CustomScreenDesktop from "../CustomScreenDesktop/CustomScreenDesktop";

const NotebookScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16 z-10">
      <div className="bg-black w-[289.81px] h-[190.8px] rounded-t-xl flex items-center justify-center">
        <div className="w-full h-full p-3">
          <div className="relative w-full h-full aspect-[16/9]">
            <CustomScreenDesktop fromNotebookScreen={true} />
          </div>
        </div>
      </div>
      <div className="bg-[#94A3B8] w-[358px] h-[2.12px]"></div>
      {/* Trapézio invertido */}
      <div
        className="relative"
        style={{
          width: "358px",
          height: "4.24px",
          borderTop: "4.24px solid #475569",
          borderLeft: "45px solid transparent",
          borderRight: "45px solid transparent",
        }}
      ></div>
    </div>
  );
};

export default NotebookScreen;
