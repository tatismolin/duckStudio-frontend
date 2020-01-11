import React from "react";
import {Link} from "react-router-dom";
// import Authorization from "./Authorization";

function Navigation({loggedIn}){

    return(
        <div className="navigation">
                <Link to="/" className="nav-left">DUCK STUDIO</Link>
                <div className="nav-middle">
                    <Link className="nav-space" to="/">Home</Link>
                    <h3 className="nav-space">About</h3>
                    <h3 className="nav-space">Store</h3>
                    <h3>Contact</h3>
                </div>
                <div className="nav-right">
                <img className="profile-image nav-space" src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png"></img>
                {loggedIn
                ? <button className="logout-button" onSubmit={() => localStorage.removeItem("token")}>Logout</button>
                : <div className="auth-form">
                    <Link to="/signup">Signup/</Link>
                    <Link to="/login">Login</Link>
                  </div>
            }
            <Link className="nav-space2" to="/cart"><img className="cart-image" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png"></img></Link>
            </div>
        </div>
    );

}

export default Navigation;

