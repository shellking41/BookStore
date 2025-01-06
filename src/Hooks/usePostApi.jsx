import { useState } from "react";
import ApiKey from "../Data/ApiKey.json";
function usePostApi() {
  const ConvertAndCheck = async (Response, ResponseType) => {
    if (ResponseType === "TEXT") {
      const ConvertedResponse = await Response.text();
      console.log(ConvertedResponse);
      if (ConvertedResponse) {
        return ConvertedResponse;
      }
      return;
    } else if (ResponseType === "JSON") {
      const ConvertedResponse = await Response.json();
      console.log(ConvertedResponse);
      return ConvertedResponse;
    }
    console.log(Response);
    if (!Response.ok) {
      console.log("anyád");
    } else {
      console.log("jo");
    }
  };

  const FetchData = async (URL, Data, ResponseType, isAuthorizationRequired) => {
    // console.log(URL);
    // console.log(Data);
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": ApiKey,
      };

      if (isAuthorizationRequired) {
        const accessToken = localStorage.getItem("AccessToken");
        console.log(accessToken);
        if (!accessToken) {
          throw new Error("Access token is missing");
        }
        headers.Authorization = `Bearer ${accessToken}`;
        console.log(Data);
      }

      const Response = await fetch(URL, {
        method: "POST",
        headers,
        body: JSON.stringify(Data),
      });
      const ConvertedResponse = ConvertAndCheck(Response, ResponseType);
      if (ConvertedResponse) {
        return ConvertedResponse;
      }
      return;
    } catch (error) {
      console.log("Couldn't post data");
    }
  };
  return { FetchData };
}

export default usePostApi;
