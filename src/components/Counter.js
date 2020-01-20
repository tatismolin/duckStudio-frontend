import React from "react";

function Counter({itemQuantity, deleteItem, increase, decrease, itemId, item}){

    return(
        <div className="item-counter">
            {itemQuantity === 1
                ? <button className="counter-button hover" onClick={() => deleteItem(item)}>🗑</button>
                : <button className="counter-button hover" onClick={() => decrease(itemId)}>➖</button>
            }
            <button className="counter-button">{itemQuantity}</button>
            <button className="counter-button hover" onClick={() => increase(itemId, item)}>➕</button>
        </div>
    );
}

export default Counter;