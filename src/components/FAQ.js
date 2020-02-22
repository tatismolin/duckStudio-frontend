import React from "react";
import "./../styles/TextContent.css";


function FAQ(){

    window.scrollTo(0, 0);

    return(
        <div className="text-content-container">
            <h3 className="text-content-title">FREQUENTLY ASKED QUESTIONS</h3>

            <h4>Q1: Why your ducks are so expensive?</h4>
            <p className="text-content-text">
                All the Ducks at Duck Studio are Photoshop painted which is very time and money consuming.
            </p>
            <br></br>
            <br></br>
            <h4>Q2: Why is shipping so expensive?</h4>
            <p className="text-content-text">
                Each Duck is being packed and shipped with love using personalized packaging.
            </p>

        </div>
    );

}

export default FAQ;