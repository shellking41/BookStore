import { useState, useEffect } from "react";
import ApiKey from "../Data/ApiKey.json";
function useDeleteApi() {
  const DeleteApi = async (URL, token) => {
    try {
      const Response = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "x-api-key": ApiKey,
        },
      });

      if (Response.ok) {
        const ConvertedResponse = await Response.text();
        return ConvertedResponse;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { DeleteApi };
}

export default useDeleteApi;
