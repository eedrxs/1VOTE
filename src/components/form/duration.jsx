import React from "react";
import isIOS from "../utils/isIOS";

let sectionTitle = "text-base font-bold mb-6";
let inputTitle = "block text-sml font-medium mb-3";
let dateInput =
  "w-full h-11 border-2 border-bdblue rounded-md bg-bkblue focus:outline-none focus:ring p-2 mb-4";

const Duration = props => {
  let dateElement = isIOS() ? "date" : "datetime-local";

  return (
    <React.Fragment>
      <div className="w-90/0 pt-4 pb-7 mx-auto">
        <h4 className={sectionTitle}>Duration</h4>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="start-time" className={inputTitle}>
              Start
            </label>
            <input
              type={dateElement}
              id="start-time"
              className={dateInput}
              required
              onBlur={event => props.onStartTime(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="end-time" className={inputTitle + " text-right"}>
              End
            </label>
            <input
              type={dateElement}
              id="end-time"
              className={dateInput}
              required
              onBlur={event => props.onEndTime(event.target.value)}
            />
          </div>
        </div>
      </div>
      <hr className="border-b-2 border-t-0 border-bdblue" />
    </React.Fragment>
  );
};

export default Duration;
