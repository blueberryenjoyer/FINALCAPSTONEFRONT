import React from "react";

const Logout = () => {

    return (
        <div className="Logout">
            <p className='submitLogout' onClick={localStorage.removeItem("token")}>logout. this is a button.</p>
        </div>
    );
};

export default Logout;
