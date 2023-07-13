import React from "react";
import { createUser } from "./api-adapters/adapters";
import { useNavigate } from "react-router-dom";








const Register = () => {


  const navigate = useNavigate()

  async function doSignup() { //creating users is currently working. :)
    let name = (document.getElementById('signupName')).value
    let password = (document.getElementById('signupPassword')).value
    let email = (document.getElementById('signupEmail')).value
    createUser(name, password, email)
    alert("you have successfully registered")
    navigate("/login");
  }




  return (
    <div className="Register">


      <p>register. please note that registering does not automatically log in</p>
      <input id='signupName' type="text" placeholder="name" />
      <input id='signupPassword' type="text" placeholder="password" />
      <input id='signupEmail' type="text" placeholder="email" />
      <p className='submitRegister' onClick={doSignup}>submit. this is a button.</p>

    </div>
  );
};

export default Register;
