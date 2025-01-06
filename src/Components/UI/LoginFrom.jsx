import { useState } from "react";
import { useNavigate } from "react-router";
import Style from "../ComponentStyles/LoginPanel.module.css";

function LoginFrom({ handleNavigation, handleSubmit, HandleChangeInput, setPassword, setEmail }) {
  return (
    <form onSubmit={handleSubmit} className={Style.panelForm}>
      <div>
        <p htmlFor="Email">Email&nbsp;</p>
      </div>

      <input id="Email" type="email" placeholder="Email" onChange={(e) => HandleChangeInput(e, setEmail)}></input>
      <div>
        <p htmlFor="password">Password&nbsp;</p>
      </div>
      <input id="password" type="password" placeholder="Password" onChange={(e) => HandleChangeInput(e, setPassword)}></input>
      <button type="submit">Submit</button>
      <div className={Style.signUpContainer}>
        <p>Don't Have An Account?</p>
        <p onClick={() => handleNavigation("/register")}>Sign Up Now</p>
      </div>
    </form>
  );
}

export default LoginFrom;
