import React, {Component} from "react";
import ItemsContainer from "./ItemsContainer";

class Store extends Component{

    state = {
        items: []
    };

    componentDidMount(){
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(response => response)
            .then(items => {
                this.setState({
                    items
                });
            }) 
    };

    render(){
        const {items} = this.state;
        return(
            <div className="store" id="store">
                <ItemsContainer items={items} />
            </div>
        );
    };

}

export default Store;