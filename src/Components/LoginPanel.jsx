import { useState } from "react";

import { useNavigate } from "react-router-dom";
import usePostApi from "../Hooks/usePostApi";
import LoginFrom from "./UI/LoginFrom";
import useJWTdecode from "../Hooks/useJWTdecode";

import Style from "../Components/ComponentStyles/LoginPanel.module.css";

function LoginPanel() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { FetchData } = usePostApi();
  const { JWTdecode } = useJWTdecode();

  const HandleChangeInput = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Response = await FetchData("http://bookstoreapiazure.azurewebsites.net/api/Auth/Login", { Email: email, Password: password }, "JSON", false);

      localStorage.setItem("AccessToken", Response.accessToken);
      localStorage.setItem("accessExpirationDate", Response.accessExpirationDate);
      localStorage.setItem("RefreshToken", Response.refreshToken);
      localStorage.setItem("refreshExpirationDate", Response.refreshExpirationDate);

      localStorage.setItem("Role", JWTdecode());
      if (Response.accessToken) {
        window.location.reload();
      }
    } catch (error) {
      console.log("Login not valid");
    }
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
