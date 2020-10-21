import React from "react";
import { Status } from "../../constants";
import useMainController from "./useMainController";
import CreateRoom from "../CreateRoom";
import Game from "../Game";
import JoinRoom from "../JoinRoom";
import SelectGame from "../SelectGame";

const Controller = () => {
  const { status, setStatus } = useMainController();
  switch (status) {
    case Status.SELECT_GAME:
      return <SelectGame selectGame={setStatus} />;
    case Status.CREATE_ROOM:
      return <CreateRoom />;
    case Status.JOIN_ROOM:
      return <JoinRoom />;
    case Status.PLAY_GAME:
      return <Game />;
    default:
      return <Game />;
  }
};

export default Controller;
