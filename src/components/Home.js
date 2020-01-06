import React, {Component} from "react";
import {Link} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

class Home extends Component {

  render(){
    return (
        <div className="home">
            <nav>
                <h1> Welcome to my Website</h1>
                <ul className="nav-links">
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/store">
                        <li>Store</li>
                    </Link>
                </ul>
            </nav>

            <div className="forms">
                <Login />
                <Signup />
            </div>
        </div>
    );
  };

}

export default Home;
