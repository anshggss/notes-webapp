import React, { useEffect, useState } from "react";
import { updateToPaste, returnPaste } from "../redux-slices/PASTEslice";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const viewPaste = (props) => {
  const pastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();
  const [title, setTitle] = useState(pastes[id].title);
  const [content, setContent] = useState(pastes[id].content);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (pastes[id].title === title && pastes[id].content === content) {
      toast(
        "Are you fucking stupid? Make a change to update or go to homepage."
      );
      return;
    }
    dispatch(updateToPaste({ title, content, id }));
    toast("Paste Updated!!!");
  };

  return (
    <div className="flex-grow flex flex-col h-auto gap-2 bg-[#3C3D37] items-center">
      <div className="flex flex-row w-full justify-center h-[575px] p-4 rounded-lg gap-4">
        <div className="flex flex-col w-1/2 gap-1 bg-[#543A14] p-3 rounded-md">
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
        <div className="flex top-2 left-80 w-28 h-fit rounded">
          <button
            className="w-full h-12 bg-[#ECDFCC] rounded my-1 hover:bg-red-800 transition-all duration-200 flex justify-center items-center"
            onClick={handleUpdate}
          >
            Update Paste
          </button>
        </div>
      </div>
    </div>
  );
};

export default viewPaste;
