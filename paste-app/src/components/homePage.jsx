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
    <div className="flex flex-row gap-4 h-full bg-neutral-900">
      <div className="flex flex-row justify-center w-1/2 h-full m-8 p-8 rounded-lg bg-green-600 gap-4">
        <div className="flex flex-col h-full w-4/5 gap-1">
          <input
            className="w-full h-12 p-2 rounded-md font-mono my-1 prose-base"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="resize-none bg-green-950 rounded-md h-80 w-full text-white p-2 font-mono prose-base"
            placeholder="Paste your Notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex top-2 left-80 w-24 h-fit rounded">
          <button
            className="w-full h-12 bg-amber-900 rounded my-1 hover:bg-red-50 transition-all duration-200"
            onClick={handleSave}
          >
            📋
          </button>
          <button
            className="bg-amber-900 w-full h-12 hover:bg-red-50 rounded m-1 transition-all duration-200"
            onClick={handleDelete}
          >
            ❌{" "}
          </button>
        </div>
      </div>

      {/* PREVIOUS PASTES SECTION */}
      <div className="flex m-8 w-1/2 h-full">
        <div className="flex flex-col h-full w-1/2">
          <h1 className="text-amber-600 font-mono p-2 prose-2xl">
            Previous Pastes
          </h1>
          <div className="flex flex-col gap-4">
            {pastes.length > 0 ? (
              pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
            ) : (
              <h1 className="text-white font-mono p-2 prose-sm">
                No Pastes to show
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
