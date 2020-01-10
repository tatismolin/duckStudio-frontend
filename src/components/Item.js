import React, {Component} from "react";
import {Link} from "react-router-dom";
import Counter from "./Counter";

class Item extends Component{

    state = {
        count: 0
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

    render(){
        const {count} = this.state;
        const {item} = this.props;
        return(
            <div className="item">
                <Link to={`/store/${item.id}`}>
                    <h3>{item.name}</h3>
                    <h3>${item.price}</h3>
                    <img src={item.image} alt="duck-image"></img>
                </Link>
                <Counter 
                    count={count} 
                    increment={this.increment}
                    decrement={this.decrement}          
                />
            </div>
        );
    };

}

export default Item;