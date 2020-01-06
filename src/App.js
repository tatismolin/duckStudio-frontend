import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Store from "./components/Store";
import ItemInfo from "./components/ItemInfo";

class App extends Component {

  state = {
    user: null
  };

  loginUser = (token) => {
      return (
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
        <Router>
          <Navigation loggedIn={user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route path="/store/:id" component={ItemInfo} />
            <Route path="/signup" component={Signup} />
            <Route path="/login">
              <Login loginUser={this.loginUser} logoutUser={this.logoutUser} user={user} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };

}

export default App;
