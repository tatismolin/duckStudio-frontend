import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Counter from "./Counter";

class Cart extends Component{

    state = {
        cartItems: [],
        count: 0
    };

    componentDidMount(){
        this.setState({
            count: this.props.count
        });
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
        this.setState({count: increase(count)});
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
        this.setState({count: decrease()});
    };

    displayAddedItems = () => {
        const {addedItems} = this.props;
        const {count} = this.state;
        return addedItems.map(item => {
            return(
                <div>
                    <Item key={item.id} item={item} />
                    <Counter 
                        count={count} 
                        increment={this.increment}
                        decrement={this.decrement}          
                    />
                </div>
            );
        });
    };
            
    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                {loggedIn
                    ? (<>
                    {this.displayAddedItems()} 
                    <Link to="/checkout">Checkout</Link>
                    </>)                  
                    : <h3>Please login or signup to view the Cart.</h3>
                }
            </div>
        );
    };

}

export default Cart;