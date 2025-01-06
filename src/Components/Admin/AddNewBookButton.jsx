import { useState } from "react";
import usePostApi from "../../Hooks/usePostApi";

function AddNewBookButton() {
  const [AddedBook, setAddedBook] = useState();

  const { FetchData } = usePostApi();

  const handleAddBook = async () => {
    try {
      setAddedBook(
        await FetchData(
          "http://bookstoreapiazure.azurewebsites.net/api/Book/AddBook",
          { Title: "Rolinak az Ánusza", Description: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", Pages: 5 },
          "TEXT",
          true
        )
      );
    } catch (error) {
      console.log("nem jo");
    }
  };
  return <button onClick={handleAddBook}>Add Book</button>;
}

export default AddNewBookButton;
