import React from "react";
import "./../styles/TextContent.css";

function Payments(){

    window.scrollTo(0, 0);

    return(
        <div className="text-content-container">
            <h3 className="text-content-title">PAYMENTS</h3>
            <p className="text-content-text">
                We currently accept payments via Stipe. 
                No Customers CC Data is being stored anywhere on our servers.
            </p>
        </div>
    );

}

export default Payments;