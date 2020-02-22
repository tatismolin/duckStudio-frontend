import React from "react";
import "./../styles/TextContent.css";


function FAQ(){

    window.scrollTo(0, 0);

    return(
        <div className="text-content-container">
            <h3 className="text-content-title faq">FREQUENTLY ASKED QUESTIONS</h3>

            <h3 className="text-content-q">Why your ducks are so expensive?</h3>
            <p className="text-content-text">
                All the Ducks at Duck Studio are Photoshop painted which is very time adn money consuming.
            </p>

            <h3 className="text-content-q">Why is shipping so expensive?</h3>
            <p className="text-content-text">
                Each Duck is being packed and shipped with love using personah3zed packaging.
            </p>

        </div>
    );

}

export default FAQ;