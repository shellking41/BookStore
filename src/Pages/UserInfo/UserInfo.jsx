import { useEffect, useState } from "react";
import UserRentedBooks from "../../Components/UI/UserRentedBooks";
import useGetApi from "../../Hooks/useGetApi";

function UserInfo() {
  const { GetApi } = useGetApi();
  const [RentedBooksState, setRentedBooksState] = useState();
  useEffect(() => {
    const GetRentedBooks = async () => {
      try {
        setRentedBooksState(await GetApi(`http://bookstoreapiazure.azurewebsites.net/api/Book/RentedBooks`));
      } catch (error) {
        console.log("Could't Get Rented Books");
      }
    };
    GetRentedBooks();
  }, []);

  if (!RentedBooksState) {
    return <p>Wait</p>;
    <div></div>;
  }
  return <UserRentedBooks RentedBooksState={RentedBooksState} />;
}

export default UserInfo;
