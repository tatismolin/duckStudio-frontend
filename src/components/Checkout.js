import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {toast} from "react-toastify";
import Item from "./Item";
import {Link} from "react-router-dom";
import './../styles/Checkout.css';


function Checkout({quantities, addedItems, user, deleteItem}){

    const calculateSubTotal = () => {
        let newArray = [];
        let tax = parseInt("8.31%") / 100;
        let shipping = parseInt("9.99");

        quantities.map(item => {
            if(user.id === item.user_id){
                return newArray = [...newArray, item.quantity];
            }
        });

        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        if(quantities.length > 0)
            return(((sum * 99) + tax) + shipping);
    };

    const calculatePriceTotal = () => {
        let newArray = [];
        quantities.map(item => {
            if(user.id === item.user_id){
                return newArray = [...newArray, item.quantity]
            }
        });

        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum * 99
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
        });
        console.log(response)
        const {status} = response.formData;
        if(status === "success"){
            toast("Success! Check your email.",
                {type: "success"})
        }else{
            toast("Something went wrong.",
                {type: "error"})
        }
    };

    const displayAddedItems = () => {
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id;
            });
            return(
                <div className="checkout-item">
                    <div >
                        <Item key={item.id} item={item}/>
                    <div className="checkout-item-div">
                        <button className="checkout-button-q">Quantity: {itemQuantity.quantity}</button>
                        <button className="checkout-button-q">Price: ${itemQuantity.quantity * 99}</button>
                    </div>
                 
                    </div>
                </div>               
            );
        });
    };

    const loggedIn = localStorage.getItem("token");
    return(
            <div className="item-cart-container">
                <div className="item-links">
                    <Link to="/">Home /</Link>
                    <Link to="/cart">Cart /</Link>
                    <p3>Checkout</p3>
                </div>
        {/* {loggedIn && user
            ? (<> */}
                <div className="checkout-items">
                    {displayAddedItems()}
                </div>
                <div className="checkout-other">
                <button className="checkout-button-q">Tax: 8.31%</button>
                <button className="checkout-button-q">Total: ${calculatePriceTotal()}</button>
                <button className="checkout-button-q">Shipping: $9.99</button>
                <button className="checkout-button-q">SubTotal: ${calculateSubTotal()}</button>
                    <hr/>
                    <StripeCheckout 
                        stripeKey="pk_test_n25VuFBwG0P8arNmqBOWXehY00B8Jc6bdi"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                    />
                </div>
              {/* </>)                  
            : <h3>Page not found</h3>
        } */}
        </div>
    );

}

export default Checkout;