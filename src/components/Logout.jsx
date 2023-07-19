import React from "react";
import { useNavigate } from "react-router-dom";
import { grabUserByName } from "./api-adapters/adapters";
import { useState, useEffect } from "react";



const Logout = ({ setLoggedin, setUser, user, setAdmin }) => { //logout has become the profile page, somehow

    const navigate = useNavigate()



    const [users, setUsers] = useState([]);

    useEffect(() => { //without useEffect surrounding, causes infinite loop. frameworks are magic
        const lol = async () => { //force async. i cant use await without sticking it in an async function, even if it looks silly
            try {
                const results = await grabUserByName(user)
                const result2 = await results.json()
                setUsers(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol() //now that i think about it, most of react is just this same goofy format of using state inside async functions.
    }, []);

    console.log(users)

    async function doLogout() {
        localStorage.removeItem("token")
        setLoggedin(false)
        setAdmin(false)
        setUser('')
        alert("you are now logged out")
        navigate("/cats");
    }






    return ( //and on the backend, handling bad inputs needs work. crashes the server. 
        <>
            <div className={`users`}>
                <ul>
                    {users.length > 0 ? (
                        users.map((u, i) => (
                            <>
                                <li className="uname">{u.name}</li>
                                <li >{"id: " + u.id}</li>
                                <li >{"email: " + u.email}</li>
                                <li >{"admin: " + u.is_admin}</li>
                            </>
                        ))
                    ) : (
                        <li>loading</li>
                    )}
                </ul>
            </div>
            <div>

            </div>
            <div className="Logout">
                <p className='submitLogout' onClick={doLogout}>logout. this is a button.</p>
            </div>
        </>
    );
};

export default Logout;
