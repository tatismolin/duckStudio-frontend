import "./App.css";
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import ItemInfo from "./components/ItemInfo";

class App extends Component {

  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route path="/store/:id" component={ItemInfo} />
          </Switch>
        </div>
      </Router>
    );
  };

}

export default App;
