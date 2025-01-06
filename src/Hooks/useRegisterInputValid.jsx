import { useState } from "react";

function useRegisterInputValid() {
  const [Error, setError] = useState("");
  const CheckIfItValid = (email, password, confirmPassword) => {
    if (email === undefined || email === "") {
      setError("Email is required!");
      return false;
    }

    if (!email.includes("@")) {
      setError("Invalid Email format!");
      return false;
    }

    if (password === undefined || password === "") {
      setError("Password is required!");
      return false;
    }

    if (!(password.length >= 8)) {
      setError("The password is too short!");
      return false;
    }

    if (confirmPassword === undefined || confirmPassword === "") {
      setError("Please confirm your password!");
      return false;
    }

    if (!(password === confirmPassword)) {
      setError("Password do not match!");
      return false;
    }

    setError("");
    return true;
    console.log("asd");
  };

  return { CheckIfItValid, Error };
}

export default useRegisterInputValid;
