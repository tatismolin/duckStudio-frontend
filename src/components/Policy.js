import React from "react";
import "./../styles/TextContent.css";

function Policy(){

    return(
        <div className="text-content-container">
            <h3 className="text-content-title">STORE POLICY</h3>
            <p className="text-content-text">
                Duck Studio online store was created as part of a final Project at Flatiron Software Engineering Bootcamp.
                While it has all the main functionalities working, there is still room for improvement, so bugs should not surprise you! 
                You can check all the bugs and planned features here https://github.com/users/tatismolin/projects/8.
                Feel free to contact me using Contact Us form on the main page with any suggestions.
                <p>Therefore if you're willing to buy a Duck, please note the following and buy at your own risk:</p>
                <ul>
                    <li>selected duck color is not guaranteed;</li>
                    <li>all prices are real;</li>
                    <li>payment are being processed via Stripe, and no Customer CC data is being stored on our servers;</li>
                    <li>no returns or refunds;</li>
                    <li>US shipping only.</li>
                </ul>
            </p> 
        </div>
    );

}

export default Policy;