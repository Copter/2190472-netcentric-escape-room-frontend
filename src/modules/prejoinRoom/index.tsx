import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const PrejoinRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  const [roomId, setRoomId] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
  };

  const handlePrejoinGame = () => {
    emit(Event.PREJOIN_ROOM, roomId);
    setSubmitted(true);
  };

  const hasError = submitted && !programData.roomID;

  return (
    <div>
      Room ID: <input type="text" value={roomId} onChange={handleIdChange} />
      <button type="submit" onClick={handlePrejoinGame}>
        Join Game
      </button>
      <br />
      {hasError && "Room Not Found!"}
    </div>
  );
};

export default PrejoinRoom;
