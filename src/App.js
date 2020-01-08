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
    console.log(this.state.addedItems)
    const {user, addedItems} = this.state;
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
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/store">
              <Store />
            </Route>
            <Route path="/cart">
              <Cart 
                addedItems={addedItems} 
                loggedIn={user}               
              />
            </Route>
            <Route path="/store/:id" render={(props) => <ItemInfo {...props} addToCart={this.addToCart} />} />
          </Switch>
        </Router>          
      </div>
    );
  };

}

export default App;
