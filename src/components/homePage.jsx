import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <main className="bg-bkblue h-screen w-full">
      <h1 className="font-sans font-extrabold text-7xl text-center text-mblue pt-20 xs:pt-32">
        1VOTE
      </h1>
      <p
        style={{ fontSize: "0.85rem" }}
        className="font-sans font-medium text-mblue text-center mt-2"
      >
        The Polling Platform of the Decentralized Web
      </p>

      <Link
        to="/poll-setup"
        className="block py-5 w-80 mx-auto mt-20 xs:mt-48 bg-mblue font-medium text-white text-center rounded-2xl"
      >
        Set up a poll
      </Link>

      <Link
        to="/join-poll"
        className="block py-5 w-80 mx-auto mt-4 bg-lemon font-medium text-mblue text-center rounded-2xl"
      >
        Join a poll
      </Link>
      <p className="text-center text-xs mt-12 mb-1.5">
        Made with{" "}
        <span role="img" aria-label="heart-emoji">
          💗
        </span>{" "}
        by Idris Abdul-Lateef
      </p>
      <div className="text-center">
        <a
          className="opacity-80 inline-block mr-2"
          href="https://twitter.com/eedrxs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="text-mblue" icon={faTwitter} />
        </a>
        <a
          className="opacity-80 inline-block ml-2"
          href="https://github.com/eedrxs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="text-mblue" icon={faGithub} />
        </a>
      </div>
      <p className="text-center text-xxs mt-6">
        Donate to support this project:
        <br />
        0xa6dcDeA787B1DE2eC2C43726e890B5686e3e479D
      </p>
      <div>
        <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="eedris"
          data-color="#FFDD00"
          data-emoji=""
          data-font="Lato"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
        ></script>
      </div>
    </main>
  );
};

export default HomePage;
