import React, { Component } from "react";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
import EligibleVoters from "./form/eligibleVoters";
class PollSetup extends Component {
  state = {
    pollTitle: "",
    pollCode: "",
    startTime: null,
    endTime: null,
    isBasic: true,
    categories: [
      {
        name: "",
        candidates: []
      }
    ],
    voters: []
  };

  handleTitle = pollTitle => {
    this.setState({ pollTitle });
  };

  handlePollCode = pollCode => {
    this.setState({ pollCode });
  };

  handleStartTime = startTime => {
    this.setState({ startTime });
  };

  handleEndTime = endTime => {
    this.setState({ endTime });
  };

  handlePollTypeSelect = isBasic => {
    this.setState(() => {
      if (!isBasic) {
        return { isBasic, categories: [] };
      } else {
        return { isBasic, categories: [{ name: "", candidates: [] }] };
      }
    });
  };

  handleAddCandidate = (categoryId, candidate) => {
    let categories = [...this.state.categories];
    categories[categoryId].candidates.push(candidate);
    this.setState({ categories });
  };

  handleRemoveCandidate = (categoryId, candidateId) => {
    let categories = [...this.state.categories];
    categories[categoryId].candidates.splice(candidateId, 1);
    this.setState({ categories });
  };

  handleAddCategory = name => {
    let categories = [...this.state.categories];
    categories.push({ name, candidates: [] });
    this.setState({ categories });
  };

  handleRemoveCategory = categoryId => {
    let categories = [...this.state.categories];
    categories.splice(categoryId, 1);
    this.setState({ categories });
  };

  handleVotersUpload = voters => {
    this.setState({ voters });
    console.log(voters);
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
            onPollTypeSelect={this.handlePollTypeSelect}
            onAddCandidate={this.handleAddCandidate}
            onRemoveCandidate={this.handleRemoveCandidate}
            onAddCategory={this.handleAddCategory}
            onRemoveCategory={this.handleRemoveCategory}
          />
          <EligibleVoters onVotersUpload={this.handleVotersUpload} />
        </form>
      </main>
    );
  }
}

export default PollSetup;
