import React from "react";
import { loginUser, auth } from "./api-adapters/adapters";
import { useNavigate } from "react-router-dom";







const Login = ({ setLoggedin, setUser }) => {

  const navigate = useNavigate()

  async function doLogin() {
    let name = (document.getElementById('loginName')).value
    let password = (document.getElementById('loginPassword')).value
    let newToken = loginUser(name, password)
    localStorage.setItem("token", await newToken)
    const diditwork = await auth(name)
    console.log('did it work?')
    console.log(diditwork)
    if (diditwork) {
      setUser(name)
      setLoggedin(true)
      alert('successfully logged in')
      navigate("/cats");
    }
    else {
      localStorage.removeItem("token")
      alert('failed to log in')
    }
  }



  return (
    <div className="Login">

      <p>login</p>
      <input id='loginName' type="text" placeholder="name" />
      <input id='loginPassword' type="text" placeholder="password" />
      <p className='submitLogin' onClick={doLogin}>submit. this is a button.</p>

    </div>
  );
};

export default Login;
