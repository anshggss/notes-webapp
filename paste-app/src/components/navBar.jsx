import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <div className="flex justify-end bg-[#3C3D37]  w-full items-center h-auto border-[#697565] border-solid border-2 ">
      <NavLink
        to="/"
        className="flex hover:text-purple-900 h-full p-4 items-center justify-center hover:bg-slate-100 transition-all duration-200 prose-xl text-[#181C14]"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className="font-mono flex hover:text-purple-950 h-full p-4 justify-center items-center hover:bg-slate-100 transition-all duration-200 prose-xl text-[#181C14]"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default navBar;
