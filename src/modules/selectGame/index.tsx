import React from "react";
import { Status } from "../../constants";

interface PropTypes {
  selectGame: (SelectGame: Status.CREATE_ROOM | Status.JOIN_ROOM) => void;
}

const SelectGame = ({ selectGame }: PropTypes) => {
  return (
    <div>
      <button type="button" onClick={() => selectGame(Status.CREATE_ROOM)}>
        Create Room
      </button>
      <button type="button" onClick={() => selectGame(Status.JOIN_ROOM)}>
        Join Room
      </button>
    </div>
  );
};

export default SelectGame;
