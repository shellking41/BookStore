import { jwtDecode } from "jwt-decode";
function useJWTdecode() {
  const JWTdecode = () => {
    const DecodedJWT = jwtDecode(localStorage.getItem("AccessToken"));
    const Role = DecodedJWT["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return Role;
  };

  return { JWTdecode };
}

export default useJWTdecode;
