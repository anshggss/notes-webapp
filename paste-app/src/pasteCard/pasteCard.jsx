import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToPaste,
  resetAllPastes,
  removeFromPaste,
} from "../redux-slices/PASTEslice";

const pasteCard = (props) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    alert("We're working on that feature right now!!!");
  };

  const handleDelete = () => {
    dispatch(removeFromPaste({ title: props.title }));
  };
  return (
    <div className="w-full flex justify-between items-center p-4 gap-4 bg-[#F0BB78] rounded-md">
      <div
        className="font-mono overflow-hidden"
        style={{ fontFamily: "Ubuntu" }}
      >
        <h1 className="prose-xl">{props.title}</h1>
        <p className="prose-sm">{props.content}</p>
      </div>
      <div className="font-mono flex gap-4" style={{ fontFamily: "Ubuntu" }}>
        <button className="prose-base" onClick={handleEdit}>
          Edit
        </button>
        <button className="prose-base" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default pasteCard;
