import React, { Component } from "react";
import Web3 from "web3";
import { Redirect } from "react-router-dom";
import { POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../config";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
import EligibleVoters from "./form/eligibleVoters";
import Finish from "./form/finish";
class PollSetup extends Component {
  constructor() {
    super();
    this.loadBlockchainData();
  }

  state = {
    redirect: false,
    account: "",
    // web3: new Web3(Web3.givenProvider || "http://localhost:7545"),
    pollFactoryContract: null,
    pollCode: "",
    pollTitle: "",
    startTime: null,
    endTime: null,
    categories: [
      {
        name: "",
        candidates: []
      }
    ],
    voters: [],
    isBasic: true
  };

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const network = await web3.eth.net.getNetworkType();
    await window.ethereum.enable();
    const accounts = await web3.eth.requestAccounts();
    this.setState({ account: accounts[0] });
    const pollFactoryContract = new web3.eth.Contract(
      POLLFACTORY_ABI,
      POLLFACTORY_ADDRESS
    );
    console.log(pollFactoryContract);
    this.setState({ pollFactoryContract });
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

  handleFinishUp = () => {
    const {
      pollTitle,
      pollCode,
      startTime,
      endTime,
      categories,
      voters,
      isBasic,
      account,
      // web3,
      pollFactoryContract
    } = this.state;

    const encodedCategories = categories.map((category, index) => {
      let arrayCategory = Object.values(category);
      arrayCategory.unshift(index);
      arrayCategory.splice(2, 0, 0);
      arrayCategory[3] = arrayCategory[3].map((candidate, index) => [
        index,
        candidate,
        0
      ]);

      return arrayCategory;
    });

    console.log(pollFactoryContract);

    pollFactoryContract.methods
      .createPoll(
        pollCode,
        pollTitle,
        startTime,
        endTime,
        encodedCategories,
        voters,
        isBasic
      )
      .send({ from: account, gas: 3000000 })
      .then(
        receipt => {
          console.log("Successful transaction:", receipt);
          this.setState({ redirect: true });
        },
        error => console.log(error)
      );
  };

  render() {
    const page = "bg-bkblue w-full h-full box-border pt-10 pb-10 font-mono";
    const form =
      "flex flex-col mx-auto mb-5 w-80 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

    if (this.state.redirect) return <Redirect push to="/join-poll" />;

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
        <Finish onFinishUp={this.handleFinishUp} />
      </main>
    );
  }
}

export default PollSetup;
