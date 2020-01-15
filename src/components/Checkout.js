import React, {Component} from "react";
import Cart from "./Cart";

class Checkout extends Component{

    calculateSubTotal = () => {
        const {quantities} = this.props;
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
            return(((sum * 2) + tax) + shipping);
    };
    
    render(){
        const {addedItems, quantities} = this.props;
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
                    <h3>SubTotal: ${this.calculateSubTotal()} </h3>
                  </>)                  
                : <h3>Page not found</h3>
            }
            </div>
        );
    };

}

export default Checkout;