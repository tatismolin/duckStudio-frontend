import React, {Component} from "react";
import Item from "./Item";

class Cart extends Component{

    state = {
        cartItems: []
    };

    addItems = (addedItems) => {
        // console.log("props", this.props)
        this.setState({
            cartItems: this.props.addedItems
        })
    };

    render(){
        return(
            <div>
                <p>Shopping Cart</p>
                {/* <Item /> */}
            </div>
        );
    };

}

export default Cart;