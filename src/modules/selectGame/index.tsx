import React from "react";
import { Status } from "../../constants";

interface PropTypes {
  selectGame: (SelectGame: Status) => void;
}

const SelectGame = ({ selectGame }: PropTypes) => {
  return (
    <div>
      <button type="button" onClick={() => selectGame(Status.CREATE_ROOM)}>
        Create Room
      </button>
      <button type="button" onClick={() => selectGame(Status.PREJOIN_ROOM)}>
        Join Room
      </button>
    </div>
  );
};

export default SelectGame;
