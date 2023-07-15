import React from "react";
import { grabCats } from "./api-adapters/adapters";
import { useState, useEffect } from "react";
import UploadCat from "./CreateCat";
import { Link } from "react-router-dom";

const Cats = () => {


    //copied from Users

    const [cats, setCats] = useState([]);
    const [magic, setMagic] = useState([]);


    useEffect(() => { //REACT IS MAGIC! I AM A WIZARD! I HAVE NO IDEA WHAT IM DOING BUT IT WORKS!!!! AHAAAAHHA
        const lol = async () => {
            try {
                const results = await grabCats()
                const result2 = await results.json()
                setCats(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol()
    }, [magic]); //magic!!!!!!!!

    console.log(cats)

    return (

        <div className={`cats`}>
            <UploadCat setMagic={setMagic} />
            <Link className="Navbar-link" to="/createcat">
                Use Detailed Cat Uploader
            </Link>
            <ul>
                {cats.length > 0 ? (
                    cats.map((u) => (
                        <>
                            <li className="cname"><Link to={`/cat/${u.id}`}>
                                {u.name}
                            </Link></li>
                            <li >{"id: " + u.id}</li>
                            <li >{"description: " + u.description}</li>
                            <li >{"dangerous: " + u.dangerous}</li>
                            <li >{"uploader: " + u.uploader}</li>
                        </>
                    ))
                ) : (
                    <li>loading</li>
                )}
            </ul>
        </div>
    )


}

export default Cats;