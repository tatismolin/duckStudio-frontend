import React from "react";

function Counter({itemQuantity, increase, decrease}){
    return(
        <div className="item-counter">
            <h3>{itemQuantity}</h3>
            <button onClick={() => increase(itemQuantity)}>+</button>
            <button onClick={() => decrease(itemQuantity)}>-</button>
        </div>
    );
}

export default Counter;