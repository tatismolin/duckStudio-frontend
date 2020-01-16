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
        return addedItems.map(item => {
            let itemQuantity = quantities.sort(sortById).find((userItem) => {
                return userItem.item_id === item.id;
            })

            // const increase = () => {
            //     const increase = () => {
            //         let max = 5;
            //         if(itemQuantity === 5){
            //             return max;
            //         }else{
            //             return itemQuantity + 1;
            //         } 
            //     };
            //     // increase(itemQuantity)
            // };
        
            // const decrease = () => {
            //     const decrease = () => {
            //         let min = 0;
            //         if(itemQuantity === 0){
            //             return min *= -1;
            //         }else{
            //             return itemQuantity - 1;
            //         }
            //     };
            //     // decrease(itemQuantity)
            // };

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
        const {quantities} = this.props;
        let newArray = [];
        quantities.map(item => {
            return newArray = [...newArray, item.quantity];
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum;
    };
    
    calculatePriceTotal = () => {
        const {quantities} = this.props;
        let newArray = [];
        quantities.map(item => {
            return newArray = [...newArray, item.quantity]
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

        const {addedItems, quantities} = this.props;
        const loggedIn = localStorage.getItem("token");
        return(
            <>
                {loggedIn
                    ? (<div className="cart">
                        {this.displayAddedItems()} 
                        <h3>Total items in your Cart: {this.calculateItemTotal()}</h3>
                        <h3>Price Total: ${this.calculatePriceTotal()}</h3>
                        {addedItems.length > 0
                        ? <Link to="/checkout" render={(props) =>
                            <Checkout {...props} 
                                addedItems={addedItems} 
                                quantities={quantities} 
                            />}>
                            
                            Checkout
                          </Link>
                        : null
                        }
                        </div>)                  
                    : <h3>Please login to view your Cart</h3>
                }
            </>
        );
    };

}

export default Cart;