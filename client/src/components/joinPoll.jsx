import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JoinPoll = () => {
  return (
    <main className="bg-bkblue h-screen w-screen">
      <div className="flex flex-col h-screen w-80 mx-auto">
        <p className="block font-sans font-medium text-2xl text-mblue mt-40 mx-auto w-11/0">
          Enter poll code:
        </p>
        <input
          type="text"
          id=""
          className="block border-2 border-mblue rounded-2xl focus:outline-none focus:ring-2 font-bold text-xl text-mblue text-center py-5 px-3 mt-44 sm:mt-60"
        />
        <Link
          to="/poll"
          className="block py-5 bg-mblue hover:bg-dmblue font-medium text-white text-center text-xl rounded-2xl mt-5"
        >
          Join
        </Link>
      </div>
    </main>
  );
};

export default JoinPoll;
