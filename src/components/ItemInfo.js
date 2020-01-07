import React, {Component} from "react";
import {Link} from "react-router-dom";
import Cart from "./Cart";

class ItemInfo extends Component{
    
    state = {
        item: {},
        addedItems: [],
        displayCart: false
    };

    componentDidMount(){
        fetch(`http://localhost:3000/items/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(item => {
                this.setState({
                    item: item
                })
            }) 
    };

    render(){

        console.log("item", this.state.item)
        console.log("item", this.state.addedItems)
        const {item, addedItems, displayCart} = this.state;
        return(
            <div className="item">
                {item.id 
                    ? (<>
                        <h3>{item.name}</h3> 
                        <h3>${item.price}</h3>
                        <p>{item.description}</p>
                        <img src={item.image} alt="duck-image"></img>
                        <button
                            type="submit" 
                            onClick={() => this.setState({addedItems: [...addedItems, item]})}
                            onClick={() => this.setState({displayCart: !displayCart})} >

                                Add
                        </button>
                      </>) 
                    : null
                }
                {displayCart
                    ? (<>
                        <h3>Do you want to go to the shopping cart?</h3>
                        <div className="choose-buttons">
                            <Link
                                to="/cart"
                                type="submit">
                             
                                    Yes!
                            </Link>
                            <Link
                                to="/store"
                                type="submit">
                                    
                                    No, keep shiopping!
                            </Link>
                        </div>
                      </>)
                    : null
                }
                <Cart addedItems={this.state.addedItems} />
            </div>
        );
    };

}

export default ItemInfo;