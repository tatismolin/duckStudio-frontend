import React from "react";
import Water from "./about-background.jpg";
import Duck from "./yellow-duck.png";

function Picture(){

    return(
        <div className="picture">
            <img className="about-image" src={Water} alt="watercolors"></img>   
            <img className="duck-image" src={Duck} alt="duck"></img>        

        </div>
    );

}

export default Picture;
