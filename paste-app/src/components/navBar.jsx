import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <div className="flex justify-end bg-neutral-900  w-full items-center h-auto border-gray-400 border-solid border-2 rounded-md">
      <NavLink
        to="/"
        className="flex hover:text-purple-900 h-full p-4 items-center justify-center hover:bg-slate-100 transition-all duration-200 prose-2xl text-purple-200"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className="font-mono flex hover:text-purple-950 h-full p-4 justify-center items-center hover:bg-slate-100 transition-all duration-200 prose-2xl text-purple-200"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default navBar;
