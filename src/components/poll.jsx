import React, { useState, useEffect } from "react";
import PollDetails from "./pollDetails";
import Categories from "./categories";
import getRevertReason from "eth-revert-reason";

const page = "bg-bkblue w-full h-full box-border pt-10 pb-10";

const Poll = ({
  data: { pollContract, pollAddress, pollDetails, account },
  onPollStatus,
  onVoteStatus
}) => {
  const {
    1: pollTitle,
    2: startTime,
    3: endTime,
    4: isBasicPoll,
    5: categories,
    6: voteStatus
  } = pollDetails;
  const [isPending, setPending] = useState(
    new Array(categories.length).fill(false)
  );

  const handleVote = (categoryId, candidateId) => {
    pollContract.methods
      .vote(categoryId, candidateId)
      .send({ from: account, gas: 3000000 })
      .then(() => {
        onVoteStatus(categoryId);
      })
      .catch(error => {
        let pending = isPending;
        pending[categoryId] = false;
        getRevertReason(error.receipt.transactionHash, "kovan").then(
          message => {
            alert(message);
            setPending(pending);
          }
        );
        console.log(error);
      });
  };

  const handlePending = categoryId => {
    let pending = [...isPending];
    pending[categoryId] = true;
    setPending(pending);
  };

  useEffect(() => {
    pollContract.events.voteCasted(error => {
      if (error) console.log(error);
      pollContract.methods
        .getPollStatus()
        .call({ from: account, gas: 3000000 })
        .then(categories => {
          onPollStatus(categories);
        });
    });
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

        <Categories
          isBasicPoll={isBasicPoll}
          categories={categories}
          voteStatus={voteStatus}
          onVote={handleVote}
          isPending={isPending}
          onPending={handlePending}
        />
      </div>
    </main>
  );
};

export default Poll;
