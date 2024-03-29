import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import TodoIcon from "../assets/todo.png"
import Calendar from "../components/Calender";
import Example from "./Dropdown";
import Example1 from "./ProfileDropdown";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon ">
        <BsJustify className="icon " onClick={OpenSidebar} />
      </div>
      <div className="content-start  flex content mt-7 ml-3">
        <Example />
        
      </div>

      <div className="flex gap-2 justify-center items-center p-3">
        <div className="flex gap-5">
          <BsSearch className="icon mt-2" />

          <BsFillBellFill className="icon mt-2" />
          <a href="/todo">
            <img className="h-[15px] mt-[9px]" src={TodoIcon}/>
          </a>
          
          <Example1 />
        </div>
      </div>
    </header>
  );
}

export default Header;