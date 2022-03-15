import React, { useState, useEffect } from "react";
import { getPollDetails } from "./services/pollData";
import Category from "./form/category";

const page = "bg-bkblue w-full h-full box-border pt-10 pb-10";
const category =
  "flex flex-col mx-auto my-5 w-80 xs:w-22/1 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

const Poll = () => {
  const [pollDetails, setPollDetails] = useState(getPollDetails());
  const {
    pollTitle,
    pollAddress,
    startTime,
    endTime,
    categories,
    isBasicPoll
  } = pollDetails;

  useEffect(async () => {
    let _pollDetails = Object.assign({}, pollDetails);
    _pollDetails.startTime = new Date(_pollDetails.startTime * 1000).toString();
    _pollDetails.endTime = new Date(_pollDetails.endTime * 1000).toString();
    let pos = _pollDetails.startTime.indexOf("GMT");
    _pollDetails.startTime = _pollDetails.startTime.slice(0, pos - 1);
    // setPollDetails(_pollDetails);
    console.log(_pollDetails.startTime.toString());
  });

  return (
    <main className={page}>
      <div className="flex flex-col h-screen w-80 xs:w-22/1 lg:w-96 font-mono text-mblue mx-auto">
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

        <div className={category}>
          <div className="flex flex-col w-90/0 m-auto py-4">
            <h1 className="font-bold text-sm">President</h1>
            <div className="grid grid-cols-5 gap-x-2 mt-4">
              <div className="relative col-span-4 font-bold text-lg border-2 border-bdblue rounded-lg bg-white p-1.5 pl-4">
                <div className="absolute left-0 top-0 h-full rounded-tl-md rounded-bl-md bg-mblue opacity-20 w-11/12"></div>
                <div className="absolute left-0 top-0 p-1.5 pl-4">
                  Oluchi Arinze
                </div>
              </div>
              <div className="font-bold text-center text-xl p-1.5 pt-2">
                346
              </div>
            </div>
            <div className="grid grid-cols-5 gap-x-2 mt-4">
              <div className="col-span-4 font-bold text-lg border-2 border-bdblue rounded-lg bg-white p-1.5 pl-4">
                Oluchi Arinze
              </div>
              <div className="font-bold text-center text-white bg-mblue rounded-lg text-md h-90/0 p-1.5 pt-2">
                Vote
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Poll;
