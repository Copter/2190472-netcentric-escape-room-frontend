import { useEffect, useReducer } from "react";
import socketIOClient from "socket.io-client";
import { Event } from "../constants";
import { Game } from "../interfaces";
import socketReducer from "./reducer";

const ENDPOINT = "http://127.0.0.1:8000";

const socket = socketIOClient(ENDPOINT, { reconnection: false });

const useSocket = () => {
  const [programData, dispatch] = useReducer(socketReducer, {
    game: null,
    myPlayer: null,
    roomID: null,
    gameStart: false,
    userCounts: 0,
  });

  useEffect(() => {
    socket.on(Event.FIND_LOBBY, (roomID: string) => {
      dispatch({ type: Event.FIND_LOBBY, payload: roomID });
    });
    socket.on(Event.PLAY_GAME, (data: Game) => {
      dispatch({ type: Event.PLAY_GAME, payload: data });
    });
    socket.on(Event.JOIN_LOBBY, (data: Game) => {
      dispatch({ type: Event.JOIN_LOBBY, payload: data });
    });
    socket.on(Event.CURRENT_USERS_COUNT, (count: number) => {
      dispatch({ type: Event.CURRENT_USERS_COUNT, payload: count });
    });
  }, []);

  return {
    emit: (event: string, ...args: any[]) => socket.emit(event, ...args),
    programData,
  };
};

export default useSocket;
