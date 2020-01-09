import React from "react";
import {Link} from "react-router-dom";
import Authorization from "./Authorization";
import Cart from "./Cart";

function Navigation(props){

    // const passProps = () => {
    //     return(
    //         <Cart addedItems={props.addedItems} loggedIn={props.user} />
    //     );
    // };
    

    return(
        <div className="navigation">
            <h2>NAVIGATION</h2>
                <h3>Store Name</h3>
                <Link to="/">Home</Link>
                <h3>About</h3>
                <h3>Store</h3>
                <h3>Contact</h3>
                <Authorization user={props.user} loginUser={props.loginUser} logoutUser={props.logoutUser} loggedIn={props.user} />
                <Link to="/cart">Cart</Link>
                {/* {passProps()} */}
        </div>
    );

}

export default Navigation;