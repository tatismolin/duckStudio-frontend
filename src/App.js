import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Store from "./components/Store";
import ItemInfo from "./components/ItemInfo";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Authorization from "./components/Authorization";
import Default from "./components/Default";

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
          });
        }) 
    }
  };

  loginUser = (user) => {
    this.setState({
        user
    });
  };

  logoutUser = () => {
    this.setState({
      user: null
    });
  };

  addToCart = (item) => {
    console.log("item", item)
    if(localStorage.token){
      if(this.state.addedItems.find(cartItem => cartItem.id === item.id)){
      }else{
        this.setState({
          addedItems: [...this.state.addedItems, item]
        })
        }
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
    }
  };

  render(){
    const {user, addedItems} = this.state;
    return (
      <Router>
        <div className="app">
          <Navigation loggedIn={user} user={user} loginUser={this.loginUser} logoutUser={this.logoutUser} addedItems={addedItems} />
          <div className="content">
            <Switch>
          <Route path="/auth" render={(props) => <Authorization {...props} loggedIn={user} user={user} loginUser={this.loginUser} logoutUser={this.logoutUser} />} />
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" render={(props) => <Login {...props} user={user} loginUser={this.loginUser} logoutUser={this.logoutUser} />} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/store/:id" render={(props) => <ItemInfo {...props} addToCart={this.addToCart} />} />
              <Route path="/cart" render={(props) => <Cart {...props} addedItems={addedItems} />} />
              <Route path="/checkout" render={(props) => <Checkout {...props} addedItems={addedItems} />} />
              <Route component={Default} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
  
}

export default App;
