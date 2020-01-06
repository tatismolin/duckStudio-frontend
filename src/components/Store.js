import React, {Component} from "react";
import ItemsContainer from "./ItemsContainer";

class Store extends Component{

    state = {
        items: []
    };

    componentDidMount(){
        fetch("http://localhost:3000/items", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items: items
                })
            }) 
    };

    render(){
        return(
            <div>
                <p>Store</p>
                <ItemsContainer items={this.state.items} />
            </div>
        );
    };

}

export default Store;