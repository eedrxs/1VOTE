import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="bg-bkblue h-screen w-screen">
      <h1 className="font-sans font-extrabold text-7xl text-center text-mblue pt-40">
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
        className="block py-5 w-80 mx-auto mt-44 sm:mt-60 bg-mblue font-medium text-white text-center rounded-2xl"
      >
        Set up a poll
      </Link>

      <Link
        to="/join-poll"
        className="block py-5 w-80 mx-auto mt-4 bg-lemon font-medium text-mblue text-center rounded-2xl"
      >
        Join a poll
      </Link>
    </main>
  );
};

export default HomePage;
