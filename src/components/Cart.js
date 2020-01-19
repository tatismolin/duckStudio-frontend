import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";

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
                <div>
                    <Item key={item.id} item={item} />
                    <Counter 
                        itemId={item.id}
                        item={item}
                        deleteItem={this.props.deleteItem}
                        itemQuantity={itemQuantity.quantity}
                        increase={increase}
                        decrease={decrease}          
                    />
                    <span onClick={() => deleteItem(item)} role="img" aria-label="delete">❌</span>   
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
            <div className="item-info-container">
            <div className="cart">
                {loggedIn && user
                    ? (<>
                        {this.displayAddedItems()} 
                        <h3>Total items in your Cart: {this.calculateItemTotal()}</h3>
                        <h3>Price Total: ${this.calculatePriceTotal()}</h3>
                        {addedItems.length > 0 
                        ? <Link to="/checkout" render={(props) =>
                            <Checkout {...props} 
                                addedItems={addedItems} 
                                quantities={quantities} 
                                deleteItem={deleteItem}
                            />}>
                            
                            Checkout
                          </Link>
                        : <h3>Your Cart is empty</h3>
                        }
                        </>)                  
                    : <h3>Please login to view your Cart</h3>
                }
            </div>
            </div>
        );
    };

}

export default Cart;