import React from "react";
import useDeleteApi from "../../Hooks/useDeleteApi";

function DeleteBookButton({ id }) {
  const { DeleteApi } = useDeleteApi();
  const handleDeleteBook = async () => {
    await DeleteApi(`http://bookstoreapiazure.azurewebsites.net/api/Book/DeleteBook/${id}`, localStorage.getItem("AccessToken"));
  };

  return <button onClick={handleDeleteBook}>Delete Book</button>;
}

export default DeleteBookButton;
