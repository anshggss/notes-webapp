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
    <div className="flex-grow flex flex-row gap-4 bg-neutral-900">
      <div className="flex flex-row justify-center w-1/2 m-8 p-4 rounded-lg bg-blue-500 gap-4">
        <div className="flex flex-col h-full w-4/5 gap-1 bg-neutral-700 p-3 rounded-md">
          <input
            className="outline-none text-green-900 w-full p-2 rounded-md font-mono my-1 prose-base"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
          />
          <textarea
            className="resize-none bg-blue-950 rounded-md h-full w-full text-green-400 p-2 font-mono prose-base outline-none"
            placeholder="Paste your Notes here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
          ></textarea>
        </div>
        <div className="flex top-2 left-80 w-24 h-fit rounded">
          <button
            className="w-full h-12 bg-amber-900 rounded my-1 hover:bg-red-50 transition-all duration-200 flex justify-center items-center"
            onClick={handleSave}
          >
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAj5JREFUSEuVVsFhgzAMPE1SuglM0maStpOkmYR0kmQTN7KNkZCEgVcisE86nc4miIcApPpf/pbf5N/OyzW0u7JtxV8dgapgxzddCoj2D4BN7QMIH40OQ4Hi7Qakpy1HJ62ACUnuPYrtrgCGgOVtGgx6Ee24e5xaYMInEl1zt48x25MAJ/L7UsbPVk/bHj+W6gpwjO6LsUb1MgZ/D4BzmOmda6nfAP4AGoDEVG/kHCWU43UtBgKuRWg0AUnRLhOpwDk0vRLhD0cCZjtmuzNV19IIpLkCLPu1EmJgwh0pL/4KhezzfQHA9KpCCLgvnRPiqlQT5trXCRlYS+CkUUi2OhVn4Eq1BN61mbDfheryWgBTDsmxadQQMKXSY/XsCt3QXntsgAtkT1xqnE1t+yNne1wrDYDzbqonVly7ql5YDIAB2ohFzrELfM7MelSvu3V7vFYuHSpMx/OFYI6lqrO4OjVGjJe4BRb5yrM2zLCHbzRggKVlLuO0zlQMLHc+pKtiSMJunTluEk9jyoeE8uryzz10lmx0JuKfKGTnkHh56ZiqZRKSYyC+MTsWs4QKsGcgG9baOBlgYxRREoqaWFz+HGdmW8U+JgtEXZVa4T7VZ7zaOSQC9QodKA47c7yW1FW179XWUGvE9ljN8arqIREefB5nGh2UiN7OtPFrvnM95XRszYlvG9/nPNmpWI8f3zL5VlIfZSBqMV/SeKbftGI6ziEHvkHglvI1yM561477BhIRHRqLvggcsQdT1O6iuGH/E6UgNLDSZK8AAAAASUVORK5CYII=" /> */}
            <box-icon name="clipboard"></box-icon>
          </button>
          <button
            className="bg-amber-900 w-full h-12 hover:bg-red-50 rounded m-1 transition-all duration-200 animate-cancel"
            onClick={handleDelete}
          >
            ❌{" "}
          </button>
        </div>
      </div>

      {/* PREVIOUS PASTES SECTION */}
      <div className="flex m-8 w-1/2">
        <div className="flex flex-col h-full w-1/2">
          <h1
            className="text-amber-600 font-mono p-2 prose-2xl"
            style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
          >
            Previous Pastes
          </h1>
          <div className="flex flex-col gap-4 bg-neutral-600 p-4 rounded-md">
            {pastes.length > 0 ? (
              pastes.map((paste) => <PasteCard key={paste.id} {...paste} />)
            ) : (
              <h1
                className="text-white font-mono p-2 prose-sm"
                style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
              >
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
