import React, {Component} from "react";

class CartItem extends Component{

    render(){
        const {item, itemQuantity} = this.props;
        return(
            <>
                <img 
                    className="store-duck-image" 
                    src={item.image} 
                    alt="duck">
                </img>
                
                <h3>{item.name} ${item.price}</h3>
                <h3>{itemQuantity}</h3>
            </>
        );
    };

}

export default CartItem;



// import React, {Component} from 'react';

// class CartItem extends Component{
  
//     state = {
//       quantity: 1
//     }
  
//     increment = e => {
//       this.setState({
//         quantity: this.state.quantity + 1
//       })
//     }
  
//     decrement = e => {
//       this.setState({
//         quantity: this.state.quantity - 1
//       })
//     }
        
//     render () {
//       const {cartItem, deleteCartItem} = this.props
//       return (
//         <div className="cart-item">
//             <div className="cart-item item">
//               <img src={cartItem.image} alt={`${cartItem.image}`} />
//               <p>{cartItem.brand}</p>
//             </div>
//             <div className="cart-item price">
//               ${cartItem.price}*{this.state.quantity}
//             </div>
//             <div className="cart-item quantity">
//               <button onClick={this.increment}>+</button>
//               {this.state.quantity}
//               <button onClick={this.decrement}>-</button>
//               <button onClick={() => deleteCartItem(cartItem)}>Remove</button>
//             </div>
//         </div>
//       );
//     }
//   };
  
//   export default CartItem;

//   import React, {Component} from "react";
// import {Link} from "react-router-dom";

// class Item extends Component{

//     render(){
//         const {item} = this.props;
//         return(
//             <Link className="item" to={`/store/${item.id}`}>
//                 <img 
//                     className="store-duck-image" 
//                     src={item.image} 
//                     alt="duck">
//                 </img>
                
//                 <h3>{item.name} ${item.price}</h3>
//             </Link>
//         );
//     };

// }

// export default Item;