import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { POLL_ABI, POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../config";

const JoinPoll = () => {
  const pollCodeInput = useRef();
  const [account, setAccount] = useState("");
  const [pollAddress, setPollAddress] = useState("");
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const pollFactory = new web3.eth.Contract(
    POLLFACTORY_ABI,
    POLLFACTORY_ADDRESS
  );
  let poll = "";

  useEffect(async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }, []);

  useEffect(() => {
    console.log("Poll Address: ", pollAddress);
    console.log("Poll: ", poll);
    // poll.methods
    //   .getPollDetails()
    //   .call({
    //     from: account,
    //     gas: 3000000
    //   })
    //   .then(console.log);
  }, [pollAddress]);

  const getPollAddress = async () => {
    pollFactory.methods
      .getPollAddress(pollCodeInput.current.value)
      .call({
        from: account,
        gas: 3000000
      })
      .then(address => {
        poll = new web3.eth.Contract(POLL_ABI, address);
        poll.methods
          .getPollDetails()
          .call({ from: account, gas: 3000000 })
          .then(details => {
            console.log(details);
          })
          .catch(console.log);
        setPollAddress(address);
      })
      .catch(console.log);
  };

  return (
    <main className="bg-bkblue h-screen w-screen">
      <div className="flex flex-col h-screen w-80 mx-auto">
        <p className="block font-sans font-medium text-2xl text-mblue mt-40 mx-auto w-11/0">
          Enter poll code:
        </p>
        <input
          type="text"
          ref={pollCodeInput}
          className="block border-2 border-mblue rounded-2xl focus:outline-none focus:ring-2 font-bold text-xl text-mblue text-center py-5 px-3 mt-44 sm:mt-60"
        />
        <button
          onClick={getPollAddress}
          type="button"
          className="block py-5 bg-mblue hover:bg-dmblue font-medium text-white text-center text-xl rounded-2xl mt-5"
        >
          Join
        </button>
      </div>
    </main>
  );
};

export default JoinPoll;
