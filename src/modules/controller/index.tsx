import React from "react";
import { Status } from "../../constants";
import CreateRoom from "../createRoom";
import Game from "../game";
import JoinRoom from "../joinGame";
import PrejoinRoom from "../prejoinRoom";
import SelectGame from "../selectGame";
import useMainController from "./useMainController";

const Controller = () => {
  const { status, setStatus } = useMainController();

  switch (status) {
    case Status.SELECT_GAME:
      return <SelectGame selectGame={setStatus} />;
    case Status.CREATE_ROOM:
      return <CreateRoom />;
    case Status.PREJOIN_ROOM:
      return <PrejoinRoom />;
    case Status.JOIN_ROOM:
      return <JoinRoom />;
    case Status.PLAY_GAME:
      return <Game />;
    default:
      return <Game />;
  }
};

export default Controller;
