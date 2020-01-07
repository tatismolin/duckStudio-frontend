import React, {Component} from "react";
import Item from "./Item";

class Cart extends Component{

    state = {
        cartItems: []
    };

    displayAddedItems = () => {
        const {addedItems} = this.props;
        const {cartItems} = this.state;
        const newItem = addedItems.map(addedItem => {
            return(
                <Item addedItem={addedItem} />
            );
        });
        this.setState({
            cartItems: [...cartItems, newItem]
        })
    };
            
    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                <h2>Shopping Cart</h2>
                {loggedIn
                    ? this.displayAddedItems
                    : <h3>You don't have access to this part of the website!</h3>
                }
            </div>
        );
    };

}

export default Cart;