import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import PollSetup from "./components/pollSetup";
class App extends Component {
  state = {};

  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/poll-setup" component={PollSetup}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
