import React from "react";
import "./../styles/Checkout.css";
import {Link} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {toast} from "react-toastify";
import Item from "./Item";

toast.configure()

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
        for(let i = 0; i < newArray.length; i++){
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
        for(let i = 0; i < newArray.length; i++){
            sum += newArray[i];
        }
        return sum * 99;
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
        console.log(response)        
        if (response.ok){
            window.alert("Purchase complete successfully! Please check your email!")
        }else{
            window.alert("Unable to complete purchase.")
        }

        
    };

    const displayAddedItems = () => {
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id;
            });
            return(
                <div className="checkout-item">
                        <Item key={item.id} item={item}/>
                        <div className="cart-flex">
                            <button className="cart-total checkout-item-bottom">Quantity: </button>
                            <button className="cart-total total-number checkout-item-bottom">{itemQuantity.quantity}</button>
                        </div>
                        <div className="cart-flex">
                            <button className="cart-total checkout-item-bottom">Price: </button>                 
                            <button className="cart-total total-number checkout-item-bottom">${itemQuantity.quantity * 99}</button>                 
                        </div>
                </div>               
            );
        });
    };

    const loggedIn = localStorage.getItem("token");
    return(
        <div className="checkout-items-container">
            <div className="item-links">
                <Link to="/">Home /</Link>
                <Link to="/cart">Cart /</Link>
                <p3>Checkout</p3>
            </div>
            <div className="checkout-items">
                {displayAddedItems()}
            </div>
            <div className="checkout-payment">
                <h3 className="checkout-title">Final Total</h3>
                <div className="cart-flex">
                    <button className="cart-total">Tax: </button>
                    <button className="cart-total total-number">8.31%</button>
                </div>
                <div className="cart-flex">
                    <button className="cart-total">Total: </button>
                    <button className="cart-total total-number">${calculatePriceTotal()}</button>
                </div>
                <div className="cart-flex">
                    <button className="cart-total">Shipping: </button>
                    <button className="cart-total total-number">$9.99</button>
                </div>
                <div className="cart-flex subtotal">
                    <button className="cart-total">SubTotal: </button>
                    <button className="cart-total total-number">${calculateSubTotal()}</button>
                </div>
                <StripeCheckout 
                    stripeKey="pk_test_n25VuFBwG0P8arNmqBOWXehY00B8Jc6bdi"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={calculateSubTotal() * 100}
                />
            </div>
        </div>
    );

}

export default Checkout;