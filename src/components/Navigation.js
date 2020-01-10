import React from "react";
import {Link} from "react-router-dom";
import Authorization from "./Authorization";

function Navigation({user, loginUser, logoutUser}){

    return(
        <div className="navigation">
                <h3>Store Name</h3>
                <Link to="/">Home</Link>
                <h3>About</h3>
                <h3>Store</h3>
                <h3>Contact</h3>
                <Authorization user={user} loginUser={loginUser} logoutUser={logoutUser} loggedIn={user} />
                <Link to="/cart">Cart</Link>
        </div>
    );

}

export default Navigation;