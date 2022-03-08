import React, { Component } from "react";
import PollDetails from "./form/pollDetails";
class PollSetup extends Component {
  state = {
    pollTitle: null,
    pollCode: null,
    startTime: null,
    endTime: null,
    categories: [
      {
        id: null,
        name: null,
        candidates: [{ id: null, name: null, votes: null }]
      }
    ],
    voters: [],
    pollType: null
  };

  handleTitle = pollTitle => {
    this.setState({ pollTitle });
    console.log(pollTitle);
  };

  handlePollCode = pollCode => {
    this.setState({ pollCode });
    console.log(pollCode);
  };

  render() {
    return (
      <main className="bg-bkblue w-screen h-screen box-border pt-10 font-mono">
        <form className="flex flex-col mx-auto w-80 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue">
          <PollDetails
            onTitle={this.handleTitle}
            onPollCode={this.handlePollCode}
          />
        </form>
      </main>
    );
  }
}

export default PollSetup;
