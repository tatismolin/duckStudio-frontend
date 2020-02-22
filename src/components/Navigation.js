import React, {Component} from "react";
import {LinkX} from "react-scroll";
import {Link} from "react-router-dom";

import "../styles/Navigation-desktop.css";
import "../styles/Navigation-mobile.css";

import DrawerToggleButton from "./DrawerToggleButton";

class Navigation extends Component{

    render(){
        const {handleClick, loggedIn} = this.props;
    return(
        <div className="navigation">
            <DrawerToggleButton click={handleClick} />
            <div className="navigation-links">
            <Link 
                className="app-name"
                to="/">
                    DUCK STUDIO
            </Link>
            <LinkX
                to="section0" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>
                <h2 className="nav-text-left navigation-text">HOME</h2>
            </LinkX>
            <LinkX
                to="section1" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>
                <h2 className="navigation-text">STORE</h2>
            </LinkX>
            <LinkX
                to="section2" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
                <h2 className="nav-text-right navigation-text">CONTACT</h2>
            </LinkX>
            <div className="user-info">

            {loggedIn
                ? <div 
                    className="auth-links logout" 
                    onClick={() => localStorage.removeItem("token")}>
                        <Link to="/login">
                            Logout
                        </Link>
                </div>
                : <div className="auth-links">
                    <Link to="/signup">Signup /</Link>
                    <Link to="/login">Login</Link>
                </div>
            }
            
            <Link to="/myprofile">
                <img 
                    className="profile-icon" 
                    src="https://cdn4.iconfinder.com/data/icons/humans-3/66/user_person_human_avatar_head_shoulders-512.png" 
                    alt="profile">
                </img>
            </Link>
            </div>
            {/* <Link className="menu-row" to="/cart">
                <img 
                    className="cart-icon" 
                    src="https://cdn.onlinewebfonts.com/svg/img_379399.png" 
                    alt="cart">
                </img>
            </Link> */}
            </div>
        </div>
    );
    };
};

export default Navigation;
