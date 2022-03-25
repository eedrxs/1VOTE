import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage";
import PollSetup from "./components/pollSetup";
import JoinPoll from "./components/joinPoll";
import Poll from "./components/poll";
class App extends Component {
  state = {
    account: null,
    pollCode: null,
    pollContract: null,
    pollAddress: null,
    pollDetails: null
  };

  handlePollAccess = (
    pollCode,
    pollContract,
    pollAddress,
    pollDetails,
    account
  ) => {
    this.setState({
      pollCode,
      pollContract,
      pollAddress,
      pollDetails,
      account
    });
  };

  handlePollStatus = candidates => {
    let pollDetails = Object.assign({}, this.state.pollDetails);
    pollDetails["5"] = candidates;
    this.setState({ pollDetails });
  };

  handleVoteStatus = categoryId => {
    let pollDetails = Object.assign({}, this.state.pollDetails);
    let voteStatus = [...pollDetails["6"]];
    voteStatus[categoryId] = true;
    pollDetails["6"] = voteStatus;
    this.setState({ pollDetails });
  };

  render() {
    const { pollCode } = this.state;

    return (
      <div className="content">
        <Switch>
          {/* Poll Setup page */}
          <Route
            path="/poll-setup"
            render={props => <PollSetup {...props} />}
          ></Route>

          {/* Poll page */}
          <Route
            path={`/join-poll/${pollCode}`}
            render={props => (
              <Poll
                data={this.state}
                onPollStatus={this.handlePollStatus}
                onVoteStatus={this.handleVoteStatus}
                {...props}
              />
            )}
          ></Route>

          {/* Join Poll page */}
          <Route
            path="/join-poll"
            render={props => (
              <JoinPoll onPollAccess={this.handlePollAccess} {...props} />
            )}
          ></Route>

          {/* Homepage */}
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
