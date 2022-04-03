import React, { Component } from "react";
import getWeb3 from "../getWeb3";
import { Redirect } from "react-router-dom";
import { POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../contracts/config";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
import EligibleVoters from "./form/eligibleVoters";
import Finish from "./form/finish";
import getRevertReason from "eth-revert-reason";
class PollSetup extends Component {
  state = {
    redirect: false,
    account: null,
    pollFactoryContract: null,
    isSettingUp: false,
    pollCode: "",
    pollTitle: "",
    startTime: "",
    endTime: "",
    categories: [
      {
        name: "",
        candidates: []
      }
    ],
    voters: [],
    isBasic: true
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const pollFactoryContract = new web3.eth.Contract(
        POLLFACTORY_ABI,
        POLLFACTORY_ADDRESS
      );
      this.setState({ account: accounts[0], pollFactoryContract });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.
        
        Is your browser ethereum-enabled?`
      );
      console.error(error);
    }
  };

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

  handleSettingUp = () => {
    this.setState({ isSettingUp: true });
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
        error => {
          getRevertReason(error.receipt.transactionHash, "kovan").then(
            message => {
              alert(message);
              this.setState({ isSettingUp: false });
            }
          );
        }
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
        <Finish
          onFinishUp={this.handleFinishUp}
          isSettingUp={this.state.isSettingUp}
          onSettingUp={this.handleSettingUp}
        />
      </main>
    );
  }
}

export default PollSetup;
