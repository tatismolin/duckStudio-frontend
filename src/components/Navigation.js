import React from "react";
import { LinkX, animateScroll as scroll } from "react-scroll";
import {Link} from "react-router-dom";



function Navigation({loggedIn}){

    return(
        <div className="nav">
            <Link to="/" className="nav-left">DUCK STUDIO</Link>

            <div className="nav-middle">
                <h3><Link to="/">Home</Link></h3>
                <h3><LinkX to="section1"     activeClass="active"
    spy={true}
    smooth={true}
    offset={-100}
    duration={1000}>About</LinkX></h3>
                <h3><LinkX to="section2" activeClass="active"
    spy={true}
    smooth={true}
    offset={-100}
    duration={1000}>Store</LinkX></h3>
                <h3><LinkX to="section3" activeClass="active"
    spy={true}
    smooth={true}
    offset={-100}
    duration={1000}>Contact</LinkX></h3>
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

