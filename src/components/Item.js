import React, {Component} from "react";
import {Link} from "react-router-dom";
import ItemInfo from "./ItemInfo";
import Counter from "./Counter";

class Item extends Component{

    state = {
        count: 0
    };

    passItemInfo = () => {
        const {item} = this.props;
        return(
            <ItemInfo 
                key={item.id} 
                item={item}
            />
        );
    };
    increment = () => {
        const {count} = this.state;
        const increase = () => {
            if(count === 5){
                return "Cannot add more items";
            }else{
                return count + 1;
            } 
        };
        this.setState({count: increase(count)})
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
        this.setState({count: decrease()})
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
                {this.passItemInfo}
            </div>
        );
    };

}

export default Item;