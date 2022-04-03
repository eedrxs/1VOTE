import React, { useState } from "react";
import getWeb3 from "../getWeb3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ConnectModal = ({onConnect}) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectEthereum = async () => {
    try {
      let web3 = await getWeb3();
      let accounts = await web3.eth.getAccounts();
      onConnect( accounts[0], web3);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details. Is your browser Metamask-enabled?`
      );
      console.error(error);
      setIsConnecting(false);
    }
  }

  return (
    <div className="fixed flex flex-col justify-center items-center h-screen w-screen bg-black bg-opacity-70 z-10 blurbg">
      <div className="flex flex-col items-center w-80 bg-bdblue rounded-xl pt-6 pb-6">
        <div className="font-sans text-mblue mx-auto w-11/12">
          <p className="font-bold text-center">
            Connect your Ethereum account to access the Dapp
          </p>
          <button
            type="button"
            onClick={() => {
              setIsConnecting(true);
              connectEthereum();
            }}
            className="font-500 text-xl tracking-wide bg-mblue hover:bg-dmblue text-white rounded-xl py-4 w-full mt-12"
          >
            {isConnecting ? <FontAwesomeIcon icon={faSpinner} spin /> : "Connect"}
          </button>
          <pre className="block text-xxs leading-3 mt-1">
            * Ensure you're on the Kovan testnet and that you have <br />  enough
              ether balance
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
