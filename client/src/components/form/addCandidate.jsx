import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCandidate = ({ categoryId, onAddCandidate }) => {
  const [candidate, setCandidate] = useState("");
  const addCandidateInput = useRef();
  const addCandidateButton = useRef();

  return (
    <div className="relative w-90/0 m-auto mb-5">
      <input
        type="text"
        id="add-candidate"
        ref={addCandidateInput}
        placeholder="Add candidate"
        className="border-2 border-dashed border-bdblue rounded-md focus:outline-none focus:border-mblue focus:border-opacity-70 w-full h-10 p-2.5"
        onBlur={event => {
          setCandidate(event.target.value);
          event.target.value = "";
        }}
        onKeyUp={async event => {
          if (event.key == "Enter") {
            event.preventDefault();
            await addCandidateInput.current.blur();
            addCandidateButton.current.click();
          }
        }}
      />
      <button
        type="button"
        ref={addCandidateButton}
        className="absolute bg-mblue border-0 w-15/0 h-full top-0 right-0 rounded-tr-md rounded-br-md hover:bg-dmblue cursor-pointer"
        onClick={event => {
          event.preventDefault();
          onAddCandidate(categoryId, candidate);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="text-bkblue" />
      </button>
    </div>
  );
};

export default AddCandidate;
