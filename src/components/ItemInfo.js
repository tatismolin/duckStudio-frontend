import React, {Component} from "react";
import {Link} from "react-router-dom";

class ItemInfo extends Component{
    
    state = {
        item: {}
        // displayCart: false
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
        // this.setState({
        //     displayCart: !displayCart
        // });
    };

    render(){
        const {item, displayCart} = this.state;
        return(
            <div className="item-info-container">
                <div className="item-links">
                    <Link to="/">Home / </Link>
                    <p3>{item.name}</p3>
                </div>
                {item.id 
                    ? (<div className="item-info-all">
                        <div className="item item-info-left">
                        <img 
                            className="store-duck-image item-info-image" 
                            src={item.image} 
                            alt="duck"> 
                        </img>

                        </div>
                        <div className="item-info-middle"></div>
                        <div className="item-info-right">
                            <h3>{item.name}</h3> 
                            <h4>${item.price}</h4>
                            <p>{item.description}</p>
                            
                    <div id="popup1" className="overlay">
                        	<div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">

                        <h3>Do you want to proceed to the shopping cart?</h3>
                        <div className="option-buttons">
                            <Link
                                to="/cart"
                                type="submit">
                             
                                    <button className="option-button">YES!</button>
                            </Link>
                            <Link
                                to="/"
                                type="submit">
                                    
                                    <button className="option-button">NO, keep shopping</button>
                            </Link>
                        </div>
                        </div>

                        </div>
                      </div>
                        <a
                                className="button" href="#popup1"
                                className="add-button"
                                type="submit" 
                                onClick={this.handleClick} >

                                    Add to Cart
                            </a>
                        </div>
                      </div>) 
                    : null
                }
                
                
                <div className="additional-info">
                    <div className="column">
                    <h3>PRODUCT INFO</h3>
                    <p>
                    I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
                    </p>
                    </div>
                    <div className="divider"></div>
                    <div className="column">
                    <h3>RETURN & REFUND POLICY</h3>
                    <p>
                    I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                    </p>
                    </div>
                    <div className="divider"></div>
                    <div className="column">
                    <h3>SHIPPING INFO</h3>
                    <p>
                    I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                    </p>
                    </div>
                </div>
            </div>
        );
    };

}

export default ItemInfo;