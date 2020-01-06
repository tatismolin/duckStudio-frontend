import React, {Component} from "react";

class ItemInfo extends Component{
    
    state = {
        item: {}
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
        return(
            <div>
                <p>{this.state.item.description}</p>
                <p>{this.state.item.price}</p>
            </div>
        );
    };

}

export default ItemInfo;