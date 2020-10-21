import { Reducer } from "react";
import { Game, Player, Program } from "../interfaces";
import { Event } from "../constants";

interface DispatchEvent {
  type: Event;
  payload: Game | Player | boolean;
}

const socketReducer: Reducer<Program, DispatchEvent> = (state, action) => {
  switch (action.type) {
    case Event.CREATE_GAME:
      return { game: null, myPlayer: action.payload as Player };
    case Event.JOIN_ROOM:
      return { game: null, myPlayer: action.payload as Player };
    case Event.PLAY_GAME:
      return { myPlayer: state.myPlayer, game: action.payload as Game };
    case Event.PREJOIN_ROOM:
      return state;
    default:
      throw new Error();
  }
};

export default socketReducer;
