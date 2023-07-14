import React from "react";
import { useNavigate } from "react-router-dom";


const Logout = ({ setLoggedin, setUser }) => {

    const navigate = useNavigate()

    async function doLogout() {
        localStorage.removeItem("token")
        setLoggedin(false)
        setUser('')
        alert("you are now logged out")
        navigate("/cats");
    }

    return ( //and on the backend, handling bad inputs needs work. crashes the server.
        <div className="Logout">
            <p className='submitLogout' onClick={doLogout}>logout. this is a button.</p>
        </div>
    );
};

export default Logout;
