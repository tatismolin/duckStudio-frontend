import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";

class Cart extends Component{

    displayAddedItems = () => {
        let {addedItems, quantities} = this.props;
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id;
            })

            const increase = () => {
                const increase = () => {
                    let max = 5;
                    if(itemQuantity === 5){
                        return max;
                    }else{
                        return itemQuantity + 1;
                    } 
                };
                // increase(itemQuantity)
            };
        
            const decrease = () => {
                const decrease = () => {
                    let min = 0;
                    if(itemQuantity === 0){
                        return min *= -1;
                    }else{
                        return itemQuantity - 1;
                    }
                };
                // decrease(itemQuantity)
            };

            const {deleteItem} = this.props;
            return(
                <div>
                    <Item item={item} />
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
        return sum * 2;
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
                        <Link to="/checkout" render={(props) => 
                            <Checkout {...props} 
                                addedItems={addedItems} 
                                quantities={quantities} 
                            />}>
                                
                                Checkout
                        </Link>
                        </div>)                  
                    : <h3>Please login to view your Cart</h3>
                }
            </>
        );
    };

}

export default Cart;






 // displayAddedItems = () => {
    //     let {addedItems} = this.props;
    //     let {quantities} = this.state;
    //     for(let i = 0; i < quantities.length; i++){
    //         let item = [];
    //          addedItems.forEach(product => {
    //             if (product.id === quantities[i].item_id){
    //                 item = product;
    //             }
    //         });
    //             return(
    //                 <div>
    //                    <Item key={item.id} item={item} />
    //                     <p>{quantities[i].quantity}</p>
    //                 </div>
    //             );
    //     }
    // };

    // displayAddedItems = () => {
    //     let {addedItems} = this.props;
    //     let {quantities} = this.state;
    //     for(let i = 0; i < quantities.length; i++){
    //         let item = [];
    //          addedItems.forEach(product => {
    //             if (product.id === quantities[i].item_id){
    //                 item = product;
    //             }
    //         });
    //             return(
    //                 <div>
    //                    <Item key={item.id} item={item} />
    //                     <p>{quantities[i].quantity}</p>
    //                 </div>
    //             );
    //     }
    // };