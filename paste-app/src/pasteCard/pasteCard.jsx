import React from "react";

const pasteCard = (props) => {
  return (
    <div className="w-full flex justify-between items-center p-4 gap-4 bg-amber-300 rounded-md">
      <div className="font-mono overflow-hidden">
        <h1 className="prose-xl">{props.title}</h1>
        <p className="prose-sm">{props.content}</p>
      </div>
      <div className="font-mono flex gap-4">
        <button className="prose-base">Edit</button>
        <button className="prose-base">Delete</button>
      </div>
    </div>
  );
};

export default pasteCard;
