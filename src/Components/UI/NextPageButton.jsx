import { useState, useContext } from "react";
import { BooksContext } from "../../App";

function NextPageButton({ setCurrentPageState }) {
  const { AllBookListState, setAllBookListState } = useContext(BooksContext);
  let CurrentPage = localStorage.getItem("CurrentPage");

  const handleNextPage = () => {
    CurrentPage++;
    setCurrentPageState(CurrentPage);
    localStorage.setItem("CurrentPage", CurrentPage);
  };
  return <>{!(AllBookListState.totalPages <= CurrentPage) ? <button onClick={handleNextPage}>jobbra</button> : null}</>;
}

export default NextPageButton;
