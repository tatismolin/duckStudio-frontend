import React from "react";
import Water from "../pictures/background.jpg";
import Duck from "../pictures/yellow_duck.png";

function Picture(){

    return(
        <div className="main-image-container">
            <img 
                className="watercolors-image" 
                src={Water} 
                alt="watercolors">
            </img>   

            <img 
                className="main-duck-image" 
                src={Duck} 
                alt="duck">
            </img>        
        </div>
    );

}

export default Picture;
