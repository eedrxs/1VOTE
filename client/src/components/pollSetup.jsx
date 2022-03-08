import React, { Component } from "react";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
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

  handleStartTime = startTime => {
    this.setState({ startTime });
    console.log(startTime);
  };

  handleEndTime = endTime => {
    this.setState({ endTime });
    console.log(endTime);
  };

  render() {
    const page = "bg-bkblue w-screen h-screen box-border pt-10 font-mono";
    const form =
      "flex flex-col mx-auto w-80 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

    return (
      <main className={page}>
        <form className={form}>
          <PollDetails
            onTitle={this.handleTitle}
            onPollCode={this.handlePollCode}
          />
          <Duration
            onStartTime={this.handleStartTime}
            onEndTime={this.handleEndTime}
          />
        </form>
      </main>
    );
  }
}

export default PollSetup;
