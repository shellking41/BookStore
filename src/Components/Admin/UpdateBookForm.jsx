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

  const handleSubmit = () => {
    let Data = JSON.parse(localStorage.getItem("Products"));
    const NewDATA = Data.map((item, index) => {
      if (index === id) {
        console.log(item);
        return (item = { Title: Title, Description: Description });
      }
      return item;
    });
    localStorage.setItem("Products", JSON.stringify(NewDATA));
    setUpdateRequired({ WantToUpdate: false, id: id });
    window.location.reload();
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

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default UpdateBookForm;
