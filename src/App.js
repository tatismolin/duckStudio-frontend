import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Store from "./components/Store";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ItemInfo from "./components/ItemInfo";
import Cart from "./components/Cart";

class App extends Component{

  state = {
    user: null,
    addedItems: []
  };

  componentDidMount(){
    if(localStorage.token){
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(user => {
          this.setState({
            user,
            addedItems: user.items
          })
        }) 
    }
  };

  loginUser = (user) => {
    this.setState({
        user
    })
  };

  logoutUser = () => {
      this.setState({
        user: null
      })
  };

  addToCart = (item) => {
    if(localStorage.token){
      this.setState({
        addedItems: [...this.state.addedItems, item]
      })
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user.id,
          item_id: item.id
        })
      })
        .then(response => response.json())
    }
  };

  render(){
    return (
      <Router>
        <Switch>
          <div className="app">
            <Navigation loggedIn={this.state.user} user={this.state.user} loginUser={this.loginUser} logoutUser={this.logoutUser} addedItems={this.state.addedItems} />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" render={(props) => <Login {...props} user={this.state.user} loginUser={this.loginUser} logoutUser={this.logoutUser} />} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/store/:id" render={(props) => <ItemInfo {...props} addToCart={this.addToCart} />} />
            <Route path="/cart" render={(props) => <Cart {...props} addedItems={this.state.addedItems} />} />
          </div>
        </Switch>
      </Router>
    );
  };
  
}

export default App;
