import useGetApi from "../../Hooks/useGetApi";

function BookProperties({ item }) {
  const { GetApi } = useGetApi();

  const handleBookProperties = async (id) => {
    try {
      console.log(await GetApi(`http://bookstoreapiazure.azurewebsites.net/api/Book/${id}`));
    } catch (error) {
      console.log("nem jo");
    }
  };
  return <button onClick={() => handleBookProperties(item.id)}>Book Properties</button>;
}

export default BookProperties;
