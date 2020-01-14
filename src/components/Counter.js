import React from "react";

function Counter({count, increment, decrement}){
    return(
        <div className="item-counter">
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;