import { useEffect } from "react";

function UserRentedBooks({ RentedBooksState }) {
  useEffect(() => {
    console.log(RentedBooksState);
  }, []);

  return <></>;
}

export default UserRentedBooks;
