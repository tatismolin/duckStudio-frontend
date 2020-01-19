import React from "react";
import { LinkX, animateScroll as scroll } from "react-scroll";

function About(){

    return(
        <div className="about" id="about">
            <h1 className="duck-studio-name">DUCK STUDIO</h1>
            <LinkX to="section2" activeClass="active"
    spy={true}
    smooth={true}
    offset={-100}
    duration={1000}><button className="shop-button">SHOP NOW</button></LinkX>
        </div>
    );

}

export default About;
