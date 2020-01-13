import React, {Component} from "react";
import Cart from "./Cart";

class Checkout extends Component{
    
    render(){
        console.log("props", this.props)
        return(
            <div className="checkout">
                <h2>This is checkout</h2>
                <Cart addedItems={this.props.addedItems} quantities={this.props.quantities} />
                <h3>Shipping: $9.99</h3>
                <h3>Tax: 8.31%</h3>
                <h3>SubTotal: </h3>
                <h3>{this.props.calculateItemTotal()}</h3>
            </div>
        );
    };

}

export default Checkout;