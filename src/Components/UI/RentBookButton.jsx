import usePostApi from "../../Hooks/usePostApi";

function RentBookButton({ id }) {
  const { FetchData } = usePostApi();

  const handleRentBook = async () => {
    try {
      console.log(await FetchData(`http://bookstoreapiazure.azurewebsites.net/api/Book/RentBook/${id}`, null, "JSON", true));
    } catch (error) {
      console.log("Could't Rent This Book");
    }
  };
  return <button onClick={handleRentBook}>Rent This Book</button>;
}

export default RentBookButton;
