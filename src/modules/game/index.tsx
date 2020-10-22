import React from "react";
import useGame from "./useGame";

const Game = () => {
  const game = useGame();

  return <div>game :{game}</div>;
};

export default Game;
