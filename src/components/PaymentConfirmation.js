import React, {Component} from "react";
import "./../styles/Payment.css";
import {Link} from "react-router-dom";


class PaymentConfirmation extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="payment">
                <div className="payment-form">
                <div className="payment-form-content">
                    {loggedIn
                        ? (<><h3 className="payment-form-title">Thank you! Payment was successful.</h3>
                            <button className="payment-form-button"><Link to="/">HOME PAGE</Link></button></>)
                        : (<><h3 className="payment-form-title">Page not found</h3>
                            <button className="payment-form-button">GO BACK</button></>)
                    }
                </div>
            </div>
            </div>
        );
    };

}

export default PaymentConfirmation;