import React from "react";
import { loginUser } from "./api-adapters/adapters";




async function doLogin() {
  let name = (document.getElementById('loginName')).value
  let password = (document.getElementById('loginPassword')).value
  let newToken = loginUser(name, password)
  localStorage.setItem("token", await newToken);
}


const Login = () => {

  return (
    <div className="Login">

      <p>register</p>
      <input id='loginName' type="text" placeholder="name" />
      <input id='loginPassword' type="text" placeholder="password" />
      <p className='submitLog' onClick={doLogin}>submit. this is a button.</p>

    </div>
  );
};

export default Login;
