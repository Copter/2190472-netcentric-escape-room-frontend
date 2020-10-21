import React from "react";
import useGame from "../hooks/useGame";

const Game = () => {
  const game = useGame();

  return <div>game :{game}</div>;
};

export default Game;
