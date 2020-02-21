import React from "react";

import "../styles/BackDrop.css";

function backDrop(props){
    return(
        <div 
            className="back-drop" 
            onClick={props.click}>
        </div>
    );
};

export default  backDrop;