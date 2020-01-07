import React, {Component} from "react";
import Cart from "./Cart";

class ItemInfo extends Component{
    
    state = {
        item: {},
        addedItems: []
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
        console.log("items", this.state.addedItems)

        const {item, addedItems} = this.state;
        return(
            <div>
                {item.id ? (<>
                <h2>{item.name}</h2> 
                <h2>${item.price}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt="duck-image"></img>
                <button
                    type="submit" 
                    value="Add"
                    onClick={() => this.setState({addedItems: [...addedItems, item]})}>
                </button> 
                <Cart addedItems={addedItems} /> 
                </>
                ) : null}

            </div>
        );
    };

}

export default ItemInfo;