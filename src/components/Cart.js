import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";

class Cart extends Component{
    
    displayAddedItems = () => {

        const sortById = (a, b) => {
            if(a.item_id > b.item_id){
                return 1;
            }
            if(a.item_id < b.item_id){
                return -1;
            }
            return 0;
        };

        let {addedItems, quantities} = this.props;
        console.log("cart", addedItems)
        return addedItems.map(item => {
            let itemQuantity = quantities.sort(sortById).find((userItem) => {
                return userItem.item_id === item.id;
            });

            const {deleteItem} = this.props;
            return(
                <div>
                    <Item key={item.id} item={item} />
                    <Counter 
                        itemQuantity={itemQuantity.quantity}
                        increase={this.increase}
                        decrease={this.decrease}          
                    />
                    <button onClick={() => deleteItem(item)}>❌</button>   
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
        console.log("addedItems", this.props.addedItems)
        console.log("quantities", this.props.quantities)
        console.log("user", this.props.user)
        
        const {addedItems, quantities, user, deleteItem} = this.props;
        const loggedIn = localStorage.getItem("token");
        return(
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
        );
    };

}

export default Cart;