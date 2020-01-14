import React from "react";
import {Link} from "react-router-dom";

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
                <img 
                    className="profile-icon" 
                    src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png" 
                    alt="profile">
                </img>

                {loggedIn
                    ? <button 
                        className="logout-button" 
                        onClick={() => localStorage.removeItem("token")}>
                            
                            Logout
                      </button>
                    : <div className="auth">
                        <Link to="/signup">Signup/</Link>
                        <Link to="/login">Login</Link>
                      </div>
                }

                <Link to="/cart">
                    <img 
                        className="cart-icon" 
                        src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png" 
                        alt="cart">
                    </img>
                </Link>
            </div>
        </div>
    );

}

export default Navigation;

