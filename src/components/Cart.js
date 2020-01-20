import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";
import './../styles/Cart.css';

class Cart extends Component{

   
    
    displayAddedItems = () => {
        let {addedItems, quantities, increase, decrease} = this.props;
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id;
            });
            console.log("IQ", quantities)

            const {deleteItem} = this.props;
            return(
                <div >
                    <div className="cart-item">
                    <Item key={item.id} item={item} />
                    </div>
                    <div className="cart-item-div">
                    <Counter 
                        itemId={item.id}
                        item={item}
                        deleteItem={this.props.deleteItem}
                        increase={increase}
                        itemQuantity={itemQuantity.quantity}
                        decrease={decrease}          
                    />
                    <button className="item-delete-button" onClick={() => deleteItem(item)}>REMOVE</button>   
                    <button className="item-save-button" >SAVE FOR LATER</button>   
                
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
        return sum * 99
    };
            
    render(){
        const {addedItems, quantities, user, deleteItem} = this.props;
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="item-cart-container">
                <div className="item-links">
                    <Link to="/">Home /</Link>
                    <p3>My Cart</p3>
                </div>
                {loggedIn && user
                    ? (<>
                    <div className="items-container2">

                        {this.displayAddedItems()} 
                    </div>
                    <div className="other">
                    <button className="checkout-button-q">Total quantity: {this.calculateItemTotal()}</button>
                    <button className="checkout-button-q">Total Price: ${this.calculatePriceTotal()}</button>
                        <hr/>
                        {addedItems.length > 0 
                        ? <button className="checkout-button"><Link to="/checkout" render={(props) =>
                            <Checkout {...props} 
                                addedItems={addedItems} 
                                quantities={quantities} 
                            />}>
                            
                            PROCEED TO CHECKOUT
                             </Link></button>
                        : <h3>Your Cart is empty</h3>
                    }
                    </div>
                </>
                        )                  
                    : <h3>Please login to view your Cart</h3>
                }

            </div>
            // </div>
        );
    };

}

export default Cart;