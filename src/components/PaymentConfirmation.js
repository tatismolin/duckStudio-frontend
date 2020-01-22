import React, {Component} from "react";
import "./../styles/Default.css";

class PaymentConfirmation extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="default">
                <div className="default-form">
                <div className="default-form-content">
                    {loggedIn
                        ? (<><h3 className="default-form-title">Thank you! Your Payment was successful.</h3>
                            <button className="default-form-button">HOME PAGE</button></>)
                        : (<><h3 className="default-form-title">Page not found</h3>
                            <button className="default-form-button">GO BACK</button></>)
                    }
                </div>
            </div>
            </div>
        );
    };

}

export default PaymentConfirmation;