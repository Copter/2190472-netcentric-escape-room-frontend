import { useContext, useState } from "react";
import { Game } from "../interfaces";
import { SocketContext } from "../socket/context";

const useGame = () => {
  const [game] = useState<Game | null>(null);
  const { emit, programData } = useContext(SocketContext);

  return game;
};

export default useGame;
