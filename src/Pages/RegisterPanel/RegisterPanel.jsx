import { useContext, useEffect, useState } from "react";
import usePostApi from "../../Hooks/usePostApi";
import useRegisterInputValid from "../../Hooks/useRegisterInputValid";
import { useNavigate } from "react-router";
import RegisterFrom from "../../Components/UI/RegisterFrom";

function RegisterPanel() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { CheckIfItValid, Error } = useRegisterInputValid();

  const HandleChangeInput = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (CheckIfItValid(email, password, confirmPassword)) {
      Navigate("/");
    } else {
      console.log("nem jo");
    }
  };

  return (
    <div>
      <div></div>
      <RegisterFrom setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} handleSubmit={handleSubmit} Error={Error} HandleChangeInput={HandleChangeInput} />
    </div>
  );
}

export default RegisterPanel;
