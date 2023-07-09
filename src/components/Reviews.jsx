import React from "react";
import { grabReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const Reviews = () => {


    //copied from Cats

    const [reviews, setReviews] = useState([]);

    useEffect(() => { //without useEffect surrounding, causes infinite loop. frameworks are magic
        const lol = async () => { //force async. i cant use await without sticking it in an async function, even if it looks silly
            try {
                const results = await grabReviews()
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
                            <li >{"cat: " + r.cat_id}</li>
                            <li >{"user: " + r.user_id}</li>
                            <li >{"id: " + r.id}</li>
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