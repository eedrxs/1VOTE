import React, { useState, useEffect } from "react";
import Category from "./category";

const Categories = ({ categories, isBasicPoll }) => {
  console.log(categories);
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
        />
      ))}
    </React.Fragment>
  );
};

export default Categories;
