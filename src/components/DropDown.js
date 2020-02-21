import React from "react";
import {LinkX} from "react-scroll";

import "../styles/DropDown.css";

function dropDown(props){
    let drawerClasses = "drop-down";
    if(props.show){
        drawerClasses = "drop-down open";
    };
    return(
        <div className={drawerClasses}>
        <div className="drop-down-text-div">
            <LinkX
                to="section0" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>
            <h2 className="drop-down-text">HOME</h2>
            </LinkX>
            <LinkX
                to="section1" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
            <h2 className="drop-down-text">STORE</h2>
            </LinkX>
            <LinkX
                to="section2" 
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}>
            <h2 className="drop-down-text">CONTACT</h2>
            </LinkX>
        </div>
        </div>
    );
};

export default  dropDown;