import React from "react";
import {LinkX} from "react-scroll";

import "../styles/Navigation-desktop.css";
import "../styles/Navigation-mobile.css";

import DrawerToggleButton from "./DrawerToggleButton";

function Navigation(props){

    return(
        <div className="navigation">
            <DrawerToggleButton click={props.handleClick} />
            <div className="navigation-links">
            <LinkX
                to="section0" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>
                <h2 className="navigation-text">HOME</h2>
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
                <h2 className="navigation-text">CONTACT</h2>
            </LinkX>
            
            </div>
        </div>
    );
};

export default Navigation;
