import React from "react";

const PollDetails = props => {
  let sectionTitle = "text-base font-bold mb-6";
  let inputTitle = "block text-sml font-medium mb-3";
  let textInput = "block w-full border-2 border-bdblue rounded-md mb-4 p-2";

  return (
    <React.Fragment>
      <div className="w-11/12 pt-4 pb-4 mx-auto">
        <h4 className={sectionTitle}>Poll details</h4>
        <label htmlFor="poll-title" className={inputTitle}>
          Title of poll
        </label>
        <input
          type="text"
          id="poll-title"
          className={textInput}
          onBlur={event => props.onTitle(event.target.value)}
        />
        <label htmlFor="poll-code" className={inputTitle}>
          Poll code
        </label>
        <input
          type="text"
          id="poll-code"
          className={textInput}
          onBlur={event => props.onPollCode(event.target.value)}
        />
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default PollDetails;
