import React from "react";
import "./../styles/Search.css";

function Search(props){

    const updateSearchTerm = (event) => {
        props.updateSearchTerm(event.target.value);
    };

    return (
        <form className="search">
            <input
                type="search"
                placeholder="Search for a duck..."
                onChange={updateSearchTerm}
            />
        </form>
    );

}

export default Search;