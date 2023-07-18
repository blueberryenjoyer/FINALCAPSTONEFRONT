import React from "react";
import { grabFancyReviews, grabReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const Reviews = ({ user, super_mario }) => {


    //copied from Cats

    const [reviews, setReviews] = useState([]);

    useEffect(() => { //without useEffect surrounding, causes infinite loop. frameworks are magic
        const lol = async () => { //force async. i cant use await without sticking it in an async function, even if it looks silly
            try {
                const results = await grabFancyReviews(super_mario)
                const result2 = await results.json()
                setReviews(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol() //now that i think about it, most of react is just this same goofy format of using state inside async functions.
    }, []);

    console.log(reviews) //logs an array of ~4 objects but could be hundreds.

    return (
        <div className={`reviews`}>
            <ul>
                {reviews.length > 0 ? (
                    reviews.map((r) => (
                        <>
                            <li className="rscore">{r.score + "/10"}</li>
                            <li >{"cat: " + r.catname}</li>
                            <li >{"user: " + r.name}</li>
                            <li >{r.content}</li>
                        </>
                    ))
                ) : (
                    <li>loading</li>
                )}
            </ul>
        </div>
    )


}

export default Reviews;