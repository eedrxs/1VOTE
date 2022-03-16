import React, { useState, useEffect } from "react";
import PollDetails from "./pollDetails";
import Categories from "./categories";
import { getPollDetails } from "./services/pollData";

const page = "bg-bkblue w-full h-full box-border pt-10 pb-10";

const Poll = () => {
  const [pollDetails, setPollDetails] = useState(getPollDetails());

  const {
    pollTitle,
    pollAddress,
    startTime,
    endTime,
    categories,
    isBasicPoll
  } = pollDetails;

  useEffect(async () => {
    // let _pollDetails = Object.assign({}, pollDetails);
    // _pollDetails.startTime = new Date(_pollDetails.startTime * 1000).toString();
    // _pollDetails.endTime = new Date(_pollDetails.endTime * 1000).toString();
    // let pos = _pollDetails.startTime.indexOf("GMT");
    // _pollDetails.startTime = _pollDetails.startTime.slice(0, pos - 1);
    // // setPollDetails(_pollDetails);
    // console.log(_pollDetails.startTime.toString());
  });

  return (
    <main className={page}>
      <div className="flex flex-col h-screen w-80 xs:w-22/1 lg:w-96 font-mono text-mblue mx-auto">
        <PollDetails
          pollTitle={pollTitle}
          pollAddress={pollAddress}
          startTime={startTime}
          endTime={endTime}
        />

        <Categories categories={categories} isBasicPoll={isBasicPoll} />
      </div>
    </main>
  );
};

export default Poll;
