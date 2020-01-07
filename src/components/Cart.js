import React, {Component} from "react";
import Item from "./Item";

class Cart extends Component{

    state = {
        cartItems: []
    };

    displayAddedItems = () => {
        const newItem = this.props.addedItems.map(addedItem => {
            return(
                <Item addedItem={addedItem} />
            );
        });
        this.setState({
            cartItems: [...this.state.cartItems, newItem]
        })
    };
            
    render(){
        console.log(this.state.cartItems)
        return(
            <div className="cart">
                <h2>Shopping Cart</h2>
                {this.displayAddedItems}
                {/* <h3>You don't have access to this part of the website!</h3> */}
            </div>
        );
    };

}

export default Cart;