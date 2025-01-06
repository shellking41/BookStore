import usePutApi from "../../Hooks/usePutApi";

function UpdateBookButton({ setUpdateRequired, id }) {
  const handleUpdateBook = () => {
    setUpdateRequired({ WantToUpdate: true, id: id });
  };

  return <button onClick={handleUpdateBook}>Update Book</button>;
}

export default UpdateBookButton;
