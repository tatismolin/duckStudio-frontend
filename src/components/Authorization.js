import React from "react";
import {Link} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Authorization({loggedIn, user, loginUser, logoutUser}){

    return(
        <div className="auth">
            <h3>Authorization</h3>
            {loggedIn
                ? <button onClick={() => localStorage.removeItem("token")}>Logout</button>
                : <div className="auth-form">
                    <Signup />
                    <Login user={user} loginUser={loginUser} logoutUser={logoutUser} />
                </div>
            }
        </div>
    );

}

export default Authorization;