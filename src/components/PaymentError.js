import React, {Component} from "react";
import "./../styles/Default.css";

class PaymentError extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="default">
                <div className="default-form-content">
                    {loggedIn
                        ? (<><h3 className="default-form-title">Unable to process this payment.</h3>
                        <button className="default-form-button">HOME PAGE</button></>)
                        : (<><h3 className="default-form-title">Page not found</h3>
                        <button className="default-form-button">GO BACK</button></>)
                    }
                </div>
            </div>
        );
    };

}

export default PaymentError;