import React, {Component} from "react";
import "./../styles/Cart.css";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";

class Cart extends Component{
    
    displayAddedItems = () => {
        const {addedItems, quantities, deleteItem, increase, decrease} = this.props;
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id;
            });
            return(
                <div className="cart-item">
                    <Item key={item.id} item={item} />

                    <div className="cart-item-bottom">
                        <Counter 
                            itemId={item.id}
                            item={item}
                            deleteItem={deleteItem}
                            increase={increase}
                            itemQuantity={itemQuantity.quantity}
                            decrease={decrease}          
                        />
                        <button className="item-delete-button" onClick={() => deleteItem(item)}>REMOVE</button>   
                        <button className="item-save-button">SAVE FOR LATER</button>   
                    </div>               
                </div>               
            );
        });
    };

    calculateItemTotal = () => {
        const {user} = this.props;
        if(user){
            const {quantities} = this.props;
            let newArray = [];
            quantities.map(item => {
                if(user.id === item.user_id){
                    return newArray = [...newArray, item.quantity];
                }
            });
            let sum = 0;
            for(let i = 0; i < newArray.length; i++) {
                sum += newArray[i];
            }
            return sum;
        }
    };
    
    calculatePriceTotal = () => {
        const {quantities, user} = this.props;
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
        return sum * 99;
    };
            
    render(){
        const {addedItems, quantities, user} = this.props;
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart-items-container">
                <div className="item-links">
                    <Link to="/">Home /</Link>
                    <h3 className="current-link">My Cart</h3>
                </div>

                {loggedIn && user
                    ? (<>
                        <div className="cart-items">
                            {this.displayAddedItems()} 
                        </div>
                        <div className="cart-payment">
                            <h3 className="cart-title">Your total: </h3>
                            <div className="cart-flex">
                                <button className="cart-total">Total quantity: </button>
                                <button className="cart-total total-number">{this.calculateItemTotal()}</button>
                            </div>
                            <div className="cart-flex">
                                <button className="cart-total">Total Price: </button>
                                <button className="cart-total total-number">${this.calculatePriceTotal()}</button>
                            </div>
                            {addedItems.length > 0 
                                ? <button className="checkout-button"><Link to="/checkout" render={(props) =>
                                    <Checkout {...props} 
                                        addedItems={addedItems} 
                                        quantities={quantities} 
                                    />}>
                                        PROCEED TO CHECKOUT
                                </Link></button>
                                : <h3 className="empty-cart">Your Cart is empty</h3>
                            }
                        </div>
                      </>)                  
                    : <h3>Please login to view your Cart</h3>
                }

            </div>
        );
    };

}

export default Cart;