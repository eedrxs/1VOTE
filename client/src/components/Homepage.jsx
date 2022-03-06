import React from "react";

const HomePage = () => {
  return (
    <main className="bg-bkblue h-screen w-screen">
      <div className="font-sans text-xl font-medium pt-48 text-mblue text-center">
        <h1 className="font-sans font-bold text-6xl text-white">1VOTE</h1>
      </div>

      <div className="text-center">
        <a className="py-5 w-80 mt-24 bg-mblue font-medium text-white rounded-2xl">
          Set up a poll
        </a>
      </div>

      <div className="text-center">
        <a className="py-5 w-80 mt-4 bg-lemon font-medium text-mblue rounded-2xl">
          Join a poll
        </a>
      </div>
    </main>
  );
};

export default HomePage;
