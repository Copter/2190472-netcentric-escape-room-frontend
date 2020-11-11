import React, { useMemo } from "react";
import { Status } from "../../constants";

interface PropTypes {
  selectGame: (SelectGame: Status) => void;
}

const SelectGame = ({ selectGame }: PropTypes) => {
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);
  const onSelectGame = (status: Status) => {
    selectGame(status);
    audio.play();
  };

  return (
    <div>
      <button type="button" onClick={() => onSelectGame(Status.CREATE_ROOM)}>
        Create Room
      </button>
      <button type="button" onClick={() => onSelectGame(Status.PREJOIN_ROOM)}>
        Join Room
      </button>
    </div>
  );
};

export default SelectGame;
