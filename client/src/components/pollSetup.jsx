import React, { Component } from "react";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
class PollSetup extends Component {
  state = {
    pollTitle: "",
    pollCode: "",
    startTime: null,
    endTime: null,
    isBasic: true,
    categoriesAndCandidates: [
      {
        id: 0,
        name: "Basic",
        candidates: [{ id: 0, name: "Samuel Ajayi Onafuye" }]
      }
    ],
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

  handlePollType = isBasic => {
    this.setState({ isBasic });
    console.log(isBasic);
  };

  handleRemoveCandidate = (categoryID, candidateID) => {
    // this.setState({ candidate });
    console.log(categoryID, candidateID);
  };

  render() {
    const page = "bg-bkblue w-full h-full box-border pt-10 pb-10 font-mono";
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
            isBasic={this.state.isBasic}
            categoriesAndCandidates={this.state.categoriesAndCandidates}
            onPollType={this.handlePollType}
            onRemoveCandidate={this.handleRemoveCandidate}
          />
        </form>
      </main>
    );
  }
}

export default PollSetup;
