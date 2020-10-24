import { Reducer } from "react";
import { Game, Player, Program } from "../interfaces";
import { Event } from "../constants";

interface DispatchEvent {
  type: Event;
  payload: any;
}

const socketReducer: Reducer<Program, DispatchEvent> = (state, action) => {
  switch (action.type) {
    case Event.CREATE_GAME:
      return { ...state, game: null, myPlayer: action.payload as Player };
    case Event.JOIN_ROOM:
      return { ...state, game: null, myPlayer: action.payload as Player };
    case Event.PLAY_GAME:
      return { ...state, game: action.payload as Game };
    case Event.PREJOIN_ROOM:
      return { ...state, roomID: action.payload };
    default:
      throw new Error();
  }
};

export default socketReducer;
