import React from "react";
import useDeleteApi from "../../Hooks/useDeleteApi";

function DeleteBookButton({ id }) {
  const handleDeleteBook = () => {
    let data = JSON.parse(localStorage.getItem("Products"));
    data.splice(id, 1);
    localStorage.setItem("Products", JSON.stringify(data));
    window.location.reload();
  };

  return <button onClick={handleDeleteBook}>Delete Book</button>;
}

export default DeleteBookButton;
