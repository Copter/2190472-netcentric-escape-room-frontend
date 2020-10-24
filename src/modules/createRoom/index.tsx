import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const CreateRoom = () => {
  const { emit } = useContext(SocketContext);
  const [playerName, setPlayerName] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleCreateGame = () => {
    emit(Event.CREATE_GAME, playerName);
  };

  return (
    <div>
      Name: <input type="text" value={playerName} onChange={handleNameChange} />
      <button type="submit" onClick={handleCreateGame}>
        Create Game
      </button>
    </div>
  );
};

export default CreateRoom;