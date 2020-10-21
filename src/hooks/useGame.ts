import { useState } from "react";
import { Game } from "../interfaces";

const useGame = () => {
  const [game, setGame] = useState<Game | null>(null);

  return game;
};

export default useGame;
