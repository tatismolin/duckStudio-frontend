import React from "react";
import "./../styles/Search.css";

function Search(props){

    const updateSearchTerm = (event) => {
        props.updateSearchTerm(event.target.value);
    };

    return (
        <div className="search">
            <input
                className="search-inside"
                type="search"
                placeholder="Search for a duck..."
                onChange={updateSearchTerm}
            />
        </div>
    );

}

export default Search;