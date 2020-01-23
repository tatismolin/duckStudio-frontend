import React from "react";
import "./../styles/TextContent.css";


function FAQ(){

    return(
        <div className="text-content-container">
            <h3 className="text-content-title faq">FREQUENTLY ASKED QUESTIONS</h3>

            <h3 className="text-content-q">Why your ducks are so expensive?</h3>
            <p className="text-content-text">
                All the Ducks at Duck Studio are Photoshop painted which is very time and money consuming.
            </p>

            <h3 className="text-content-q">Why is shipping so expensive?</h3>
            <p className="text-content-text">
                Each Duck is being packed and shipped with love using personalized packaging.
            </p>

        </div>
    );

}

export default FAQ;