import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component {

    render(){
        return (
            <div className="home">
                <nav>
                    <h2>Home</h2>
                    <ul className="home-links">
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                        <Link to="/store">
                            <li>Store</li>
                        </Link>
                        <Link to="/cart">
                            <li>Shopping Cart</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    };

}

export default Home;
