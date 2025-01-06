import React from "react";
import { useNavigate } from "react-router";
import useDeleteApi from "../Hooks/useDeleteApi";
import { MdLogout } from "react-icons/md";
import Style from "../Components/ComponentStyles/LogOutButton.module.css";
function LogOutButton() {
  const Navigation = useNavigate();

  const { DeleteApi } = useDeleteApi();

  const AccessToken = localStorage.getItem("AccessToken");

  const handleLogOut = async () => {
    localStorage.clear();

    if (!localStorage.getItem("AccessToken")) {
      localStorage.removeItem("CurrentPage");
    }
    window.location.reload();
  };
  return <MdLogout onClick={handleLogOut} className={Style.Icon} size={30} />;
}

export default LogOutButton;
