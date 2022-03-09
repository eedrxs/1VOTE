import React from "react";

const PollType = () => {
  let inputTitle = "block text-sml font-medium mb-3";
  let radio = "relative top-0.5 w-4 h-4 mr-2";

  return (
    <div className="flex items-baseline">
      <input type="radio" id="basic" name="poll-type" className={radio} />
      <label htmlFor="basic" className={inputTitle + " mr-5"}>
        Basic
      </label>
      <input type="radio" id="categorised" name="poll-type" className={radio} />
      <label htmlFor="categorised" className={inputTitle}>
        Categorised
      </label>
    </div>
  );
};

export default PollType;
