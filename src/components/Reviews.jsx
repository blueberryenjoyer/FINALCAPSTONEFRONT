import React from "react";
import { grabFancyReviews } from "./api-adapters/adapters";
import { useState, useEffect } from "react";
import { updateReview, deleteReviewById } from "./api-adapters/adapters";


const Reviews = ({ super_mario, parnum, magic, setMagic, user }) => {


    //copied from Cats

    const [reviews, setReviews] = useState([]);
    const [toggle, setToggle] = useState(false)
    const [myReview, setMyReview] = useState(0)

    useEffect(() => { //react is magic. thats because i dont understand it.
        const lol = async () => {
            try {
                const results = await grabFancyReviews(super_mario)
                const result2 = await results.json()
                setReviews(result2)
                result2.forEach(r => {
                    if (r.name == user) {
                        console.log('HERE!')
                        console.log(r)
                        setMyReview(r.id)
                    }
                })

            } catch (error) {
                console.log(error);
            }
        };
        lol()

    }, [parnum, magic]);

    console.log(reviews)




    const letThereBeUpdates = async () => {
        try {
            console.log(this)
            if (toggle === false) {
                setToggle(true)
            }
            else { setToggle(false) }
        } catch (error) {
            console.log(error);
        }
    };

    async function doUpdatereview() {

        let id = myReview //number, the id of the review. these are unique so i dont need the cat's id
        let content = (document.getElementById('updatereviewContent')).value //string
        let score = (document.getElementById('updatereviewScore')).value //string, becomes number in the api

        console.log(user)
        let uploader = user //string

        const checkifitbroke = await updateReview(id, content, score, uploader)
        setMagic(['alakazam'])
        console.log(checkifitbroke)
    }


    const doDelete = async () => {
        try {
            const checkifitbroke = await deleteReviewById(myReview, user)
            console.log(checkifitbroke)
            setMagic(['like resignation to the end, always the end'])
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>


            </h1>

            <div>
                {toggle ? (
                    <div className="UpdateReview">


                        <p>change the review!</p>
                        <input id='updatereviewContent' type="text" placeholder="content" />
                        <input id='updatereviewScore' type="text" placeholder="score" />
                        <p className='submitUpdatereview' onClick={doUpdatereview}>update</p>
                    </div>
                ) : (
                    <>

                    </>
                )}
            </div>

            <div className={`reviews`}>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map((r) => (
                            <>
                                <li className="rscore">{r.score + "/10"}</li>
                                <li >{"user: " + r.name}</li>
                                <li >{"id: " + r.id}</li>
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