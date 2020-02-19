import "./App.css";

import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Default from "./components/Default";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Store from "./components/Store";
import ItemInfo from "./components/ItemInfo";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import IconBar from "./components/IconBar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Shipping from "./components/Shipping";
import Payments from "./components/Payments";
import Policy from "./components/Policy";
import UserProfile from "./components/UserProfile";
import PaymentConfirmation from "./components/PaymentConfirmation";
import PaymentError from "./components/PaymentError";
import Popup from "./components/Popup";

let herokuURL = `https://duck-studio.herokuapp.com`;
let localhostURL = `http://localhost:3000`;


class App extends Component{
  
  state = {
    user: null,
    addedItems: [],
    quantities: []
  };

  sum = (num1, num2) => {
    return num1 + num2;
  };

  getProfile = () => {
    fetch(`${localhostURL}/profile`, {
    // fetch(`${herokuURL}/profile`, {
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
    this.getQuantities();
  };

  componentDidMount(){
    if(localStorage.token){
      this.getProfile();
    }
  };

  loginUser = (user) => {
    this.getProfile();
    this.setState({
        user
    });
  };

  logoutUser = () => {
    this.setState({
      user: null
    });
  };

  getQuantities = () => {
    fetch(`${localhostURL}/show`, {
    // fetch(`${herokuURL}/show`, {
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
    const {addedItems, quantities, user} = this.state;
    if(localStorage.token){
      if(addedItems.find(cartItem => cartItem.id === item.id)){
        this.increase(item.id);
      }else{
        this.setState({
          addedItems: [...addedItems, {...item, quantity: 1}]
        });
      }
      fetch(`${localhostURL}/cart`, {
      // fetch(`${herokuURL}/cart`, {
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
      .then(newItem => {
        this.setState({
          quantities: [...quantities, newItem]
        })
      })
    }
  };

  // addToCart = (item) => {
  //   const {addedItems, quantities, user} = this.state;
  //   if(localStorage.token){
  //     if(addedItems.find(cartItem => cartItem.id === item.id)){
  //       const updatedItem = quantities.find(userItem => {
  //         return item.id === userItem.item_id;
  //       });
  //       this.setState({
  //         quantities: [...quantities, updatedItem.quantity += 1]
  //       });
  //     }else{
  //       this.setState({
  //         addedItems: [...addedItems, {...item, quantity: 1}],
  //         quantities: [...quantities, {user_id: user.id, item_id: item.id, quantity: 1}]
  //       });
  //     }
  //     fetch(`${herokuURL}/cart`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //       },
  //       body: JSON.stringify({
  //         user_id: this.state.user.id,
  //         item_id: item.id
  //       })
  //     })
  //   }
  // };


  deleteItem = (item) => {
    const {quantities, addedItems} = this.state;
    const remainingItems = quantities.filter(newItem => {
      return newItem.item_id !== item.id;
    });
    const newAddedItems = addedItems.filter(newItem => {
      return newItem !== item;
    });
    this.setState({
      quantities: remainingItems,
      addedItems: newAddedItems
    });
    const deletedItem = quantities.find(userItem => {
      return item.id === userItem.item_id;
    });
    fetch(`${localhostURL}/user_items/${deletedItem.id}`, {
    // fetch(`${herokuURL}/user_items/${deletedItem.id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
  };

  increase = (itemId) => {
    const {quantities} = this.state;
    const updatedItem = quantities.find(item => {
      return item.item_id === itemId;
    });
    updatedItem.quantity += 1;
    const notUpdatedItems = quantities.filter(item => {
      return item.id !== updatedItem.id;
    });
    this.setState({
      quantities: [...notUpdatedItems, updatedItem]
    });
    fetch(`${localhostURL}/cart`, {
    // fetch(`${herokuURL}/cart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user.id,
          item_id: itemId,
          step: "add"
        })
      })
};

  decrease = (itemId) => {
    const {quantities, addedItems} = this.state;
    const updatedItem = quantities.find(item => {
      return item.item_id === itemId;
    });
    updatedItem.quantity -= 1;
    const notUpdatedItems = quantities.filter(item => {
      return item.id !== updatedItem.id;
    });
    const newAddedItems = addedItems.filter(newItem => {
      return newItem !== itemId;
    });
    this.setState({
      quantities: [...notUpdatedItems, updatedItem],      
      addedItems: newAddedItems
    })
    fetch(`${localhostURL}/cart`, {
    // fetch(`${herokuURL}/cart`, {
      method: "POST",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
           "Content-Type": "application/json",
          "Accept": "application/json"
      },
        body: JSON.stringify({
          user_id: this.state.user.id,
          item_id: itemId,
          step: "subtract"
      })
  });
};    

  render(){
    const loggedIn = localStorage.getItem("token");
    const {user, addedItems, quantities} = this.state;
    return(
      <Router>
        <div className="app">
          <Navigation 
            user={user} 
            loggedIn={user} 
            loginUser={this.loginUser} 
            logoutUser={this.logoutUser} 
            addedItems={addedItems} 
          />
          

          <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/payments" component={Payments} />
            <Route path="/myprofile" component={UserProfile} />
            <Route path="/confirmation" component={PaymentConfirmation} />
            <Route path="/error" component={PaymentError} />
            <Route path="/popup" component={Popup} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/store" component={Store} />
            
            <Route path="/login" render={(props) => 
              <Login {...props} 
                user={user} 
                loginUser={this.loginUser} 
                logoutUser={this.logoutUser} 
              />} 
            />

            <Route exact path="/store/:id" render={(props) => 
              <ItemInfo {...props} 
                addToCart={this.addToCart} 
                />} 
            />

            <Route path="/cart" render={(props) => {
              return quantities.length > 0
                ? <Cart {...props} 
                    user={user}
                    addedItems={addedItems} 
                    quantities={quantities} 
                    deleteItem={this.deleteItem}
                    decrease={this.decrease}
                    increase={this.increase}
                  />
                  : (<div className="default">
                    {loggedIn
                      ? <h3>Your cart is empty</h3>
                      : <h3>Please login first</h3> 
                    }
                    </div>)
            }}/>

            <Route path="/checkout" render={(props) => {
              return this.state.quantities.length > 0
              ? <Checkout {...props} 
              user={user} 
              loggedIn={user} 
              addedItems={addedItems} 
              quantities={quantities} 
              deleteItem={this.deleteItem}
              />
              : <Redirect to="/" />
            }}/>
            
            <Route component={Default} />
          </Switch>
          </div>
        </div>
      <Footer />
      <IconBar />
      </Router>
    );
  };
  
}

export default App;