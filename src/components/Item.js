import React from "react";
import {Link} from "react-router-dom";
import ItemInfo from "./ItemInfo";

function Item({item}){
    console.log("this one", item)
    const passItemInfo = () => {
        return(
            <ItemInfo key={item.id} item={item} />
        );
    };

    return(
        <div className="item">
            <Link to={`/store/${item.id}`}>
                <h2>{item.name}</h2>
            </Link>
            <h2>${item.price}</h2>
            <img src={item.image} alt="duck-image"></img>
            {passItemInfo}
        </div>
    );

}

export default Item;