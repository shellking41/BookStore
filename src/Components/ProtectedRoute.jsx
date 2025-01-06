import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import useRefresh from "../Hooks/useRefresh";

function ProtectedRoute({ children }) {
  const AccessToken = localStorage.getItem("AccessToken");
  const RefreshToken = localStorage.getItem("RefreshToken");
  const { CompareExpireDate } = useRefresh();
  const location = useLocation();

  if (!AccessToken || !RefreshToken) {
    return (
      <Navigate
        to="/"
        replace={true}
        state={{
          from: {
            pathname: location.pathname,
            search: location.search,
          },
        }}
      />
    );
  }

  useEffect(() => {
    CompareExpireDate();
    const intervalId = setInterval(() => {
      CompareExpireDate();
      console.log("interval");
    }, 29000);
    return () => clearInterval(intervalId);
  }, []);

  return <>{children}</>;
}

export default ProtectedRoute;
