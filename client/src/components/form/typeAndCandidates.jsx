import React from "react";
import PollType from "./pollType";
import Category from "./category";

import AddCategory from "./addCategory";

const TypeAndCandidates = props => {
  let sectionTitle = "text-base font-bold mb-6";

  return (
    <React.Fragment>
      <div className="w-90/0 pt-4 pb-7 mx-auto">
        <h4 className={sectionTitle}>Poll type and Candidates</h4>
        <PollType isBasic={props.isBasic} onPollType={props.onPollType} />
        {props.categoriesAndCandidates.map(category => (
          <Category
            key={category.id}
            isBasic={props.isBasic}
            category={category}
            onRemoveCandidate={props.onRemoveCandidate}
          />
        ))}
        {/* <Category isBasic={props.isBasic} /> */}
        {props.isBasic ? null : <AddCategory />}
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default TypeAndCandidates;
