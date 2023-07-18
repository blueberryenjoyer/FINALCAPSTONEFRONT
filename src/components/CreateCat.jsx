import React from "react";
import { createCat } from "./api-adapters/adapters";


const UploadCat = ({ user, setMagic }) => {

  async function doNewcat() { //this is where the actual data to be uploaded is saved! not exactly secure
    let catname = (document.getElementById('newcatName')).value //string
    let description = (document.getElementById('newcatDescription')).value //string
    let dangerous = false //bool
    console.log('logging user')
    console.log(user)
    let uploader = user //string
    createCat(catname, description, dangerous, uploader)



    if (location.pathname == '/cats') {
      setMagic(['hocus pocus! update my component!']) ////wajhahhaahah why does any of this work?? ChrząszczyrzewoszyceChrząszczyrzewoszyceChrząszczyrzewoszyce
    }
    else if (location.pathname == '/createcat') {
      alert('cat created')
    }
  }


  return (
    <div className="CreateCat">


      <p>make new cat!</p>
      <input id='newcatName' type="text" placeholder="name" />
      <input id='newcatDescription' type="text" placeholder="description" />
      <p className='submitNewcat' onClick={doNewcat}>upload cat</p>
    </div>
  );
};

export default UploadCat;
