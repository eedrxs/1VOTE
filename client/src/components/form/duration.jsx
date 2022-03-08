import React from "react";

const Duration = props => {
  let sectionTitle = "text-base font-bold mb-6";
  let inputTitle = "block text-sml font-medium mb-3";
  let dateInput = "w-full h-11 border-2 border-bdblue rounded-md p-2 mb-5";

  return (
    <React.Fragment>
      <div className="w-11/12 pt-4 pb-4 mx-auto">
        <h4 className={sectionTitle}>Duration</h4>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="start-time" className={inputTitle}>
              Start
            </label>
            <input
              type="date"
              id="start-time"
              className={dateInput}
              onBlur={event => props.onStartTime(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="end-time" className={inputTitle + " text-right"}>
              End
            </label>
            <input
              type="date"
              id="end-time"
              className={dateInput}
              onBlur={event => props.onEndTime(event.target.value)}
            />
          </div>
        </div>
      </div>
      <hr className="border-b-2 border-t border-bdblue" />
    </React.Fragment>
  );
};

export default Duration;
