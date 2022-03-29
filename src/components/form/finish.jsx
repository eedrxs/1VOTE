import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Finish = ({ onFinishUp, isSettingUp, onSettingUp }) => {
  return (
    <button
      type="button"
      disabled={isSettingUp}
      onClick={() => {
        onSettingUp();
        onFinishUp();
      }}
      className="block mx-auto w-80 lg:w-96 h-16 bg-mblue hover:bg-dmblue text-bkblue font-bold font-sans text-xl rounded-xl"
    >
      {isSettingUp ? <FontAwesomeIcon icon={faSpinner} spin /> : "Finish"}
    </button>
  );
};

export default Finish;
