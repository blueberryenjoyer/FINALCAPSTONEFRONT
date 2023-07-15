import React from "react";
import { grabCatById } from "./api-adapters/adapters";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";



const SingleCat = () => {


    const [cats, setCats] = useState([]);
    const [parnum, setParnum] = useState(0);
    let perry = useParams();

    const navigate = useNavigate()

    async function doNext() {


        let newpar = parnum + 1
        navigate(`/cat/${newpar}`)
        setParnum(newpar)
    }
    async function doPrev() {


        let newpar = parnum - 1
        navigate(`/cat/${newpar}`)
        setParnum(newpar)
    }




    useEffect(() => {
        const lol = async () => {
            try {
                const kittylol = perry.catId
                console.log(perry.catId)
                const results = await grabCatById(kittylol) //we are sending the page number as a number :) im a genius
                console.log(results)
                const result2 = await results.json()
                console.log(result2)
                setCats(result2)
                let newkittylol = Number(kittylol)
                console.log(newkittylol)
                setParnum(newkittylol)
            } catch (error) {
                console.log(error);
            }
        };
        lol()
    }, [parnum]); //im suprised adding this array didnt cause an infinite loop. it did the other time. oh well! good for me!



    console.log(cats)
    console.log(cats[0])

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
                    <li>this cat doesnt exist</li>
                )}
            </ul>
            <button onClick={doPrev}>prev</button> <button onClick={doNext}>next</button>
        </div>
    )


}

export default SingleCat;
//