import React from "react";
import Item from "./Item";

function ItemsContainer({items}){

    const sortById = (a, b) => {
        if(a.id > b.id){
            return 1;
        }
        if(a.id < b.id){
            return -1;
        }
        return 0;
    };

    const displayItems = () => {
        return items.sort(sortById).map(item => {
            return(
                <Item 
                    key={item.id} 
                    item={item} 
                />
            );
        });
    };

    return(
        <div className="items-container">
            {displayItems()}
        </div>
    );

}

export default ItemsContainer;