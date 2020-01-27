import React, {Component} from "react";
import "./../styles/Navigation.css";
import {Link} from "react-router-dom";
import {LinkX} from "react-scroll";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'



class Navigation extends Component{

    state = {
        displayMenu: null
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : " "
        }));
    };

    render(){
        const {loggedIn} = this.props;
        return(
            <>
            <div className="nav">
                <Link 
                    className="app-name"
                    to="/">
                        DUCK STUDIO
                </Link>
                <img 
                    onClick={() => this.setState({displayMenu: !this.state.displayMenu})} 
                    className="menu-icon" 
                    src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" 
                    alt="menu">
                </img>

                {this.state.displayMenu
?     <SlideDown className={'my-dropdown-slidedown'} >
                    {this.props.open ? this.props.children : null}

                    <div className="menu-content">
                    {/* <h3><LinkX to="section0">Home</LinkX></h3>
                    <h3><LinkX 
                        to="section1" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}> 
                            Store
                    </LinkX></h3>
                    <h3><LinkX 
                        to="section2" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}>
                            Contact
                    </LinkX></h3> */}
                <div className="user-row" className="menu-row" >
                
                    {loggedIn
                        ? <button 
                            className="auth-button logout" 
                            onClick={() => localStorage.removeItem("token")}><Link to="/login">
                                Logout
                        </Link></button>
                        : <div className="auth-buttons">
                            <button className="auth-button"><Link to="/signup">Signup</Link></button>
                            <button className="auth-button"><Link to="/login">Login</Link></button>
                        </div>
                    }

                <Link to="/myprofile">
                    <img 
                        className="profile-icon" 
                        src="https://cdn4.iconfinder.com/data/icons/humans-3/66/user_person_human_avatar_head_shoulders-512.png" 
                        alt="profile">
                    </img>
                </Link>
                    </div>

                    <Link className="menu-row" to="/cart">
                        <img 
                            className="cart-icon" 
                            src="https://cdn.onlinewebfonts.com/svg/img_379399.png" 
                            alt="cart">
                        </img>
                    </Link>
                </div>
                </SlideDown>
                : null
            }
                            </div>

</>
        );
    };

}

export default Navigation;

