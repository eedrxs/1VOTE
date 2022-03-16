import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import getWeb3 from "./getWeb3";
import HomePage from "./components/homePage";
import PollSetup from "./components/pollSetup";
import JoinPoll from "./components/joinPoll";
import Poll from "./components/poll";
class App extends Component {
  constructor() {
    super();
    // getWeb3();
  }

  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/poll-setup" component={PollSetup}></Route>
          <Route path="/join-poll" component={JoinPoll}></Route>
          <Route path="/poll" component={Poll}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
