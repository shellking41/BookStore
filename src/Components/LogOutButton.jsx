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
    try {
      await DeleteApi("http://bookstoreapiazure.azurewebsites.net/api/Auth/Revoke", AccessToken);

      localStorage.clear();

      if (!localStorage.getItem("AccessToken")) {
        localStorage.removeItem("CurrentPage");
      }
      window.location.reload();
      // Navigation("/", { replace: true });
    } catch (error) {
      console.log("nem jo");
    }
  };
  return <MdLogout onClick={handleLogOut} className={Style.Icon} size={30} />;
}

export default LogOutButton;
