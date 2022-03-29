import React, { useState, useEffect, useRef } from "react";
import getWeb3 from "../getWeb3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  POLL_ABI,
  POLLFACTORY_ABI,
  POLLFACTORY_ADDRESS
} from "../contracts/config";
import { Redirect } from "react-router-dom";
import handleError from "./services/handleError";

const JoinPoll = ({ onPollAccess }) => {
  const pollCodeInput = useRef();
  const [redirect, setRedirect] = useState(false);
  const [isJoiningPoll, setJoiningPoll] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [pollFactoryContract, setPollFactoryContract] = useState(null);
  const [pollCode, setPollCode] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const pollFactoryContract = new web3.eth.Contract(
          POLLFACTORY_ABI,
          POLLFACTORY_ADDRESS
        );
        setWeb3(web3);
        setAccount(accounts[0]);
        setPollFactoryContract(pollFactoryContract);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    })();
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
      .catch(error => {
        setJoiningPoll(false);
        handleError(error);
      });
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
          type="button"
          onClick={() => {
            setJoiningPoll(true);
            getPollAddress();
          }}
          disabled={isJoiningPoll}
          className="block py-5 bg-mblue hover:bg-dmblue font-medium text-white text-center text-xl rounded-2xl mt-5"
        >
          {isJoiningPoll ? <FontAwesomeIcon icon={faSpinner} spin /> : "Join"}
        </button>
      </div>
    </main>
  );
};

export default JoinPoll;
