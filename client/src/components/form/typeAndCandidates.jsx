import React from "react";
import PollType from "./pollType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const TypeAndCandidates = props => {
  let sectionTitle = "text-base font-bold mb-6";

  return (
    <React.Fragment>
      <div className="w-90/0 pt-4 pb-7 mx-auto">
        <h4 className={sectionTitle}>Poll type and Candidates</h4>
        <PollType />
        <div className="block bg-bkblue border-2 border-bdblue rounded-md mt-3">
          <div className="flex items-center relative w-90/0 m-auto mt-4 mb-5">
            <h4 className="inline-block font-medium text-sml">President</h4>
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              className="inline-block absolute text-bkblue bg-mblue rounded-full right-0 h-2.5 w-2.5 p-1"
            />
          </div>
          <div className="relative w-90/0 m-auto mb-4">
            <div className="font-medium text-sm border-2 border-bdblue rounded-md w-full h-10 p-2.5 pt-2">
              Samuel Ajayi Onafuye
            </div>
            <button className="absolute bg-mblue border-0 w-15/0 h-full top-0 right-0 rounded-tr-md rounded-br-md cursor-pointer">
              <FontAwesomeIcon icon={faXmark} className="text-bkblue" />
            </button>
          </div>
          <div
            className="relative w-90/0 m-auto mb-5"
            id="add-candidate-wrapper"
          >
            <input
              type="text"
              id="add-candidate"
              placeholder="Add candidate"
              className="border-2 border-dashed border-bdblue rounded-md w-full h-10 p-2.5"
            />
            <button className="absolute bg-mblue border-0 w-15/0 h-full top-0 right-0 rounded-tr-md rounded-br-md cursor-pointer">
              <FontAwesomeIcon icon={faPlus} className="text-bkblue" />
            </button>
          </div>
        </div>
        <div className="relative mt-4 mb-4" id="add-category-wrapper">
          <input
            type="text"
            id="add-category"
            placeholder="Add category"
            className="border-2 border-dashed border-bdblue rounded-md w-full h-10 p-2.5"
          />
          <button className="absolute top-0 right-0 bg-mblue border-0 rounded-tr-md rounded-br-md h-full w-14/0 cursor-pointer">
            <FontAwesomeIcon icon={faPlus} className="text-bkblue" />
          </button>
        </div>
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default TypeAndCandidates;
