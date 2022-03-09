import React from "react";
import AddCandidate from "./addCandidate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Category = ({
  isBasic,
  categoryId,
  category,
  onAddCandidate,
  onRemoveCandidate
}) => {
  return (
    <div
      className={
        "block bg-bkblue border-2 border-bdblue rounded-md mt-3" +
        (isBasic ? " pt-5" : "")
      }
    >
      {isBasic ? null : (
        <div className="flex items-center relative w-90/0 m-auto mt-4 mb-5">
          <h4 className="inline-block font-medium text-sml">{category.name}</h4>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            className="inline-block absolute text-bkblue bg-mblue rounded-full right-0 h-2.5 w-2.5 p-1"
          />
        </div>
      )}
      {category.candidates.map((candidate, index) => (
        <div key={index} className="relative w-90/0 m-auto mb-4">
          <input
            type="text"
            value={candidate}
            readOnly
            className="font-medium text-sm border-2 border-bdblue focus:outline-none rounded-md w-full h-10 p-2.5"
          />
          <button
            onClick={() => onRemoveCandidate(categoryId, index)}
            className="absolute bg-mblue border-0 w-15/0 h-full top-0 right-0 rounded-tr-md rounded-br-md cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} className="text-bkblue" />
          </button>
        </div>
      ))}
      <AddCandidate categoryId={categoryId} onAddCandidate={onAddCandidate} />
    </div>
  );
};

export default Category;
