import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/homePage";
import PollSetup from "./components/pollSetup";
import JoinPoll from "./components/joinPoll";
import Poll from "./components/poll";
class App extends Component {
  state = {
    pollCode: "new",
    pollContract: null,
    pollDetails: null,
    account: null
  };

  handlePollAccess = (pollCode, pollContract, pollDetails, account) => {
    this.setState({ pollCode, pollContract, pollDetails, account });
    console.log("Poll Accessed!", pollCode);
  };

  render() {
    const { pollCode } = this.state;
    console.log("Rerendered: ", pollCode);

    return (
      <div className="content">
        <Switch>
          <Route path="/poll-setup" component={PollSetup}></Route>
          <Route
            path={`/join-poll/${pollCode}`}
            render={props => <Poll data={this.state} {...props} />}
          ></Route>
          <Route
            path="/join-poll"
            render={props => (
              <JoinPoll onPollAccess={this.handlePollAccess} {...props} />
            )}
          ></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
