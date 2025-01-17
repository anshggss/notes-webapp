import React from "react";

const pasteCard = (props) => {
  return (
    <div className="flex justify-between items-center border-2 border-gray-400 p-4 m-4">
      <div className="font-mono overflow-hidden">
        <h1 className="text-xl">{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="flex gap-4">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default pasteCard;
