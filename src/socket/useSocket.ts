import { useEffect, useReducer, useState } from "react";
import socketIOClient from "socket.io-client";
import { Event } from "../constants";
import { Game, Player } from "../interfaces";
import socketReducer from "./reducer";

const ENDPOINT = "http://127.0.0.1:8000";

const useSocket = () => {
  const [socket] = useState(socketIOClient(ENDPOINT));
  const [programData, dispatch] = useReducer(socketReducer, {
    game: null,
    myPlayer: null,
    roomID: null,
  });

  useEffect(() => {
    socket.on(Event.CREATE_GAME, (data: Player) => {
      dispatch({ type: Event.CREATE_GAME, payload: data });
    });
    socket.on(Event.PREJOIN_ROOM, (status: boolean) => {
      dispatch({ type: Event.PREJOIN_ROOM, payload: status });
    });
    socket.on(Event.JOIN_ROOM, (data: Player) => {
      dispatch({ type: Event.JOIN_ROOM, payload: data });
    });
    socket.on(Event.PLAY_GAME, (data: Game) => {
      dispatch({ type: Event.PLAY_GAME, payload: data });
    });
  }, [socket]);

  return { emit: socket.emit, programData };
};

export default useSocket;
