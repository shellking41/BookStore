import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../App";
import useGetApi from "../Hooks/useGetApi";
import { v4 as uuidv4 } from "uuid";
import BookProperties from "./UI/BookPropertiesButton";
import PreviousPageButton from "./UI/PreviousPageButton";
import NextPageButton from "./UI/NextPageButton";
import DeleteBookButton from "./Admin/DeleteBookButton";
import UpdateBookButton from "./Admin/UpdateBookButton";
import UpdateBookForm from "./Admin/UpdateBookForm";
import RentBookButton from "./UI/RentBookButton";

import Style from "../Pages/MainPage/MainPage.module.css";

function AllBookList() {
  const [AllBookListState, setAllBookListState] = useState(JSON.parse(localStorage.getItem("Products")));

  const [CurrentPageState, setCurrentPageState] = useState(localStorage.getItem("CurrentPage"));
  const [UpdateRequired, setUpdateRequired] = useState({ WantToUpdate: false, id: 0 });

  if (!localStorage.getItem("Products")) {
    localStorage.setItem("Products", JSON.stringify([]));
    setAllBookListState(JSON.parse(localStorage.getItem("Products")));
  }

  if (!CurrentPageState) {
    localStorage.setItem("CurrentPage", 1);
  }

  useEffect(() => {
    console.log(AllBookListState);
  }, [AllBookListState]);

  if (!AllBookListState) {
    return <p>Wait</p>;
  }

  if (localStorage.getItem("Password") == "admin" && localStorage.getItem("Email") == "admin@admin") {
    return (
      <>
        <div className={Style.allBookList}>
          {AllBookListState.map((item, index) => {
            return (
              <div key={uuidv4()}>
                <p>{item.Title}</p>
                <BookProperties item={item} />
                <RentBookButton id={index} />
                <img src={item.Description} alt="" />
                <DeleteBookButton id={index} />
                <UpdateBookButton id={index} setUpdateRequired={setUpdateRequired} />
                {UpdateRequired.WantToUpdate && UpdateRequired.id === index && <UpdateBookForm id={index} setUpdateRequired={setUpdateRequired} />}
              </div>
            );
          })}
        </div>
        <div>
          <PreviousPageButton setCurrentPageState={setCurrentPageState} />

          <NextPageButton setCurrentPageState={setCurrentPageState} />
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        {AllBookListState.map((item, index) => {
          return (
            <div key={uuidv4()}>
              <p>{item.Title}</p>
              <BookProperties item={item} />
              <RentBookButton id={index} />
              <img src={item.Description} alt="" />
            </div>
          );
        })}
      </div>
      <div>
        <PreviousPageButton setCurrentPageState={setCurrentPageState} />

        <NextPageButton setCurrentPageState={setCurrentPageState} />
      </div>
    </>
  );
}

export default AllBookList;
