import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Cart from "./Cart";
import {toast} from "react-toastify";

function Checkout({quantities, addedItems}){

    const calculateSubTotal = () => {
        let newArray = [];
        let tax = parseInt("8.31%") / 100;
        let shipping = parseInt("9.99");

        quantities.map(item => {
            return newArray = [...newArray, item.quantity];
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        if(quantities.length > 0)
            return(((sum * 99) + tax) + shipping);
    };

    async function handleToken(token){
        const response = await fetch("http://localhost:3000/charges", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                token
            })
        })
        const {status} = response.formData
        if(status === "success"){
            toast("Success! Check your email.",
                {type: "success"})
        }else{
            toast("Something went wrong.",
                {type: "error"})
        }
    };
    
    const loggedIn = localStorage.getItem("token");
    return(
        <div className="checkout">
        {loggedIn
            ? (<>
                <Cart 
                    addedItems={addedItems} 
                    quantities={quantities} 
                />
                <h3>Tax: 8.31%</h3>
                <h3>Shipping: $9.99</h3>
                <h3>SubTotal: ${calculateSubTotal()} </h3>
                <StripeCheckout 
                    stripeKey="pk_test_n25VuFBwG0P8arNmqBOWXehY00B8Jc6bdi"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                />
                </>)                  
            : <h3>Page not found</h3>
        }
        </div>
    );


}

export default Checkout;