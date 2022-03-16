import React, { useState, useEffect } from "react";

const category =
  "flex flex-col mx-auto my-5 w-80 xs:w-22/1 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

const Category = ({
  categoryId,
  categoryName,
  candidates,
  totalVotes,
  isBasicPoll
}) => {
  let [selectedCandidate, setSelectedCandidate] = useState("null");

  return (
    <div id={categoryId} className={category}>
      <div className="flex flex-col w-90/0 m-auto pt-4 pb-6">
        {isBasicPoll ? null : (
          <h1 className="font-bold text-lg mb-2">{categoryName}</h1>
        )}

        {/* Candidates */}

        {candidates.map(([candidateId, candidateName, votes]) => (
          <div key={candidateId} className="grid grid-cols-5 gap-x-2 mt-4">
            <div
              id={candidateId}
              className={
                "relative col-span-4 font-bold text-lg border-2 rounded-lg border-bdblue bg-white p-1.5 pl-4" +
                (candidateId == selectedCandidate ? " ring-2" : "")
              }
            >
              <div
                style={{ width: `${(votes / totalVotes) * 100}%` }}
                className="absolute left-0 top-0 h-full rounded-tl-md rounded-bl-md bg-mblue opacity-20"
              ></div>
              <div className="absolute left-0 top-0 p-1.5 pl-4">
                {candidateName}
              </div>
            </div>
            <div className="font-bold text-center text-xl p-1.5 pt-2">
              {votes}
            </div>
          </div>
        ))}

        {/* Select candidate */}

        <div className="grid grid-cols-5 gap-x-2 mt-4">
          <select
            value={selectedCandidate}
            onChange={event => {
              const { options } = event.target;
              setSelectedCandidate(options[options.selectedIndex].value);
            }}
            className={
              "col-span-4 font-semibold text-lg text-mblue text-opacity-50 border-2 rounded-lg border-bdblue focus:outline-none bg-white p-1.5 pl-4" +
              (selectedCandidate !== "null" ? " ring-2" : "")
            }
          >
            <option value="null" disabled hidden>
              Pick a candidate
            </option>
            {candidates.map(([candidateId, candidateName]) => (
              <option
                key={candidateId}
                value={candidateId}
                className="text-opacity-20"
              >
                {candidateName}
              </option>
            ))}
          </select>
          <button
            type="button"
            className={
              "block font-bold text-center text-white rounded-lg text-sm h-95/0 my-auto p-1.5 pt-2" +
              (selectedCandidate === "null"
                ? " bg-gray-500"
                : " bg-mblue hover:bg-dmblue")
            }
            disabled={selectedCandidate === "null" ? true : false}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
