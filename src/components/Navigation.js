import React from "react";
import {Link} from "react-router-dom";

function Navigation({loggedIn}){

    return(
        <div className="nav">
            <h2>Authorization</h2>
            {loggedIn
                ? <div className="nav-form">
                    <li>
                        <Link to="/login">Logout</Link>
                    </li>
                </div>
                : <div className="nav-form">
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            }
        </div>
    );

}

export default Navigation;