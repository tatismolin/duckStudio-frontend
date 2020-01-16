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
                    item
                });
            }) 
    };

    handleClick = () => {
        const {addToCart} = this.props;
        const {item, displayCart} = this.state;
        console.log("itemInfo", item)
        addToCart(item);
        this.setState({
            displayCart: !displayCart
        });
    };

    render(){
        const {item, displayCart} = this.state;
        return(
            <>
                {item.id 
                    ? (<div className="item item-info">
                        <img 
                            className="store-duck-image" 
                            src={item.image} 
                            alt="duck"> 
                        </img>
                        <h3>{item.name}</h3> 
                        <h3>${item.price}</h3>
                        <p>{item.description}</p>
                        <button
                            type="submit" 
                            onClick={this.handleClick} >

                                Add
                        </button>
                      </div>) 
                    : null
                }
                
                {displayCart
                    ? (<>
                        <h3>Do you want to proceed to the shopping cart?</h3>
                        <div className="option-buttons">
                            <Link
                                to="/cart"
                                type="submit">
                             
                                    <button className="option-button">Yes!</button>
                            </Link>
                            <Link
                                to="/"
                                type="submit">
                                    
                                    <button className="option-button">Keep shopping!</button>
                            </Link>
                        </div>
                      </>)
                    : null
                }
            </>
        );
    };

}

export default ItemInfo;