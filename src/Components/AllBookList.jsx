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
  const { AllBookListState, setAllBookListState } = useContext(BooksContext);
  const { GetApi } = useGetApi();

  const [CurrentPageState, setCurrentPageState] = useState(localStorage.getItem("CurrentPage"));
  const [UpdateRequired, setUpdateRequired] = useState({ WantToUpdate: false, id: 0 });

  if (!CurrentPageState) {
    localStorage.setItem("CurrentPage", 1);
  }

  useEffect(() => {
    try {
      const AllBooks = async () => {
        setAllBookListState(await GetApi(`http://bookstoreapiazure.azurewebsites.net/api/Book/All?page=${CurrentPageState}&pageSize=${2}`));
      };
      AllBooks();
    } catch (error) {
      new Error("Something went Wrong");
    }
  }, [CurrentPageState]);

  useEffect(() => {
    console.log(AllBookListState);
  }, [AllBookListState]);

  if (!(AllBookListState && AllBookListState.pageNumber == CurrentPageState)) {
    return <p>Wait</p>;
  }

  if (localStorage.getItem("Role") === "Admin") {
    return (
      <>
        <div className={Style.allBookList}>
          {AllBookListState.items.map((item) => {
            return (
              <div key={uuidv4()}>
                <p>{item.title}</p>
                <BookProperties item={item} />
                <RentBookButton id={item.id} />
                <img src={item.description} alt="" />
                <DeleteBookButton id={item.id} />
                <UpdateBookButton id={item.id} setUpdateRequired={setUpdateRequired} />
                {UpdateRequired.WantToUpdate && UpdateRequired.id === item.id && <UpdateBookForm id={item.id} setUpdateRequired={setUpdateRequired} />}
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
        {AllBookListState.items.map((item) => {
          return (
            <div key={uuidv4()}>
              <p>{item.title}</p>
              <BookProperties item={item} />
              <RentBookButton id={item.id} />
              <img src={item.description} alt="" />
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
