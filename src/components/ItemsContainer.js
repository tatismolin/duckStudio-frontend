import React from "react";
import Item from "./Item";

function ItemsContainer({items}){

    const sortByName = (a, b) => {
        if(a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        return 0;
    };

    const displayItems = () => {
        return items.sort(sortByName).map(item => {
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