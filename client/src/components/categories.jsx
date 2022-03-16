import React, { useState, useEffect } from "react";
import Category from "./category";

const Categories = ({ categories, isBasicPoll }) => {
  return (
    <React.Fragment>
      {categories.map(([categoryId, categoryName, candidates, totalVotes]) => (
        <Category
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
