import React from "react";

let sectionTitle = "text-base font-bold mb-6";
let inputTitle = "block text-sml font-medium mb-3";
let textInput =
  "block w-full border-2 border-bdblue bg-bkblue rounded-md focus:outline-none focus:ring mb-4 p-2";

const PollDetails = ({ onTitle, onPollCode }) => {
  return (
    <React.Fragment>
      <div className="w-90/0 pt-4 pb-7 mx-auto">
        <h4 className={sectionTitle}>Poll details</h4>
        <label htmlFor="poll-title" className={inputTitle}>
          Title of poll
        </label>
        <input
          type="text"
          id="poll-title"
          className={textInput}
          required
          autoFocus
          onBlur={event => onTitle(event.target.value)}
        />
        <label htmlFor="poll-code" className={inputTitle}>
          Poll code
        </label>
        <input
          type="text"
          id="poll-code"
          className={textInput}
          required
          onBlur={event => onPollCode(event.target.value)}
          onInput={event => {
            if (/[^a-zA-Z\d-]/.test(event.target.value)) {
              event.target.value = event.target.value.replace(
                /[^a-zA-Z\d-]/g,
                ""
              );
              alert("Only letters, numbers and dash are valid!");
            }
          }}
        />
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default PollDetails;
