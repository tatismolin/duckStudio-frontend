import React, {Component} from "react";
import Item from "./Item";

class Cart extends Component{

    state = {
        cartItems: []
    };
    
    // componentDidMount(){
    //     if(localStorage.token){
    //     fetch("http://localhost:3000/cart", {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         // .then(items => items.map(item => {
    //         //     this.setState({
    //         //         cartItems: [...this.state.cartItems, item]
    //         //     })
    //         // })) 
    //     }
    // };

    displayAddedItems = () => {
        const {addedItems} = this.props;
        return addedItems.map(item => {
            return(
                <Item item={item} />
            );
        });
    };
            
    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                <h2>Shopping Cart</h2>
                {loggedIn
                    ? this.displayAddedItems()
                    : <h3>You don't have access to this part of the website!</h3>
                }
            </div>
        );
    };

}

export default Cart;