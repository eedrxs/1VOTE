import React from "react";
import Category from "./category";

const Categories = ({
  isBasicPoll,
  categories,
  voteStatus,
  onVote,
  isPending,
  onPending
}) => {
  return (
    <React.Fragment>
      {categories.map(([categoryId, categoryName, totalVotes, candidates]) => (
        <Category
          key={categoryId}
          isBasicPoll={isBasicPoll}
          categoryId={categoryId}
          categoryName={categoryName}
          candidates={candidates}
          totalVotes={totalVotes}
          voteStatus={voteStatus[categoryId]}
          onVote={onVote}
          isPending={isPending[categoryId]}
          onPending={onPending}
        />
      ))}
    </React.Fragment>
  );
};

export default Categories;
