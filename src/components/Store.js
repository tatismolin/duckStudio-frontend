import React, {Component} from "react";
import "./../styles/Store.css";
import ItemsContainer from "./ItemsContainer";
import Search from "./Search";


class Store extends Component{

    state = {
        items: [],
        searchTerm: ""
    };

    componentDidMount(){
        fetch("https://duck-studio.herokuapp.com/items")
            .then(response => response.json())
            .then(response => response)
            .then(items => {
                this.setState({
                    items
                });
            }) 
    };

    updateSearchTerm = (searchTerm) => {
        this.setState({searchTerm});
    };

    filteredItems = () => {
        const {items, searchTerm} = this.state;
            return(items.filter(item => {
            return(item.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            }));
    };


    render(){
        const {searchTerm, items} = this.state;
        return(
            <div className="store">
                <Search 
                    searchTerm={searchTerm}
                    updateSearchTerm={this.updateSearchTerm}
                />
                <ItemsContainer 
                    filteredItems={this.filteredItems()} 
                    items={items} />
            </div>
        );
    };

}

export default Store;