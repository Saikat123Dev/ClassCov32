import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

import Calendar from "../components/Calender";
import Example from "./Dropdown";

function Header({ OpenSidebar }) {
  return (
    <header className="header flex ">
      
      <div className="menu-icon content-end ">
        <BsJustify className="icon " onClick={OpenSidebar} />
      </div>

     
       
        <div className="flex gap-5 justify-end">
          <BsSearch className="icon mt-2" />

          <BsFillBellFill className="icon mt-2" />
          <BsFillEnvelopeFill className="icon mt-2" />
          <Example />
        </div>
   
     
    </header>
  );
}

export default Header;