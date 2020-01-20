import React, {Component} from "react";
import "./../styles/Home.css";
import Picture from "./Picture";
import About from "./About";
import Store from "./Store";
import Contact from "./Contact";



class Home extends Component {

    render(){
        return (
            <div className="home">
                <Picture />
                <About />
                <div id="section1"></div>
                <Store />
                <div id="section2"></div>
                <Contact />
            </div>
        );
    };

}

export default Home;