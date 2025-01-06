import { useState } from "react";
import usePostApi from "./usePostApi";
import { useNavigate } from "react-router";

function useRefresh() {
  const navigation = useNavigate();

  const AccessToken = localStorage.getItem("AccessToken");

  const RefreshToken = localStorage.getItem("RefreshToken");

  const { FetchData } = usePostApi();

  const getResponse = async () => {
    const response = await FetchData("http://bookstoreapiazure.azurewebsites.net/api/Auth/Refresh", { AccessToken: AccessToken, RefreshToken: RefreshToken }, "JSON");
    localStorage.setItem("AccessToken", response.accessToken);
    localStorage.setItem("accessExpirationDate", response.accessExpirationDate);
    localStorage.setItem("RefreshToken", response.refreshToken);
    localStorage.setItem("refreshExpirationDate", response.refreshExpirationDate);
    console.log(response.accessExpirationDate);
  };

  const CompareExpireDate = () => {
    const AccessExpirationDate = localStorage.getItem("accessExpirationDate");
    const RefreshExpirationDate = localStorage.getItem("refreshExpirationDate");
    console.log(AccessExpirationDate);
    const CurrentDate = new Date();
    const ConvertedAccessExpirationDate = new Date(AccessExpirationDate);
    const ConvertedRefreshExpirationDate = new Date(RefreshExpirationDate);

    console.log(CurrentDate);
    console.log(ConvertedAccessExpirationDate);

    const adjustedDate = new Date(CurrentDate);
    adjustedDate.setHours(adjustedDate.getHours() - 1);

    if (ConvertedRefreshExpirationDate <= adjustedDate) {
      localStorage.removeItem("AccessToken");
      localStorage.removeItem("accessExpirationDate");
      localStorage.removeItem("RefreshToken");
      localStorage.removeItem("refreshExpirationDate");
      navigation("/");
    }

    getResponse();
  };
  return { CompareExpireDate };
}

export default useRefresh;
