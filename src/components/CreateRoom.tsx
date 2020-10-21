import React, { useContext } from "react";
import { SocketContext } from "../socket/context";

const CreateRoom = () => {
  const { emit, programData } = useContext(SocketContext);
  return <div>Create Room</div>;
};

export default CreateRoom;
