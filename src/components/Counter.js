import React from "react";

function Counter({itemQuantity, deleteItem, increase, decrease, itemId, item}){

    return(
        <div className="item-counter">
            <h3>{itemQuantity}</h3>
            <button onClick={() => increase(itemId, item)}>+</button>
            {itemQuantity === 1
                ? <button onClick={() => deleteItem(item)}>❌</button>
                : <button onClick={() => decrease(itemId)}>-</button>
            }
        </div>
    );
}

export default Counter;