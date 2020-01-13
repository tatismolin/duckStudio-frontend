import React, {Component} from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import Checkout from "./Checkout";

class Cart extends Component{

    state = {
        // cartItems: [],
        quantities: []
    };

    componentDidMount(){
        fetch(`http://localhost:3000/show`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(items => items.map(item => {
                return this.setState({
                    quantities: [...this.state.quantities, item]
                    })
            }))
    }


       
    // displayAddedItemsQuantity = () => {
    //     return this.state.cartItems.map(item => {
    //         return(
    //             <div>
    //                 {/* <Item key={item.id} item={item} /> */}
    //                 <h3>Quantity: {item.quantity} </h3>
    //             </div>
    //         );
    //     });
    // };
    handleClick = () => {
        fetch(`http://localhost:3000/delete`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
    }

    displayAddedItems = () => {
        let {addedItems} = this.props;
        let {quantities} = this.state;
        let newArray = addedItems.map((item, i) => Object.assign({}, item, quantities[i]))
        // const mergeById = (addedItems, quantities) => {
        //     return addedItems.map(item => ({
        //         ...quantities.find((item) => (item.id === item.id) && item),
        //         ...item
        //     }));
        // };
        console.log("NA", newArray)
        return newArray.map(item => {
            item.id = item.item_id
        // mergeById(addedItems, quantities).map(item => {
            return(
                <div>
                    <Item item={item} />
                    {/* <Counter 
                        count={item.quantity}
                        increment={this.increment}
                        decrement={this.decrement}          
                    /> */}
                    <p>{item.quantity}</p>
                    <button onClick={() => this.handleClick()}>Delete Item from your Cart</button>
                </div>
            );
        });
    };

    calculateItemTotal = () => {
        let newArray = []
        this.state.quantities.map(item => {
            return newArray = [...newArray, item.quantity]
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum;
    };
    
    calculatePriceTotal = () => {
    //     let newArray = []
    //     this.props.addedItems.map(item => {
    //         return newArray = [...newArray, item.price]
    //     })  
    //     console.log("NA", newArray)
    let newArray = []
        this.state.quantities.map(item => {
            return newArray = [...newArray, item.quantity]
        });
        let sum = 0;
        for(let i = 0; i < newArray.length; i++) {
            sum += newArray[i];
        }
        return sum * 2;
    };

    // increment = () => {
    //         const {count} = this.state;
    //         const increase = () => {
    //             let max = 5;
    //             if(count === 5){
    //                 return max;
    //             }else{
    //                 return count + 1;
    //             } 
    //         };
    //         this.setState({count: increase(count)});
    //     };
        
    //     decrement = () => {
    //         const {count} = this.state;
    //         const decrease = () => {
    //             let min = 0;
    //             if(count === 0){
    //                 return min *= -1;
    //             }else{
    //                 return count - 1;
    //             }
    //         };
    //         this.setState({count: decrease()});
    //     };

    // displayAddedItems = () => {
    //     let {addedItems} = this.props;
    //     let {quantities} = this.state;
    //     for(let i = 0; i < quantities.length; i++){
    //         let item = [];
    //          addedItems.forEach(product => {
    //             if (product.id === quantities[i].item_id){
    //                 item = product;
    //             }
    //         });
    //             return(
    //                 <div>
    //                    <Item key={item.id} item={item} />
    //                     <p>{quantities[i].quantity}</p>
    //                 </div>
    //             );
    //     }
    // }

    // displayAddedItems = () => {
    //     let {addedItems} = this.props;
    //     let {quantities} = this.state;
    //     for(let i = 0; i < quantities.length; i++){
    //         let item = [];
    //          addedItems.forEach(product => {
    //             if (product.id === quantities[i].item_id){
    //                 item = product;
    //             }
    //         });
    //             return(
    //                 <div>
    //                    <Item key={item.id} item={item} />
    //                     <p>{quantities[i].quantity}</p>
    //                 </div>
    //             );
    //     }
    // };

    
    // displayAddedItems = () => {
    //     let x = this.state.quantities.find(xItem => xItem.item_id);
    //     return this.props.addedItems.map(item => {
    //         if(x.item_id === item.id){
    //             return(
    //                 <div>
    //                     <Item key={item.id} item={item} />
    //                     <p>{x.quantity}</p>
    //                 </div>
    //             );
    //             }
    //     });
    // };
            
    render(){
        console.log("quantities",this.state.quantities)
        console.log("addedItems",this.props.addedItems)
        console.log("total",this.calculateItemTotal)
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                {loggedIn
                    ? (<>
                        {this.displayAddedItems()} 
                        <h2>Total items in your Cart: {this.calculateItemTotal()}</h2>
                        <h2>Price Total: ${this.calculatePriceTotal()}</h2>
                    <Link to="/checkout" render={(props) => <Checkout {...props} addedItems={this.props.addedItems} />}>Checkout</Link>
                      </>)                  
                    : <h3>Please login or signup to view the Cart.</h3>
                }
            </div>
        );
    };

}

export default Cart;


// import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import Item from "./Item";
// // import Counter from "./Counter";

// class Cart extends Component{

//     state = {
//         cartItems: []
//         // count: 0
//     };

//     componentDidMount(){
//         fetch(`http://localhost:3000/user_items/188`, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         })
//             .then(response => response.json())
//             // .then(response => console.log("response", response))
//             // .then(item => console.log(item[0]));
//             // .then(items => console.log(items));
//             // .then(items => items.map(item => console.log(item)));
//             // .then(items => items.map(item => {
//             //     this.setState({quantity: item.quantity})
//             // }));
//             .then(items => this.setState({cartItems: items}))
//     }
       
//     displayAddedItemsQuantity = () => {
//         return this.state.cartItems.map(item => {
//             return(
//                 <div>
//                     {/* <Item key={item.id} item={item} /> */}
//                     <h3>Quantity: {item.quantity} </h3>
//                 </div>
//             );
//         });
//     };

//     displayAddedItems = () => {
//         return this.props.addedItems.map(item => {
//             return(
//                 <div>
//                     <Item key={item.id} item={item} />
//                 </div>
//             );
//         });
//     };
            
//     render(){
//         // console.log("cartItems",this.state.cartItems)
//         const loggedIn = localStorage.getItem("token");
//         return(
//             <div className="cart">
//                 {loggedIn
//                     ? (<>
//                         {this.displayAddedItems()} 
//                         {this.displayAddedItemsQuantity()}
//                         <Link to="/checkout">Checkout</Link>
//                       </>)                  
//                     : <h3>Please login or signup to view the Cart.</h3>
//                 }
//             </div>
//         );
//     };

// }

// export default Cart;








//   console.log("addedItems", this.props.addedItems)
    //   const {addedItems} = this.props;
    //   // const {count} = this.state;
    //   return addedItems.map(item => {
    //       return(
    //           <div>
    //               <Item key={item.id} item={item} />
    //               <h3>Quantity: {item.quantity}</h3>
    //               {/* <Counter 
    //                   co unt={count} 
    //                   increment={this.increment}
    //                   decrement={this.decrement}          
    //               /> */}
    //           </div>
    //       );
    //   });
    // };

    // increment = () => {
    //     const {count} = this.state;
    //     const increase = () => {
    //         let max = 5;
    //         if(count === 5){
    //             return max;
    //         }else{
    //             return count + 1;
    //         } 
    //     };
    //     this.setState({count: increase(count)});
    // };
    
    // decrement = () => {
    //     const {count} = this.state;
    //     const decrease = () => {
    //         let min = 0;
    //         if(count === 0){
    //             return min *= -1;
    //         }else{
    //             return count - 1;
    //         }
    //     };
    //     this.setState({count: decrease()});
    // };

    // displayAddedItems = () => {
    //     fetch(`http://localhost:3000/show_cart`, {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       }
    //     })
    //     .then(response => response.json())
    //     // .then(response => this.setState({
    //     //     cartItems: response
    //     // }))
    //     .then(response => console.log("response", response))
    //     console.log("addedItems", this.props.addedItems)
    //     const {addedItems} = this.props;
    //     // const {count} = this.state;
    //     return addedItems.map(item => {
    //         return(
    //             <div>
    //                 <Item key={item.id} item={item} />
    //                 <h3>Quantity: {item.quantity}</h3>
    //                 {/* <Counter 
    //                     count={count} 
    //                     increment={this.increment}
    //                     decrement={this.decrement}          
    //                 /> */}
    //             </div>
    //         );
    //     });
    // };