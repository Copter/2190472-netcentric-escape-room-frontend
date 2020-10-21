import React from "react";
import "./App.css";
import CreateRoom from "./components/CreateRoom";
import Game from "./components/Game";
import JoinRoom from "./components/JoinRoom";
import SelectGame from "./components/SelectGame";
import { Status } from "./constants";
import useMainController from "./hooks/useMainController";

function App() {
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
}

export default App;
