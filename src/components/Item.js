import React from "react";
import {Link} from "react-router-dom";
import ItemInfo from "./ItemInfo";

function Item({item}){

    const passItemInfo =() => {
        return(
            <ItemInfo key={item.id} item={item} />
        );
    };

    return(
        <div>
            <Link to={`/store/${item.id}`}>
                <p>{item.name}</p>
            </Link>
            {passItemInfo}
        </div>
    );

}

export default Item;