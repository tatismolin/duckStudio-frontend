import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authorization({loggedIn, user, loginUser, logoutUser}){

    return(
        <div className="auth">
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