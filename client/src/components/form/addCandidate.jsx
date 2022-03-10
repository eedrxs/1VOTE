import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let candidate = "";
const setCandidate = name => {
  candidate = name;
};

const AddCandidate = ({ categoryId, onAddCandidate }) => {
  return (
    <div className="relative w-90/0 m-auto mb-5">
      <input
        type="text"
        id="add-candidate"
        placeholder="Add candidate"
        className="border-2 border-dashed border-bdblue rounded-md w-full h-10 p-2.5"
        onBlur={event => {
          setCandidate(event.target.value);
          event.target.value = "";
        }}
      />
      <button
        className="absolute bg-mblue border-0 w-15/0 h-full top-0 right-0 rounded-tr-md rounded-br-md cursor-pointer"
        onClick={() => onAddCandidate(categoryId, candidate)}
      >
        <FontAwesomeIcon icon={faPlus} className="text-bkblue" />
      </button>
    </div>
  );
};

export default AddCandidate;
