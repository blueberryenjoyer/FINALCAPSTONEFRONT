import React from "react";
import { grabCatById } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const SingleCat = () => {


    const [cats, setCats] = useState([]);


    useEffect(() => {
        const lol = async () => {
            try {
                // let spliceme = location.pathname
                // console.log(spliceme)
                // let split_string = spliceme.split("/")
                // console.log(split_string)
                // let third_string = split_string.slice(2, 1)
                // console.log(third_string)
                const results = await grabCatById(1)
                console.log(results)
                const result2 = await results.json()
                console.log(result2)
                setCats(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol()
    }, []);



    console.log(cats)

    return (



        <div className={`cats`}>
            this page is currently in development. urls and stuff are hard
            <ul>
                {cats.length > 0 ? (
                    cats.map((u) => ( //this was made for an array. it should have an array of 1 object.
                        <>
                            <li className="cname">{u.name}</li>
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

export default SingleCat;