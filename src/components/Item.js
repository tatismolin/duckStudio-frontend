import React, {Component} from "react";
import "./../styles/Item.css";
import {Link} from "react-router-dom";

class Item extends Component{

    render(){
        const {item} = this.props;
        return(
            <Link className="item" to={`/store/${item.id}`}>
                <img 
                    className="store-duck-image" 
                    src={item.image} 
                    alt="duck">
                </img>
                
                <h3>{item.name}</h3>
                <h4 className="price">${item.price}</h4>
            </Link>
        );
    };

}

export default Item;