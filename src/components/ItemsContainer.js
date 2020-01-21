import React from "react";
import Item from "./Item";

function ItemsContainer({items, filteredItems}){

    const foundItems = () => {
            return filteredItems.map(item => {
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
            {foundItems()}
        </div>
    );

}

export default ItemsContainer;