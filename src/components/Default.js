import React from "react";
import "./../styles/Default.css";

function Default(){

    window.scrollTo(0, 0);

    return(
        <div className="default">
            <h3>Page not found...</h3>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/i9AHJkHqkpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

}

export default Default;
