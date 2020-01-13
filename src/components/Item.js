import React, {Component} from "react";
import {Link} from "react-router-dom";

class Item extends Component{



    render(){
        const {item} = this.props;
        return(
                <Link className="item" to={`/store/${item.id}`}>
                    <img className="duck-item" src={item.image} alt="duck"></img>
                    <h3>{item.name} ${item.price}</h3>
                </Link>
        );
    };

}

export default Item;