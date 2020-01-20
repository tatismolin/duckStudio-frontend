import React from "react";
import Item from "./Item";

function ItemsContainer({items}){

    const displayItems = () => {
        return items.map(item => {
            return(
                <Item 
                    key={item.id} 
                    item={item} 
                />
            );
        });
    };

    return(
        <div className="store-items-container">
            {displayItems()}
        </div>
    );

}

export default ItemsContainer;