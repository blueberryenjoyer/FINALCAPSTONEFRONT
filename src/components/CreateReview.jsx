import React from "react";
import { createReview } from "./api-adapters/adapters";


const CreateReview = ({ user, super_mario, setMagic }) => {

  async function doNewreview() { //receive content, score, uploader, cat_id
    let content = (document.getElementById('newreviewContent')).value //string
    let score = (document.getElementById('newreviewScore')).value //string should be number, fix it in api
    console.log('logging user') //to be honest, api is more important than frontend. for security.
    console.log(user)
    let uploader = user //string, update to number in api
    let cat_id = super_mario
    const checkifitbroke = await createReview(content, score, uploader, cat_id)
    console.log(checkifitbroke)
    console.log('checked if it broke')
    alert(checkifitbroke)

    setMagic(['hocus pocus! update my component! 2']) //i dont know why this works. or why it doesnt work. its magic.
  }


  return (
    <div className="CreateCat">


      <p>make new review</p>
      <input id='newreviewContent' type="text" placeholder="tell us about this cat" />
      <input id='newreviewScore' type="text" placeholder="score" />
      <p className='submitNewreview' onClick={doNewreview}>upload review</p>
    </div>
  );
};

export default CreateReview;
