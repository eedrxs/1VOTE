import React from "react";
import PollType from "./pollType";
import Category from "./category";

import AddCategory from "./addCategory";

const TypeAndCandidates = ({
  isBasic,
  categories,
  onPollType,
  onAddCandidate,
  onRemoveCandidate
}) => {
  let sectionTitle = "text-base font-bold mb-6";

  return (
    <React.Fragment>
      <div className="w-90/0 pt-4 pb-7 mx-auto">
        <h4 className={sectionTitle}>Poll type and Candidates</h4>
        <PollType isBasic={isBasic} onPollType={onPollType} />
        {categories.map((category, index) => (
          <Category
            key={index}
            isBasic={isBasic}
            categoryId={index}
            category={category}
            onAddCandidate={onAddCandidate}
            onRemoveCandidate={onRemoveCandidate}
          />
        ))}
        {/* <Category isBasic={isBasic} /> */}
        {isBasic ? null : <AddCategory />}
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default TypeAndCandidates;
