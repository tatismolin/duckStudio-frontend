import React from "react";
import {LinkX} from "react-scroll";
import {Link} from "react-router-dom";

import "../styles/DropDown.css";

function dropDown(props){

    let drawerClasses = "drop-down";

    if(props.show){
        drawerClasses = "drop-down open";
    };

    return(
        <div className={drawerClasses}>
            <Link 
                className="app-name"
                to="/">
                DUCK STUDIO
            </Link>
        
            <div className="mobile-user-info">
                {props.loggedIn
                    ? <div 
                        className="auth-links" 
                        onClick={() => localStorage.removeItem("token")}>
                            <img 
                                className="auth-icon" 
                                src="https://cdn3.iconfinder.com/data/icons/material-line-thin/1024/enter-512.png" 
                                alt="logout">
                            </img>

                            <Link className="logout" to="/login">
                                Logout
                            </Link>
                      </div>
                    : <div className="auth-links">
                            <img 
                                className="auth-icon" 
                                src="https://cdn3.iconfinder.com/data/icons/material-line-thin/1024/enter-512.png" 
                                alt="login-signup">
                            </img>

                            <Link to="/signup">Signup /</Link>
                            <Link to="/login">Login</Link>
                      </div>
                }

                <div className="auth-links">
                    <img 
                        className="profile-icon" 
                        src="https://cdn4.iconfinder.com/data/icons/humans-3/66/user_person_human_avatar_head_shoulders-512.png" 
                        alt="profile">
                    </img>

                    <Link to="/myprofile" className="profile">
                        My Profile
                    </Link>
                </div>

                <div className="auth-links">
                        <img 
                            className="cart-icon" 
                            src="https://cdn.onlinewebfonts.com/svg/img_379399.png" 
                            alt="cart">
                        </img>
                    <Link to="/cart">
                        Shopping Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default  dropDown;