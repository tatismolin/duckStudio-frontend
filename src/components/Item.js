import React from "react";
import {Link} from "react-router-dom";
import ItemInfo from "./ItemInfo";

function Item({item}){

    const passItemInfo = () => {
        return(
            <ItemInfo 
                key={item.id} 
                item={item} 
            />
        );
    };

    return(
        <div className="item">
            <Link to={`/store/${item.id}`}>
                <h3>{item.name}</h3>
            </Link>
            <h3>${item.price}</h3>
            <img src={item.image} alt="duck-image"></img>
            
            {passItemInfo}
        </div>
    );

}

export default Item;