import React from "react";
import { grabUserReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const UserReviews = ({ user }) => {

    //copied from Reviews

    const [reviews, setReviews] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => { //react is magic. thats because i dont understand it.
        const lol = async () => {
            try {
                const results = await grabUserReviews(user)
                const result2 = await results.json()
                setReviews(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol()
    }, []);

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
                reviews by you:
            </h1>
            <div className={`reviews`}>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map((r) => (
                            <>
                                <li className="rscore">{r.score + "/10"}</li>
                                <li >{"cat: " + r.catname}</li>
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
                        <li>this user has no reviews</li>
                    )}
                </ul>
            </div>
        </>
    )


}

export default UserReviews;