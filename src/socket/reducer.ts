import { Reducer } from "react";
import { Game, Player, Program } from "../interfaces";
import { Event } from "../constants";

interface DispatchEvent {
  type: Event;
  payload: Game | Player | Player[] | null | string;
}

const socketReducer: Reducer<Program, DispatchEvent> = (state, action) => {
  switch (action.type) {
    case Event.FIND_LOBBY:
      return { ...state, game: null, roomID: action.payload as string };
    case Event.PLAY_GAME: {
      const game = action.payload as Game;
      const { players } = game;
      const myPlayer =
        players.find(({ id }) => id === state.myPlayer?.id) ||
        players[players.length - 1];
      return {
        ...state,
        myPlayer,
        game: action.payload as Game,
        gameStart: true,
      };
    }
    case Event.JOIN_LOBBY: {
      const game = action.payload as Game;
      const { players, roomCode } = game;
      const myPlayer =
        players.find(({ id }) => id === state.myPlayer?.id) ||
        players[players.length - 1];
      return {
        ...state,
        roomID: roomCode,
        game,
        myPlayer,
        gameStart: false,
      };
    }
    default:
      throw new Error();
  }
};

export default socketReducer;
