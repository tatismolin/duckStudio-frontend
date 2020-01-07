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
        const {items} = this.state;
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="store">
                <h2>Store</h2>
                {loggedIn
                    ? <ItemsContainer items={items} />
                    : <h3>You don't have access to this part of the website!</h3>
                }
            </div>
        );
    };

}

export default Store;