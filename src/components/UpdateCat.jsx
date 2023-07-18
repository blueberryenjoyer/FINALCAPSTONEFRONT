import React from "react";
import { updateCat } from "./api-adapters/adapters";


const UpdateCat = ({ user, super_mario, setMagic }) => {

    async function doUpdatecat() { //this is where the actual data to be uploaded is saved! not exactly secure

        let id = super_mario
        let catname = (document.getElementById('updatecatName')).value //string
        let description = (document.getElementById('updatecatDescription')).value //string
        let dangerous = false //bool
        console.log(user)
        let uploader = user //string
        updateCat(id, catname, description, dangerous, uploader)

        setMagic(['hocus pocus! update my component!'])
    }

    console.log(super_mario)

    return (
        <div className="UpdateCat">


            <p>change the cat!</p>
            <input id='updatecatName' type="text" placeholder="name" />
            <input id='updatecatDescription' type="text" placeholder="description" />
            <p className='submitUpdatecat' onClick={doUpdatecat}>update</p>
        </div>
    );
};

export default UpdateCat;
