import React from "react";
import PasteCard from "./pasteCard/pasteCard";
import { useSelector } from "react-redux";

const pastesPage = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  return (
    <div
      className="flex justify-center text-black py-[10px] pt-[65px]"
      style={{ fontFamily: "Ubuntu" }}
    >
      <div className="flex bg-black w-1/2 m-5 p-4 rounded-lg">
        <div className="flex flex-col px-2 w-full h-full ">
          <h1
            className="text-[#fff] font-mono p-2 prose-2xl"
            style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
          >
            Previous Notes
          </h1>
          <div className="flex flex-col w-full gap-4 bg-[#242322] p-4 rounded-lg">
            {pastes.length > 0 ? (
              pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
            ) : (
              <h1
                className="text-[#fff] font-mono p-2 prose-sm"
                style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
              >
                No notes to show
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default pastesPage;
