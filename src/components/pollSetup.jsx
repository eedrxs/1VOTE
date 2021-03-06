import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../contracts/config";
import PollDetails from "./form/pollDetails";
import Duration from "./form/duration";
import TypeAndCandidates from "./form/typeAndCandidates";
import EligibleVoters from "./form/eligibleVoters";
import Finish from "./form/finish";
import ConnectModal from "./connectModal";
import getRevertReason from "eth-revert-reason";
class PollSetup extends Component {
  constructor(props) {
    super(props);
    this.state.account = props.account;
    this.state.web3 = props.web3;
    this.state.onConnect = props.onConnect;
  }

  state = {
    redirect: false,
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
    const { web3, account } = this.state;
    if (!account) return;

    try {
      const pollFactoryContract = new web3.eth.Contract(
        POLLFACTORY_ABI,
        POLLFACTORY_ADDRESS
      );
      this.setState({ pollFactoryContract });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details. Is your browser Metamask-enabled?`
      );
      console.error(error);
    }
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    const { account, web3 } = nextProps;
    if (!account) return;
    this.setState({ account, web3 });

    try {
      const pollFactoryContract = new web3.eth.Contract(
        POLLFACTORY_ABI,
        POLLFACTORY_ADDRESS
      );
      this.setState({ pollFactoryContract });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details. Is your browser Metamask-enabled?`
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
      <React.Fragment>
        {this.state.account ? null : (
          <ConnectModal onConnect={this.state.onConnect} />
        )}
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
      </React.Fragment>
    );
  }
}

export default PollSetup;
