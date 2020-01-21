import React from "react";
import "./../styles/Footer.css";
import {Link} from "react-router-dom";

function Footer(){

    return(
        <div className="footer">
            <h3><Link to="/faq">FAQ</Link></h3>
            <h3><Link to="/shipping">Shipping & Returns</Link></h3>
            <h3><Link to="/policy">Store Policy</Link></h3>
            <h3><Link to="/payments">Payments</Link></h3>
        </div>
    );

}

export default Footer;