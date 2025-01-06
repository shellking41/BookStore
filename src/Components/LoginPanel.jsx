import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import usePostApi from "../Hooks/usePostApi";
import LoginFrom from "./UI/LoginFrom";
import useJWTdecode from "../Hooks/useJWTdecode";

import Style from "../Components/ComponentStyles/LoginPanel.module.css";

import { BooksContext } from "../App";

function LoginPanel() {
  const Navigate = useNavigate();

  const { setEmail, setPassword, password, email } = useContext(BooksContext);

  const HandleChangeInput = (e, setState) => {
    const value = e.target.value;

    setState(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("AccessToken", true); //not safe

    localStorage.setItem("RefreshToken", true); //not safe
    localStorage.setItem("Password", password); //not safe
    localStorage.setItem("Email", email); //not safe
    window.location.reload();
  };

  const handleNavigation = (nav) => {
    Navigate(nav, { replace: true });
  };

  return (
    <div className={Style.center}>
      <div className={Style.PanelContainer}>
        <h1>Login</h1>
        <LoginFrom handleNavigation={handleNavigation} handleSubmit={handleSubmit} HandleChangeInput={HandleChangeInput} setPassword={setPassword} setEmail={setEmail} />
      </div>
    </div>
  );
}

export default LoginPanel;
