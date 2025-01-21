import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <div
      className="fixed flex justify-end bg-[#fff]  w-full items-center h-auto shadow-sm"
      onScroll={{}}
    >
      <NavLink
        to="/"
        className="flex hover:text-[#fff] h-full p-4 items-center justify-center hover:bg-[#000] transition-all duration-200 prose-xl text-[#181C14]"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className="font-mono flex hover:text-[#fff] h-full p-4 justify-center items-center hover:bg-[#000] transition-all duration-200 prose-xl text-[#181C14]"
        style={{ fontFamily: "Ubuntu", letterSpacing: "1px" }}
      >
        Notes
      </NavLink>
    </div>
  );
};

export default navBar;
