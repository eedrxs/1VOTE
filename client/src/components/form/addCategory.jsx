import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let category = "";
const setCategory = name => {
  category = name;
};

const AddCategory = ({ onAddCategory }) => {
  return (
    <div className="relative mt-4 mb-4">
      <input
        type="text"
        id="add-category"
        placeholder="Add category"
        className="border-2 border-dashed border-bdblue rounded-md focus:outline-none focus:border-mblue focus:border-opacity-70 w-full h-10 p-2.5"
        onBlur={event => {
          setCategory(event.target.value);
          event.target.value = "";
        }}
      />
      <button
        className="absolute top-0 right-0 bg-mblue border-0 rounded-tr-md rounded-br-md hover:bg-dmblue h-full w-14/0 cursor-pointer"
        onClick={event => {
          event.preventDefault();
          onAddCategory(category);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="text-bkblue" />
      </button>
    </div>
  );
};

export default AddCategory;
