import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <div className="flex justify-end bg-gray-500  w-full items-center h-16 border-gray-400 border-solid border-2">
      <NavLink
        to="/"
        className="flex hover:text-blue-500 h-full p-4 items-center justify-center hover:bg-gray-300 transition-all duration-200"
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className="flex hover:text-blue-500 h-full p-4 justify-center items-center hover:bg-slate-100 transition-all duration-200"
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default navBar;
