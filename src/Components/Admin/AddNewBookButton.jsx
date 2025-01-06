import { useContext, useState } from "react";
import usePostApi from "../../Hooks/usePostApi";
import { BooksContext } from "../../App";

function AddNewBookButton() {
  const { setAllBookListState, AllBookListState } = useContext(BooksContext);

  const handleAddBook = () => {
    let data = JSON.parse(localStorage.getItem("Products"));
    const newData = [
      ...data,
      {
        Title: "Rolinak az Ánusza",
        Description: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      },
    ];
    data.push(AllBookListState);

    localStorage.setItem("Products", JSON.stringify(newData));
    window.location.reload();
  };

  return <button onClick={handleAddBook}>Add Book</button>;
}
export default AddNewBookButton;
