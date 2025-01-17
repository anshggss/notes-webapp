import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPaste, resetAllPastes } from "../redux-slices/PASTEslice";
import PasteCard from "../pasteCard/pasteCard";

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
    <div className="flex flex-row gap-4 h-full bg-gray-500">
      <div className="flex flex-row justify-center w-1/2 h-full m-8 p-2 rounded bg-slate-600">
        <div className="flex flex-col h-full w-4/5">
          <input
            className="w-full h-12 p-2 rounded font-mono my-1"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="resize-none bg-gray-800 rounded h-80 w-full text-white p-2 font-mono"
            placeholder="Paste your Notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex top-2 left-80 w-24 rounded mx-2">
          <button
            className="w-full h-12 bg-slate-400 rounded my-1 p-2"
            onClick={handleSave}
          >
            📋
          </button>
          <button
            className="bg-neutral-700 h-12 hover:bg-slate-300 rounded m-1 p-2 transition-all duration-200"
            onClick={handleDelete}
          >
            ❌{" "}
          </button>
        </div>
      </div>

      {/* PREVIOUS PASTES SECTION */}
      <div className="flex w-1/2 h-full">
        <div className="flex flex-col my-6 h-full ml-8 w-1/2">
          <h1 className="text-white font-mono p-2">Previous Pastes</h1>
          {pastes.length > 0 ? (
            pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
          ) : (
            <h1 className="text-white font-mono p-2">No Pastes to show</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default homePage;
