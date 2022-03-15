import React from "react";

const PollDetails = ({ pollTitle, pollAddress }) => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-3xl text-center">{pollTitle}</h1>
      <p className="text-xsm text-center">{pollAddress}</p>
      <p className="text-xsm mt-5 text-center font-medium">
        <span className="text-xxs inline-block w-14 py-1 mr-4 bg-ablue rounded-md">
          Starts:
        </span>
        Mar 15 2022 - 12:00AM
      </p>
      <p className="text-xsm mt-2 mb-8 text-center font-medium">
        <span className="text-xxs inline-block w-14 py-1 mr-4 bg-ablue rounded-md">
          Ends:
        </span>
        Mar 17 2022 - 12:00AM
      </p>
    </React.Fragment>
  );
};

export default PollDetails;
