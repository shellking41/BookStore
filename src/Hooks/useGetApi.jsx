import { useEffect, useState } from "react";
import ApiKey from "../Data/ApiKey.json";
function useGetApi() {
  const GetApi = async (URL) => {
    try {
      const Response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          "Content-type": "application/json",
          "x-api-key": ApiKey,
        },
      });
      if (Response.ok) {
        const ConvertedResponse = await Response.json();
        return ConvertedResponse;
      }

      if (!Response.ok) {
      } else {
        console.log("jo");
      }
    } catch (error) {
      console.log("Couldn't get data");
    }
  };
  return { GetApi };
}

export default useGetApi;
