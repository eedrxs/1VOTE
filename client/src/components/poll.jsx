import React, { useState, useEffect } from "react";
import PollDetails from "./pollDetails";
import Categories from "./categories";

const page = "bg-bkblue w-full h-full box-border pt-10 pb-10";

const Poll = ({
  data: { pollContract, pollAddress, pollDetails, account }
}) => {
  const {
    1: pollTitle,
    2: startTime,
    3: endTime,
    4: categories,
    5: isBasicPoll
  } = pollDetails;

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
