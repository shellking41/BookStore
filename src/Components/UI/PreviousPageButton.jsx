import { useState, useContext } from "react";
import { BooksContext } from "../../App";

function PreviousPageButton({ setCurrentPageState }) {
  let CurrentPage = localStorage.getItem("CurrentPage");

  const handlePreviousPage = () => {
    if (CurrentPage != 1) {
      CurrentPage--;
      setCurrentPageState(CurrentPage);
      localStorage.setItem("CurrentPage", CurrentPage);
    }
  };

  return <>{CurrentPage == 1 ? null : <button onClick={handlePreviousPage}>balra</button>}</>;
}

export default PreviousPageButton;
