import React from "react";

import "../styles/DrawerToggleButton.css";

function drawerToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    );
};

export default  drawerToggleButton;