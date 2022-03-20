import React from "react";
import Category from "./category";

const Categories = ({ isBasicPoll, categories, voteStatus, onVote }) => {
  return (
    <React.Fragment>
      {categories.map(
        ([categoryId, categoryName, totalVotes, candidates], index) => (
          <Category
            key={categoryId}
            isBasicPoll={isBasicPoll}
            categoryId={categoryId}
            categoryName={categoryName}
            candidates={candidates}
            totalVotes={totalVotes}
            voteStatus={voteStatus[categoryId]}
            onVote={onVote}
          />
        )
      )}
    </React.Fragment>
  );
};

export default Categories;
