import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faSpinner,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

let sectionTitle = "text-base font-bold mb-6";

const EligibleVoters = ({ onVotersUpload }) => {
  const [currentIcon, changeCurrentIcon] = useState({
    icon: faFileArrowUp,
    spin: false
  });

  return (
    <div className="w-90/0 pt-4 pb-7 mx-auto">
      <h4 className={sectionTitle}>Eligible voters</h4>
      <div className="flex justify-center items-center w-full border-2 border-dashed border-mblue rounded-md bg-bkblue h-30 m-auto mb-4">
        <label
          className="font-sans font-bold text-base border-2 border-mblue rounded-md bg-ablue hover:bg-dablue cursor-pointer pt-2.5 pb-2.5 pl-7.5 pr-7.5 mb-0"
          htmlFor="upload"
        >
          <span className="pr-4">Upload</span>
          <FontAwesomeIcon icon={currentIcon.icon} spin={currentIcon.spin} />
        </label>
        <input
          className="hidden"
          type="file"
          id="upload"
          accept="application/json,.json"
          onChange={event => {
            changeCurrentIcon({ icon: faSpinner, spin: true });
            const reader = new FileReader();

            reader.onload = event => {
              let votersAddresses = JSON.parse(event.target.result);
              for (let key in votersAddresses) {
                votersAddresses = votersAddresses[key];
                break;
              }
              onVotersUpload(votersAddresses);
              changeCurrentIcon({ icon: faCircleCheck, spin: false });
            };

            if (event.target.files[0]) {
              reader.readAsText(event.target.files[0]);
              return;
            }

            changeCurrentIcon({ icon: faFileArrowUp, spin: false });
          }}
        />
      </div>
      <p className="font-sans font-medium text-xxs mb-4">
        Upload JSON document containing a single array containing the account
        addresses of eligible participants
      </p>
    </div>
  );
};

export default EligibleVoters;
