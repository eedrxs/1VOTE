import React from "react";

function parseTime(unixTime) {
  let time = new Date(unixTime * 1000).toLocaleTimeString();
  time = time.slice(0, 5) + time.slice(-2).toLowerCase();
  let date = new Date(unixTime * 1000).toDateString().slice(4);
  return `${date} - ${time}`;
}

const PollDetails = ({ pollTitle, pollAddress, startTime, endTime }) => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-3xl text-center">{pollTitle}</h1>
      <p className="text-xsm text-center">{pollAddress}</p>
      <p className="text-xsm mt-5 text-center font-medium">
        <span className="text-xxs inline-block w-14 py-1 mr-4 bg-ablue rounded-md">
          Starts:
        </span>
        {parseTime(startTime)}
      </p>
      <p className="text-xsm mt-2 mb-8 text-center font-medium">
        <span className="text-xxs inline-block w-14 py-1 mr-4 bg-ablue rounded-md">
          Ends:
        </span>
        {parseTime(endTime)}
      </p>
    </React.Fragment>
  );
};

export default PollDetails;
