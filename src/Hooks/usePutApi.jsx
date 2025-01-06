import { stringify } from "uuid";
import ApiKey from "../Data/ApiKey.json";
function usePutApi() {
  const PutApi = async (URL, Token, Data) => {
    try {
      const Response = fetch(URL, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
          "x-api-key": ApiKey,
        },
        body: JSON.stringify(Data),
      });
    } catch (error) {
      console.log("Couldn't Put Data");
    }
  };

  return { PutApi };
}

export default usePutApi;
