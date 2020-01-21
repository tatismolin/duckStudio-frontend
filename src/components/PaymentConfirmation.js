import React, {Component} from "react";
import "./../styles/Default.css";

class PaymentConfirmation extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="default">
                {loggedIn
                    ? <h3>Thank you! Your payment was successful!</h3>
                    : <h3>Page not found</h3>
                }
            </div>
        );
    };

}

export default PaymentConfirmation;