import React from "react";
import { createCat } from "./api-adapters/adapters";


const UploadCat = ({ setMagic }) => {

  async function doNewcat() { //this is where the actual data to be uploaded is saved! not exactly secure
    let name = (document.getElementById('newcatName')).value
    let description = (document.getElementById('newcatDescription')).value
    let dangerous = false
    let uploader = 1
    createCat(name, description, dangerous, uploader)



    if (location.pathname == '/cats') {
      setMagic(['hocus pocus! update my component!']) ////wajhahhaahah why does any of this work?? ChrząszczyrzewoszyceChrząszczyrzewoszyceChrząszczyrzewoszyce
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
