import React, {Component} from "react";
import Picture from "./Picture";
import About from "./About";
import Store from "./Store";
import Contact from "./Contact";
import Footer from "./Footer";


class Home extends Component {

    render(){
        return (
            <div className="home" id="home">
                <Picture />
                <div id="section1"></div>
                <About />
                <div id="section2"></div>
                <Store />
                <div id="section3"></div>
                <Contact />
                {/* <Footer /> */}
            </div>
        );
    };

}

export default Home;