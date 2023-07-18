import React from "react";
import { grabUsers } from "./api-adapters/adapters";
import { useState, useEffect } from "react";

const Users = ({ user }) => {


    //psuedocode time
    //grab the users data from the api
    //map it onto the return statement

    const [users, setUsers] = useState([]);

    useEffect(() => { //without useEffect surrounding, causes infinite loop. frameworks are magic
        const lol = async () => { //force async. i cant use await without sticking it in an async function, even if it looks silly
            try {
                console.log(user)
                const results = await grabUsers(user)
                const result2 = await results.json()
                setUsers(result2)
            } catch (error) {
                console.log(error);
            }
        };
        lol() //now that i think about it, most of react is just this same goofy format of using state inside async functions.
    }, []);

    console.log(users)

    return (
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
    )


}

export default Users;