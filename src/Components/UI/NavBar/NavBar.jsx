import React from "react";
import NavElement from "./NavElement";
import Style from "../../ComponentStyles/NavBar.module.css";
function NavBar() {
  return (
    <div className={Style.NavBar}>
      <img src="./src/assets/Logo3.png" alt="Logo" width={300} />
      <div className={Style.FlexBox}>
        <NavElement text="LogOut" />
        <NavElement text="UserInfo" />
      </div>
    </div>
  );
}

export default NavBar;
