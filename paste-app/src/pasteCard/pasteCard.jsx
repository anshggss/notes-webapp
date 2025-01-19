import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToPaste,
  resetAllPastes,
  removeFromPaste,
} from "../redux-slices/PASTEslice";
import { NavLink } from "react-router-dom";

const pasteCard = (props) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    window.location.href = `/notes-webapp/pastes/${props.id}`;
  };

  const handleDelete = () => {
    dispatch(removeFromPaste({ title: props.title }));
  };
  return (
    <div className="w-full flex justify-between items-center p-4 gap-4 bg-[#3b3a38] rounded-md">
      <div
        className="font-mono text-white overflow-hidden"
        style={{ fontFamily: "Ubuntu" }}
      >
        <h1 className="prose-xl">{props.title}</h1>
        <p className="prose-sm">{props.content}</p>
      </div>
      <div className="font-mono flex gap-4" style={{ fontFamily: "Ubuntu" }}>
        <NavLink
          className={
            "prose-base text-white hover:text-orange-600 transition-all duration-200"
          }
          to={`/pastes/${props.id}`}
        >
          Edit
        </NavLink>
        <button
          className="prose-base text-white hover:text-[#ec3131] transition-all duration-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default pasteCard;
