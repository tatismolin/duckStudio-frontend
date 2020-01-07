import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Cart from "./components/Cart";
import ItemInfo from "./components/ItemInfo";

class App extends Component{

  state = {
    user: null
  };

  loginUser = (token) => {
      return(
        localStorage.getItem("token") === "null"
        ? null
        : localStorage.getItem("token") === "undefined"
          ? null
          : this.setState({
              user: token.user
          })
      );
  };

  logoutUser = () => {
      this.setState({
        user: null
      })
  };

  render(){
    const {user} = this.state;
    return (
      <div className="app">
        <h1>Online Store</h1>
        <Router>
          <Navigation loggedIn={user} />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login">
              <Login user={user} loginUser={this.loginUser} logoutUser={this.logoutUser} />
            </Route>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/store">
              <Store loggedIn={user} />
            </Route>
            <Route exact path="/cart">
              <Cart loggedIn={user} />
            </Route>
            <Route path="/store/:id" component={ItemInfo} />
          </Switch>
        </Router>
      </div>
    );
  };

}

export default App;
