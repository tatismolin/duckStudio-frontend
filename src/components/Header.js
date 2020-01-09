import React from "react";
import Login from "./Login";

function Header(){

    return(
        <div className="header">
            <h2>HEADER</h2>
            <ul>
                <li>Online Store</li>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Cart</li>
            </ul>
        </div>
    );

}

export default Header;