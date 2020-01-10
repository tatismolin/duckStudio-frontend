import React, {Component} from "react";
import {Link} from "react-router-dom";

class Item extends Component{

    render(){
        const {item} = this.props;
        return(
            <div className="item">
                <Link to={`/store/${item.id}`}>
                    <h3>{item.name}</h3>
                    <h3>${item.price}</h3>
                    <img src={item.image} alt="duck-image"></img>
                </Link>
            </div>
        );
    };

}

export default Item;