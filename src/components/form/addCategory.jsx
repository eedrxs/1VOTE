import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCategory = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");
  const addCategoryInput = useRef();
  const addCategoryButton = useRef();

  return (
    <div className="relative mt-4 mb-4">
      <input
        type="text"
        id="add-category"
        ref={addCategoryInput}
        placeholder="Add category"
        className="border-2 border-dashed border-bdblue rounded-md focus:outline-none focus:border-mblue focus:border-opacity-70 w-full h-10 p-2.5"
        onBlur={event => {
          setCategory(event.target.value);
          event.target.value = "";
        }}
        onKeyUp={async event => {
          if (event.key === "Enter") {
            event.preventDefault();
            await addCategoryInput.current.blur();
            addCategoryButton.current.click();
          }
        }}
      />
      <button
        type="button"
        ref={addCategoryButton}
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
