import React, { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import { POLL_ABI, POLLFACTORY_ABI, POLLFACTORY_ADDRESS } from "../config";
import { Redirect } from "react-router-dom";

const JoinPoll = ({ onPollAccess }) => {
  const pollCodeInput = useRef();
  const [redirect, setRedirect] = useState(false);
  const [account, setAccount] = useState("");
  const [pollCode, setPollCode] = useState("");
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const pollFactoryContract = new web3.eth.Contract(
    POLLFACTORY_ABI,
    POLLFACTORY_ADDRESS
  );

  useEffect(async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }, []);

  const getPollAddress = async () => {
    const pollCode = pollCodeInput.current.value;
    setPollCode(pollCode);

    pollFactoryContract.methods
      .getPollAddress(pollCode)
      .call({
        from: account,
        gas: 3000000
      })
      .then(pollAddress => {
        const pollContract = new web3.eth.Contract(POLL_ABI, pollAddress);
        pollContract.methods
          .getPollDetails()
          .call({ from: account, gas: 3000000 })
          .then(pollDetails => {
            onPollAccess(
              pollCode,
              pollContract,
              pollAddress,
              pollDetails,
              account
            );
            setRedirect(true);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  if (redirect) return <Redirect push to={`/join-poll/${pollCode}`} />;

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
