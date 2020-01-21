import React from "react";

function Popup(){

    return(
        <div id="popup1" className="overlay">
            <div class="popup">
                <a class="close" href="#">&times;</a>
                <div class="content">
                    <h3>Thank you! Your email was sent.</h3>
                </div>
            </div>
        </div>
    );

}

export default Popup;






