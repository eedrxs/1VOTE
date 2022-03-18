import React, { useState, useEffect } from "react";
import Category from "./category";

const Categories = ({ categories, isBasicPoll, onVote }) => {
  return (
    <React.Fragment>
      {categories.map(([categoryId, categoryName, totalVotes, candidates]) => (
        <Category
          key={categoryId}
          categoryId={categoryId}
          categoryName={categoryName}
          candidates={candidates}
          totalVotes={totalVotes}
          isBasicPoll={isBasicPoll}
          onVote={onVote}
        />
      ))}
    </React.Fragment>
  );
};

export default Categories;
