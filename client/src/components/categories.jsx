import React, { useState, useEffect } from "react";

const category =
  "flex flex-col mx-auto my-5 w-80 xs:w-22/1 lg:w-96 bg-ablue text-mblue rounded-xl border-3 border-bdblue";

const Categories = () => {
  return (
    <React.Fragment>
      <div className={category}>
        <div className="flex flex-col w-90/0 m-auto pt-4 pb-6">
          <h1 className="font-bold text-lg mb-2">President</h1>
          <div className="grid grid-cols-5 gap-x-2 mt-4">
            <div className="relative col-span-4 font-bold text-lg border-2 border-bdblue rounded-lg bg-white p-1.5 pl-4">
              <div className="absolute left-0 top-0 h-full rounded-tl-md rounded-bl-md bg-mblue opacity-20 w-11/12"></div>
              <div className="absolute left-0 top-0 p-1.5 pl-4">
                Oluchi Arinze
              </div>
            </div>
            <div className="font-bold text-center text-xl p-1.5 pt-2">346</div>
          </div>
          <div className="grid grid-cols-5 gap-x-2 mt-4">
            <select className="col-span-4 font-bold text-lg border-2 border-bdblue rounded-lg bg-white p-1.5 pl-4">
              <option className="opacity-20">Pick a candidate</option>
              <option>Oluchi Arinze</option>
              <option>Donice Ubaru</option>
            </select>
            <button className="block font-bold text-center text-white bg-mblue rounded-lg text-sm h-95/0 my-auto p-1.5 pt-2">
              Vote
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
