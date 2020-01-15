import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import {StripeProvider, Elements} from "react-stripe-elements";
import Default from "./components/Default";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Authorization from "./components/Authorization";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Store from "./components/Store";
import ItemInfo from "./components/ItemInfo";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
// import Payment from "./components/Payment";

class App extends Component{

  state = {
    user: null,
    addedItems: [],
    quantities: []
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
    this.getQuantities();
  };

  getQuantities = () => {
    fetch(`http://localhost:3000/show`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
      .then(response => response.json())
      .then(items => {
        this.setState({
          quantities: items
        });
      })
  };

  addToCart = (item) => {
    if(localStorage.token){
      if(this.state.addedItems.find(cartItem => cartItem.id === item.id)){
        const updatedItem = this.state.quantities.find(user_item => {
          return item.id === user_item.item_id;
        });
        this.setState({
          quantities: [...this.state.quantities, updatedItem.quantities + 1]
        });
      }else{
        this.setState({
          addedItems: [...this.state.addedItems, item]
        });
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

  deleteItem = (item) => {
    const quantities = this.state.quantities.filter(user_item => {
      return user_item.id !== item.id;
    });
    this.setState({
      quantities
    });
    const deletedItem = this.state.quantities.find(user_item => {
      return item.id === user_item.item_id;
    });
    fetch(`http://localhost:3000/user_items/${deletedItem.id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
  };

  render(){
    const {user, addedItems, quantities} = this.state;
    return(
      <Router>
        <div className="app">
          {/* <StripeProvider apiKey="pk_test_n25VuFBwG0P8arNmqBOWXehY00B8Jc6bdi">
            <Elements>
              <Route path="/payment" component={Payment} />
            </Elements>
          </StripeProvider> */}

          <Navigation 
            user={user} 
            loggedIn={user} 
            loginUser={this.loginUser} 
            logoutUser={this.logoutUser} 
            addedItems={addedItems} 
          />
          
          <div className="app-content">
          <Switch>
            <Route path="/auth" render={(props) => 
              <Authorization {...props} 
                user={user} 
                loggedIn={user} 
                loginUser={this.loginUser} 
                logoutUser={this.logoutUser} 
              />} 
            />

            <Route exact path="/" component={Home} />

            <Route path="/signup" component={Signup} />

            <Route path="/login" render={(props) => 
              <Login {...props} 
                user={user} 
                loginUser={this.loginUser} 
                logoutUser={this.logoutUser} 
              />} 
            />

            <Route exact path="/store" component={Store} />

            <Route exact path="/store/:id" render={(props) => 
              <ItemInfo {...props} 
                addToCart={this.addToCart} 
              />} 
            />

            <Route path="/cart" render={(props) => {
              return this.state.quantities.length > 0
                ? <Cart {...props} 
                    addedItems={addedItems} 
                    quantities={quantities} 
                    deleteItem={this.deleteItem}
                  />
                : <h3>Loading...</h3>
              }}
            />

            <Route path="/checkout" render={(props) => {
              return this.state.quantities.length > 0
                ? <Checkout {...props} 
                  loggedIn={user} 
                  addedItems={addedItems} 
                  quantities={quantities} 
                />
                : <h3>Loading...</h3>
              }}
            />
            <Route component={Default} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  };
  
}

export default App;