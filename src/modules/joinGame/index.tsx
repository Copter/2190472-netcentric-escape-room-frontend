import React, { useContext, useMemo, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const JoinRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  const [playerName, setPlayerName] = useState<string>("");
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
    audio.play();
  };

  const handleJoinGame = () => {
    emit(Event.JOIN_ROOM, { playerName, roomCode: programData.roomID });
    audio.play();
  };

  return (
    <div className="formPageShort">
      Joining Room {programData.roomID}
      <br />
      Name:{" "}
      <input
        className="formField"
        type="text"
        value={playerName}
        onChange={handleNameChange}
      />
      <button className="formBtn" type="submit" onClick={handleJoinGame}>
        Join Game
      </button>
    </div>
  );
};

export default JoinRoom;
