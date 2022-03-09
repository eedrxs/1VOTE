import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCategory = () => {
  return (
    <div className="relative mt-4 mb-4">
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
  );
};

export default AddCategory;
