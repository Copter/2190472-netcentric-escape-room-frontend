import React, { useContext, useMemo, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const PrejoinRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  const [roomId, setRoomId] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
    audio.play();
  };

  const handlePrejoinGame = () => {
    emit(Event.FIND_LOBBY, roomId);
    setSubmitted(true);
    audio.play();
  };

  const hasError = submitted && !programData.roomID;

  return (
    <div className="formPageShort">
      Room ID:{" "}
      <input
        className="formField"
        type="text"
        value={roomId}
        onChange={handleIdChange}
      />
      <br />
      <button className="formBtn" type="submit" onClick={handlePrejoinGame}>
        Join Game
      </button>
      <br />
      {hasError && "Room Not Found!"}
    </div>
  );
};

export default PrejoinRoom;
