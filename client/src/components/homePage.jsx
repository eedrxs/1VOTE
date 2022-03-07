import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <main className="bg-bkblue h-screen w-screen">
        <h1 className="font-sans font-extrabold text-6xl text-center text-mblue pt-40">
          1VOTE
        </h1>

        <Link
          to="/poll-setup"
          className="block py-5 w-80 mx-auto mt-44 bg-mblue font-medium text-white text-center rounded-2xl"
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
  }
}

export default HomePage;
