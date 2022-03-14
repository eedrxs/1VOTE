import React from "react";

const Finish = ({ onFinishUp }) => {
  return (
    <button
      onClick={onFinishUp}
      className="block mx-auto w-80 lg:w-96 h-16 bg-mblue hover:bg-dmblue text-bkblue font-bold font-sans text-xl rounded-xl"
    >
      Finish
    </button>
  );
};

export default Finish;
