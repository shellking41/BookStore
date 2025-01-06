import { useState } from "react";
import usePutApi from "../../Hooks/usePutApi";

function UpdateBookForm({ id, setUpdateRequired }) {
  const { PutApi } = usePutApi();

  const [Page, setPage] = useState();
  const [Description, setDescription] = useState();
  const [Title, setTitle] = useState();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePageCount = (e) => {
    setPage(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      await PutApi(`http://bookstoreapiazure.azurewebsites.net/api/Book/UpdateBook/${id}`, localStorage.getItem("AccessToken"), { title: Title, description: Description, pages: Page });
      setUpdateRequired({ WantToUpdate: false, id: id });
    } catch (error) {
      console.log("Something os Wrong");
    }
  };
  const handleCancel = () => {
    setUpdateRequired({ WantToUpdate: false, id: id });
  };

  return (
    <div>
      <label htmlFor="Title">Title</label>
      <input id="Title" type="text" placeholder="Title" onChange={(e) => handleChangeTitle(e)} />

      <label htmlFor="Description">Description</label>
      <input id="Description" type="text" placeholder="Description" onChange={(e) => handleChangeDescription(e)} />

      <label htmlFor="Description">Page Count</label>
      <input id="PageCount" type="Number" placeholder="Page Count" onChange={(e) => handleChangePageCount(e)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default UpdateBookForm;
