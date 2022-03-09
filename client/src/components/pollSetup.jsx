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
    categories: [
      {
        name: "Basic",
        candidates: ["Samuel Ajayi Onafuye", "Walter Nnaji"]
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

  handleAddCandidate = (categoryId, candidate) => {
    let categories = [...this.state.categories];
    categories[categoryId].candidates.push(candidate);
    this.setState({ categories });
    console.log(candidate);
  };

  handleRemoveCandidate = (categoryId, candidateId) => {
    let categories = [...this.state.categories];
    categories[categoryId].candidates.splice(candidateId, 1);
    this.setState({ categories });
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
            categories={this.state.categories}
            onPollType={this.handlePollType}
            onAddCandidate={this.handleAddCandidate}
            onRemoveCandidate={this.handleRemoveCandidate}
          />
        </form>
      </main>
    );
  }
}

export default PollSetup;
