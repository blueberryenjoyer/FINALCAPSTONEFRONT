import React from "react";
import { grabFancyReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const Reviews = ({ super_mario, parnum, magic, setMagic, user }) => {


    //copied from Cats

    const [reviews, setReviews] = useState([]);
    const [toggle, setToggle] = useState(false)

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
    }, [parnum, magic]);

    console.log(reviews)



    const letThereBeUpdates = async () => {
        try {
            if (toggle === false) {
                setToggle(true)
            }
            else { setToggle(false) }
        } catch (error) {
            console.log(error);
        }
    };
    const doDelete = async () => {
        try {
            //deleteReviewById(parnum, user) //fix later
            setMagic(['hocus pocus updatus my componentus']) //to force rerender. breaks sometimes. idk how it works anymore.
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <h1>


            </h1>
            <div className={`reviews`}>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map((r) => (
                            <>
                                <li className="rscore">{r.score + "/10"}</li>
                                <li >{"user: " + r.name}</li>
                                <li >{r.content}</li>
                                {(r.name == user) ? (
                                    <>
                                        <button onClick={letThereBeUpdates}>update</button>
                                        <button onClick={doDelete}>delete</button>
                                    </>
                                ) : (
                                    <>

                                    </>
                                )}
                                <div></div>
                            </>
                        ))
                    ) : (
                        <li>this cat has no reviews</li>
                    )}
                </ul>
            </div>
        </>
    )


}

export default Reviews;