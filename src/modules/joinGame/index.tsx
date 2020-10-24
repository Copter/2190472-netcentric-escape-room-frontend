import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const JoinRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  const [playerName, setPlayerName] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleJoinGame = () => {
    emit(Event.JOIN_ROOM, { playerName, roomCode: programData.roomID });
  };

  return (
    <div>
      Joining Room {programData.roomID}
      <br />
      Name: <input type="text" value={playerName} onChange={handleNameChange} />
      <button type="submit" onClick={handleJoinGame}>
        Join Game
      </button>
    </div>
  );
};

export default JoinRoom;
