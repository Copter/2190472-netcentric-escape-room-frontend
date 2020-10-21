import React, { useContext } from "react";
import { SocketContext } from "../socket/context";

const JoinRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  return <div>Join Room</div>;
};

export default JoinRoom;
