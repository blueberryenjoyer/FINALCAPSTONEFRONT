import React from "react";
import { grabCats } from "./api-adapters/adapters";
import { useState, useEffect } from "react";
import UploadCat from "./CreateCat";
import { Link } from "react-router-dom";

const Cats = ({ user }) => {


    //copied from Users

    const [cats, setCats] = useState([]);
    const [toggle, setToggle] = useState(false)
    const [magic, setMagic] = useState([]);
    console.log(user)


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

    const letThereBeCats = async () => {
        try {
            if (toggle === false) {
                setToggle(true)
            }
            else { setToggle(false) }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(cats)
    let reverseCats = cats.toReversed()
    console.log(reverseCats)

    return (

        <div className={`cats`}>


            <button onClick={letThereBeCats}>create new cats</button>
            {!toggle ? (
                <>

                </>
            ) : (
                <UploadCat user={user} setMagic={setMagic} />
            )}


            <ul>
                {
                    reverseCats.length > 0 ? (
                        reverseCats.map((u) => (
                            <>
                                <li className="cname"><Link to={`/cat/${u.id}`}>
                                    {u.name}
                                </Link></li>
                                <li >{"description: " + u.description}</li>
                                <li >{"dangerous: " + u.dangerous}</li>
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