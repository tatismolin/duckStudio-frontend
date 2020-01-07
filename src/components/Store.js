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
        console.log("my user", this.props.user)
        const {items} = this.state;
        return(
            <div className="store">
                <h2>Store</h2>
                <ItemsContainer items={items} />
                {/* <h3>You don't have access to this part of the website!</h3> */}
                }
            </div>
        );
    };

}

export default Store;