import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const Lobby = () => {
  const { emit, programData } = useContext(SocketContext);
  const [timer, setTimer] = useState(programData.game?.maxTimer);

  const hatType = programData.myPlayer?.hatType || 0;

  const changeCostome = () => {
    const newPlayer = { ...programData.myPlayer, hatType: 1 - hatType };
    emit(Event.CHANGE_COSTUME, newPlayer);
  };

  const changeTimer = () => {
    const data = { player: programData.myPlayer, timer };
    emit(Event.CHANGE_TIMER, data);
  };

  const startGame = () => {
    emit(Event.PLAY_GAME, programData.myPlayer);
  };

  const isRoomOwner = programData.myPlayer === programData.game?.players[0];
  const isPlayerEnough = (programData.game?.players.length || 0) >= 2;

  return (
    <div>
      currentPlayer:{" "}
      {programData.game?.players.map((player) => (
        <div>{player.name}</div>
      ))}
      roomCode: {programData.roomID} <br />
      {hatType}
      <button type="button" onClick={changeCostome}>
        Change hat type
      </button>
      timer: {programData.game?.maxTimer}
      {isRoomOwner && (
        <div>
          new timer:{" "}
          <input
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
          <button type="button" onClick={changeTimer}>
            Change timer
          </button>
        </div>
      )}
      {isRoomOwner && isPlayerEnough && (
        <button type="button" onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
};

export default Lobby;
