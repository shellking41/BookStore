import React from "react";

import { FaUser } from "react-icons/fa";
import LogOutButton from "../../LogOutButton";
import Style from "../../ComponentStyles/NavBar.module.css";
function NavElement({ text }) {
  return (
    <>
      {text === "LogOut" ? (
        <div>
          <LogOutButton className={Style.Icon} />
        </div>
      ) : (
        <FaUser size={30} className={Style.Icon} />
      )}
    </>
  );
}

export default NavElement;
