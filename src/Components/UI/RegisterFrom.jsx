import React from "react";

function RegisterFrom({ setEmail, setPassword, setConfirmPassword, handleSubmit, Error, HandleChangeInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Email">Email:&nbsp;</label>
      <input id="Email" type="email" placeholder="Email" onChange={(e) => HandleChangeInput(e, setEmail)}></input>
      <label htmlFor="password">Password:&nbsp;</label>
      <input id="password" type="password" placeholder="Password" onChange={(e) => HandleChangeInput(e, setPassword)}></input>
      <label htmlFor="confPassword">Confirm Password:&nbsp;</label>
      <input id="confPassword" type="password" placeholder="confirm Password" onChange={(e) => HandleChangeInput(e, setConfirmPassword)}></input>
      <button type="submit">Submit</button>
      <p>{Error}</p>
    </form>
  );
}

export default RegisterFrom;
