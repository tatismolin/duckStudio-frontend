import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";
import Checkout from "./Checkout";

class Cart extends Component{

    handleClick = () => {
        fetch(`http://localhost:3000/delete`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
    };

    displayAddedItems = () => {
        let {addedItems, quantities} = this.props;
        return addedItems.map(item => {
            let itemQuantity = quantities.find((userItem) => {
                return userItem.item_id === item.id
            })
            return(
                <div>
                    <Item item={item} />
                    <Counter 
                        count={itemQuantity.quantity}
                        increment={this.increment}
                        decrement={this.decrement}          
                    />
                    <button onClick={() => this.handleClick()}>Delete Item from your Cart</button>
                </div>
            );
        });
    };

    calculateItemTotal = () => {
        let newArray = [];
        this.props.quantities.map(item => {
            return newArray = [...newArray, item.quantity]
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum;
    };
    
    calculatePriceTotal = () => {
        let newArray = [];
        this.props.quantities.map(item => {
            return newArray = [...newArray, item.quantity]
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum * 2;
    };

    increment = () => {
        const {count} = this.state;
        const increase = () => {
            let max = 5;
            if(count === 5){
                return max;
            }else{
                return count + 1;
            } 
        };
        this.setState({
            count: increase(count)
        });
    };

    decrement = () => {
        const {count} = this.state;
        const decrease = () => {
            let min = 0;
            if(count === 0){
                return min *= -1;
            }else{
                return count - 1;
            }
        };
        this.setState({
            count: decrease()
        });
    };
            
    render(){
        console.log("addedItems", this.props.addedItems)
        console.log("quantities", this.props.quantities)

        const {addedItems, quantities} = this.props;
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                {loggedIn
                    ? (<>
                        {this.displayAddedItems()} 
                        <h2>Total items in your Cart: {this.calculateItemTotal()}</h2>
                        <h2>Price Total: ${this.calculatePriceTotal()}</h2>
                        <Link to="/checkout" render={(props) => 
                            <Checkout {...props} 
                                addedItems={addedItems} 
                                quantities={quantities} 
                            />}>
                                
                                Checkout
                        </Link>
                      </>)                  
                    : <h3>Please login or signup to view the Cart.</h3>
                }
            </div>
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