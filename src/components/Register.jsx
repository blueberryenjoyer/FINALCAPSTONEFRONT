import React from "react";
import { createUser } from "./api-adapters/adapters";



async function doSignup() { //creating users is currently working. :)
  let name = (document.getElementById('signupName')).value
  let password = (document.getElementById('signupPassword')).value
  let email = (document.getElementById('signupEmail')).value
  createUser(name, password, email)
}





const Register = () => {

  return (
    <div className="Register">


      <p>register</p>
      <input id='signupName' type="text" placeholder="name" />
      <input id='signupPassword' type="text" placeholder="password" />
      <input id='signupEmail' type="text" placeholder="email" />
      <p className='submitReg' onClick={doSignup}>submit. this is a button.</p>

    </div>
  );
};

export default Register;
