import { NextPage } from "next";
import React from "react";

const createGame: NextPage = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Test Id Details</h2>
        <input type="text" placeholder="game" />
        <input type="text" placeholder="game" />
        <input type="text" placeholder="game" />
      </form>
    </div>
  );
};

export default createGame;
