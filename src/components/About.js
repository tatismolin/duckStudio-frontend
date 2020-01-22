import React from "react";
import "./../styles/About.css";
import {LinkX} from "react-scroll";

function About(){

    return(
        <div className="about">
            <h1 className="duck-studio-name">DUCK STUDIO</h1>
            <LinkX 
                to="section1" 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>
                    <button className="shop-button">SHOP NOW</button>
            </LinkX>
        </div>
    );

}

export default About;
