import React from "react";
import {Link} from "react-router-dom";

function Navigation({loggedIn}){

    return(
        loggedIn
        ? <div className="forms">
            <li>
                <Link to="/login">Logout</Link>
            </li>
          </div>
        : <div className="forms">
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
          </div>
    );
}

export default Navigation;