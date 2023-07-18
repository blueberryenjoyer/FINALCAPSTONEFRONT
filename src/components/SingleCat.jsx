import React from "react";
import { deleteCatById, grabCatById } from "./api-adapters/adapters";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import UpdateCat from "./UpdateCat";
import Reviews from './Reviews';
import CreateReview from "./CreateReview";



const SingleCat = ({ user }) => {


    const [cats, setCats] = useState([]);
    const [singlecat, setSinglecat] = useState({});
    const [catowner, setCatowner] = useState('');
    const [parnum, setParnum] = useState(0);
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [magic, setMagic] = useState([])


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
                console.log(magic)
                const kittylol = perry.catId
                console.log(perry.catId)
                const results = await grabCatById(kittylol) //we are sending the page number as a number :) this number is made of number
                console.log(results)
                const result2 = await results.json()
                console.log(result2)
                setCats(result2)
                setSinglecat(cats[0])
                let bonuslolcat = result2[0]
                let bonuslolcat2 = bonuslolcat.uploader
                setCatowner(bonuslolcat2)
                let newkittylol = Number(kittylol)
                console.log(newkittylol)
                setParnum(newkittylol)
                console.log(singlecat)
                console.log(catowner)

            } catch (error) {
                console.log(error);
            }

        };
        lol()

    }, [parnum, magic]); //none of this actually updates correctly. it updates the second time.



    console.log(cats)

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
    const letThereBeReviews = async () => {
        try {
            if (toggle2 === false) {
                setToggle2(true)
            }
            else { setToggle2(false) }
        } catch (error) {
            console.log(error);
        }
    };
    const doDelete = async () => {
        try {

            console.log(magic)
            const checkifitbroke = await deleteCatById(parnum, user)
            console.log(checkifitbroke)
            setMagic(['hocus pocus updatus my componentus']) //to force rerender. breaks sometimes. idk how it works anymore.
            console.log(magic)
        } catch (error) {
            console.log(error);
        }
    };


    console.log(singlecat)
    console.log(catowner)
    console.log('logs singlecat here')

    return (


        //display cat
        <div className={`singlecat`}>

            <button onClick={doPrev}>prev</button> <button onClick={doNext}>next</button>

            <ul>
                {cats.length > 0 ? (
                    cats.map((u) => ( //this was made for an array. it should have an array of 1 object.
                        <>
                            <li className="cname">{u.catname}</li>
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




            <div>
                {(user == catowner) ? (
                    <>
                        <button onClick={letThereBeUpdates}>update</button>
                        <button onClick={doDelete}>delete</button>

                        <div>
                            {toggle ? (//this makes the updater menu visible or invisible
                                <>
                                    <UpdateCat user={user} super_mario={perry.catId} setMagic={setMagic} />
                                </>
                            ) : (
                                <>

                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
            <h1>
                <button onClick={letThereBeReviews}>review</button>
            </h1>
            <div>
                {toggle2 ? (//this makes the creater menu visible or invisible
                    <>
                        <CreateReview user={user} super_mario={perry.catId} setMagic={setMagic} />
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
            <Reviews super_mario={perry.catId} parnum={parnum} magic={magic} setMagic={setMagic} user={user} />

        </div>
    )


}

export default SingleCat;
