import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToPaste, resetAllPastes } from "../redux-slices/PASTEslice";
import PasteCard from "../pasteCard/pasteCard";
import "simplebar-react/dist/simplebar.min.css";
import "boxicons";
import toast, { Toaster } from "react-hot-toast";

const homePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste.pastes);

  const handleSave = () => {
    /* Check if title or content is empty */
    if (title.length === 0) {
      toast("Title is Empty!", {
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Ubuntu",
        },
      });
    } else if (content.length === 0) {
      toast("Content is Empty!", {
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Ubuntu",
        },
      });
    } else {
      dispatch(addToPaste({ title, content }));
      setTitle("");
      setContent("");
      toast("Paste Added! Scroll Down to View Pastes.", {
        style: {
          backgroundColor: "green",
          color: "white",
          fontFamily: "Ubuntu",
        },
      });
    }
  };

  const handleDelete = () => {
    if (pastes.length == 0) {
      toast("No Pastes to Delete", {
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Ubuntu",
        },
      });
      return;
    }
    dispatch(resetAllPastes());
    toast("All Pastes Cleared!!!", {
      style: {
        backgroundColor: "orange",
        color: "white",
        fontFamily: "Ubuntu",
      },
    });
  };

  return (
    <div className="[@media(max-width:700px)]:px-4 flex-grow flex flex-col  gap-2 bg-[#fff] items-center shadow-inner ">
      <div className="w-1/2 [@media(max-width:700px)]:w-full p-5 m-4 rounded-lg bg-[#131010]">
        <div className="flex flex-row justify-between h-[575px] rounded-lg gap-4">
          <div className="flex flex-col w-4/5 gap-1 bg-[#242322] p-3 rounded-md">
            <input
              className="outline-none text-black w-full p-2 rounded-lg font-mono my-1 prose-base"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            />
            <textarea
              className="resize-none bg-[#3b3a38] rounded-lg w-full text-white p-2 font-mono prose-base outline-none pretty-scroll overflow-auto h-full"
              placeholder="Paste your Notes here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            ></textarea>
          </div>
          <div className="flex top-2 left-80 w-24 h-fit rounded">
            <button
              className="w-full h-12 bg-[#e7e3de] rounded-lg my-1 hover:bg-[#89bf26] transition-all duration-200 flex justify-center items-center"
              onClick={handleSave}
            >
              <box-icon name="clipboard"></box-icon>
            </button>
            <button
              className="bg-[#e7e3de] w-full h-12 hover:bg-[#ec3131] rounded-lg m-1 transition-all duration-200 animate-cancel flex justify-center items-center text-xl"
              onClick={handleDelete}
            >
              <box-icon className="" name="x"></box-icon>
            </button>
          </div>
        </div>

        {/* PREVIOUS PASTES SECTION */}
        <div className="flex w-full">
          <div className="flex flex-col w-full h-full">
            <h1
              className="text-[#fff] font-mono p-2 prose-2xl"
              style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
            >
              Previous Pastes
            </h1>
            <div className="flex flex-col w-full gap-4 bg-[#242322] p-4 rounded-lg">
              {pastes.length > 0 ? (
                pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
              ) : (
                <h1
                  className="text-[#fff] font-mono p-2 prose-sm"
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
