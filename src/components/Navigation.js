import React from "react";
import {Link} from "react-router-dom";
// import Authorization from "./Authorization";

function Navigation({loggedIn}){

    return(
        <div className="navigation">
                <h3>Store Name</h3>
                <Link to="/">Home</Link>
                <h3>About</h3>
                <h3>Store</h3>
                <h3>Contact</h3>
                {loggedIn
                ? <button onSubmit={() => localStorage.removeItem("token")}>Logout</button>
                : <div className="auth-form">
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                  </div>
            }
                <Link to="/cart">Cart</Link>
        </div>
    );

}

export default Navigation;