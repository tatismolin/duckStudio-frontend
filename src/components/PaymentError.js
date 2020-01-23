import React, {Component} from "react";
import "./../styles/Default.css";

class PaymentError extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="payment">
                <div className="payment-form-content">
                    {loggedIn
                        ? (<><h3 className="payment-form-title">Unable to process payment.</h3>
                        <button className="payment-form-button">HOME PAGE</button></>)
                        : (<><h3 className="payment-form-title">Page not found</h3>
                        <button className="payment-form-button">GO BACK</button></>)
                    }
                </div>
            </div>
        );
    };

}

export default PaymentError;