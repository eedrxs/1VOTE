import React, { Component } from "react";
import Web3 from "web3";
import { POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../config";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
import EligibleVoters from "./form/eligibleVoters";
import Finish from "./form/finish";
class PollSetup extends Component {
  state = {
    account: "",
    pollFactory: null,
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

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const network = await web3.eth.net.getNetworkType();
    await window.ethereum.enable();
    const accounts = await web3.eth.requestAccounts();
    this.setState({ account: accounts[0] });
    const pollFactory = new web3.eth.Contract(
      POLLFACTORY_ABI,
      POLLFACTORY_ADDRESS
    );
    this.setState({ pollFactory });

    let pollAddress = pollFactory.methods
      .getPollAddress("SUG22")
      .call()
      .then(
        result => console.log(result),
        error => console.log(error.message)
      );
  }

  componentWillMount() {
    this.loadBlockchainData();
  }

  handleTitle = pollTitle => {
    this.setState({ pollTitle });
  };

  handlePollCode = pollCode => {
    this.setState({ pollCode });
  };

  handleStartTime = startTime => {
    startTime = new Date(startTime).getTime() / 1000.0;
    this.setState({ startTime });
  };

  handleEndTime = endTime => {
    endTime = new Date(endTime).getTime() / 1000.0;
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
  };

  handleFinishUp = () => {};

  render() {
    const page = "bg-bkblue w-full h-full box-border pt-10 pb-10 font-mono";
    const form =
      "flex flex-col mx-auto mb-5 w-80 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

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
        <Finish />
      </main>
    );
  }
}

export default PollSetup;
