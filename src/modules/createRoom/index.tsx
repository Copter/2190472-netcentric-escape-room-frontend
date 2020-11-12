import React, { useContext, useMemo, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const CreateRoom = () => {
  const { emit } = useContext(SocketContext);
  const [playerName, setPlayerName] = useState<string>("");
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleCreateGame = () => {
    emit(Event.CREATE_GAME, playerName);
    audio.play();
  };

  return (
    <div className="formPageShort">
      Name:{" "}
      <input
        className="formField"
        type="text"
        value={playerName}
        onChange={handleNameChange}
      />
      <br />
      <button className="formBtn" type="submit" onClick={handleCreateGame}>
        Create Game
      </button>
    </div>
  );
};

export default CreateRoom;
