import React from "react";
import { grabFancyReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const Reviews = ({ super_mario, parnum }) => {


    //copied from Cats

    const [reviews, setReviews] = useState([]);

    useEffect(() => { //react is magic. thats because i dont understand it.
        const lol = async () => {
            try {
                const results = await grabFancyReviews(super_mario)
                const result2 = await results.json()
                setReviews(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol()
    }, [parnum]);

    console.log(reviews)

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
                    <li>leave a review!</li>
                )}
            </ul>
        </div>
    )


}

export default Reviews;