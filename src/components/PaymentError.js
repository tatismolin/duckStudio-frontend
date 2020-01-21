import React, {Component} from "react";
import "./../styles/Default.css";

class PaymentError extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="default">
                {loggedIn
                    ? <h3>Unable to process this payment.</h3>
                    : <h3>Page not found</h3>
                }
            </div>
        );
    };

}

export default PaymentError;