import { useContext, useEffect, useState } from "react";

import AllBookList from "../../Components/AllBookList";

import LogOutButton from "../../Components/LogOutButton";

import DeleteBookButton from "../../Components/Admin/DeleteBookButton";
import AddNewBookButton from "../../Components/Admin/AddNewBookButton";
import { BooksContext } from "../../App";
import LoginPanel from "../../Components/LoginPanel";

import Style from "./MainPage.module.css";
import NavBar from "../../Components/UI/NavBar/NavBar";
import PreviewBar from "../../Components/UI/PreviewBar/PreviewBar";

function MainPage() {
  const AccessToken = localStorage.getItem("AccessToken");

  if (!AccessToken) {
    return (
      <>
        <LoginPanel />
        <NavBar />

        <PreviewBar />
      </>
    );
  }
  if (localStorage.getItem("Password") == "admin" && localStorage.getItem("Email") == "admin@admin") {
    return (
      <>
        <NavBar />

        <PreviewBar />
        <AddNewBookButton />
        <AllBookList />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <PreviewBar />

      <AllBookList />
    </>
  );
}

export default MainPage;
