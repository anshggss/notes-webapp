import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPaste, resetAllPastes } from "../redux-slices/PASTEslice";
import PasteCard from "../pasteCard/pasteCard";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "boxicons";

const homePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste.pastes);

  const handleSave = () => {
    /* Check if title or content is empty */
    if (title.length === 0 || content.length === 0) {
      console.log("Title or Content is empty");
    } else {
      dispatch(addToPaste({ title, content }));
      setTitle("");
      setContent("");
    }
  };

  const handleDelete = () => {
    dispatch(resetAllPastes());
  };

  return (
    <div className="flex-grow flex flex-col h-auto gap-2 bg-[#3C3D37] items-center">
      <div className="w-1/2 p-5 m-4 rounded-md bg-[#131010]">
        <div className="flex flex-row justify-center h-[575px] p-4 rounded-lg gap-4">
          <div className="flex flex-col w-4/5 gap-1 bg-[#543A14] p-3 rounded-md">
            <input
              className="outline-none text-black w-full p-2 rounded-md font-mono my-1 prose-base"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            />
            <textarea
              className="resize-none bg-[#F0BB78] rounded-md w-full text-black p-2 font-mono prose-base outline-none pretty-scroll overflow-auto h-full"
              placeholder="Paste your Notes here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            ></textarea>
          </div>
          <div className="flex top-2 left-80 w-24 h-fit rounded">
            <button
              className="w-full h-12 bg-[#ECDFCC] rounded my-1 hover:bg-red-800 transition-all duration-200 flex justify-center items-center"
              onClick={handleSave}
            >
              <box-icon name="clipboard"></box-icon>
            </button>
            <button
              className="bg-[#ECDFCC] w-full h-12 hover:bg-red-800 rounded m-1 transition-all duration-200 animate-cancel flex justify-center items-center text-xl"
              onClick={handleDelete}
            >
              <box-icon name="x"></box-icon>
            </button>
          </div>
        </div>

        {/* PREVIOUS PASTES SECTION */}
        <div className="flex m-8 w-1/2">
          <div className="flex flex-col w-full h-full w-1/2">
            <h1
              className="text-[#FFF6B3] font-mono p-2 prose-2xl"
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            >
              Previous Pastes
            </h1>
            <div className="flex flex-col w-full gap-4 bg-[#543A14] p-4 rounded-md">
              {pastes.length > 0 ? (
                pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
              ) : (
                <h1
                  className="text-[#ECDFCC] font-mono p-2 prose-sm"
                  style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
                >
                  No Pastes to show
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
