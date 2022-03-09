import React, { Component } from "react";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
class PollSetup extends Component {
  state = {
    pollTitle: null,
    pollCode: null,
    startTime: null,
    endTime: null,
    isBasic: null,
    categories: [],
    voters: []
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

  handleType = isBasic => {
    this.setState({ isBasic });
    console.log(isBasic);
  };

  handleCategories = categories => {
    this.setState({ categories });
    console.log(categories);
  };

  render() {
    const page = "bg-bkblue w-full h-screen box-border pt-10 font-mono";
    const form =
      "flex flex-col mx-auto mb-1 w-80 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

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
          <TypeAndCandidates
            onType={this.handleType}
            onCategories={this.handleCategories}
          />
        </form>
      </main>
    );
  }
}

export default PollSetup;
