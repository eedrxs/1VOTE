import React, { useState, useEffect } from "react";

function highlightSelected(e) {
  const { options } = e.target;
  console.log(options[options.selectedIndex].value);
}

const category =
  "flex flex-col mx-auto my-5 w-80 xs:w-22/1 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

const Category = ({
  categoryId,
  categoryName,
  candidates,
  totalVotes,
  isBasicPoll
}) => {
  return (
    <div id={categoryId} className={category}>
      <div className="flex flex-col w-90/0 m-auto pt-4 pb-6">
        {isBasicPoll ? null : (
          <h1 className="font-bold text-lg mb-2">{categoryName}</h1>
        )}

        {candidates.map(([candidateId, candidate, votes]) => (
          <div className="grid grid-cols-5 gap-x-2 mt-4">
            <div
              id={candidateId}
              className="relative col-span-4 font-bold text-lg border-2 border-bdblue rounded-lg bg-white p-1.5 pl-4"
            >
              <div
                style={{ width: `${(votes / totalVotes) * 100}%` }}
                className="absolute left-0 top-0 h-full rounded-tl-md rounded-bl-md bg-mblue opacity-20"
              ></div>
              <div className="absolute left-0 top-0 p-1.5 pl-4">
                {candidate}
              </div>
            </div>
            <div className="font-bold text-center text-xl p-1.5 pt-2">
              {votes}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-5 gap-x-2 mt-4">
          <select
            onChange={highlightSelected}
            className="col-span-4 font-semibold text-lg text-mblue text-opacity-50 border-2 border-bdblue rounded-lg focus:outline-none bg-white p-1.5 pl-4"
          >
            <option value="" disabled selected hidden>
              Pick a candidate
            </option>
            {candidates.map(([candidateId, candidate]) => (
              <option value={candidateId} className="text-opacity-20">
                {candidate}
              </option>
            ))}
          </select>
          <button className="block font-bold text-center text-white bg-mblue hover:bg-dmblue rounded-lg text-sm h-95/0 my-auto p-1.5 pt-2">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
