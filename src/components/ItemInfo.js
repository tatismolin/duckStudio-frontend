import React, {Component} from "react";
import "./../styles/ItemInfo.css";
import {Link} from "react-router-dom";

class ItemInfo extends Component{
    
    state = {
        item: {}
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
        addToCart(item);
    };

    render(){
        const {item} = this.state;
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
                                <div class="item-text">
                                <h3>{item.name}</h3> 
                                <h4>${item.price}</h4>
                                <p>{item.description}</p>
                            </div>
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
                                                to="/store"
                                                type="submit">
                                                    <button className="option-button">NO, keep shopping</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="#popup1"
                                className="add-button"
                                type="submit" 
                                onClick={this.handleClick}>
                                    Add to Cart
                            </a>
                        </div>
                      </div>) 
                    : null
                }
                <div className="additional-item-info">
                    <div className="item-info-column">
                        <h3>PRODUCT INFO</h3>
                        <p>
                            This Rubber Duck is a perfect companion for code debugging, selfies or bath taking. 
                            Take it with you wherever you go and have fun! 
                            This Duck measures approximately 2.5"L x 2.5"W x 2.5"H.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="item-info-column">
                        <h3>SHIPPING INFO</h3>
                        <p>
                            Each Duck is hand packed and shipped within 2-3 days. US shipping only. No international shipping is currently available.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="item-info-column">
                        <h3>RETURNS & REFUNDS</h3>
                        <p>
                            No Returns or Refunds are currently available at this Store. Buy at your own risk.
                        </p>
                    </div>
                </div>
            </div>
        );
    };

}

export default ItemInfo;