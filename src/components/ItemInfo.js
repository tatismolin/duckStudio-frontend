import React, {Component} from "react";
import {Link} from "react-router-dom";

class ItemInfo extends Component{
    
    state = {
        item: {},
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

    handleClick = () => {
        const {addToCart} = this.props;
        const {item, displayCart} = this.state;
        addToCart(item);
        this.setState({
            displayCart: !displayCart
        });
    };

    render(){
        const {item, displayCart} = this.state;
        return(
            <div className="item">
                <h3>ITEM DESCRIPTION</h3>
                {item.id 
                    ? (<>
                        <img src={item.image} alt="duck"></img>
                        <h3>{item.name}</h3> 
                        <h3>${item.price}</h3>
                        <p>{item.description}</p>
                        <button
                            type="submit" 
                            onClick={this.handleClick} >

                                Add
                        </button>
                      </>) 
                    : null
                }
                
                {displayCart
                    ? (<>
                        <h3>Do you want to proceed to the shopping cart?</h3>
                        <div className="choose-buttons">
                            <Link
                                to="/cart"
                                type="submit">
                             
                                    Yes!
                            </Link>
                            <Link
                                to="/"
                                type="submit">
                                    
                                    No, keep shopping!
                            </Link>
                        </div>
                      </>)
                    : null
                }
            </div>
        );
    };

}

export default ItemInfo;