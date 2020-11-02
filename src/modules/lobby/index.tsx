import React, { useContext } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";

const Lobby = () => {
  const { emit, programData } = useContext(SocketContext);

  const hatType = programData.myPlayer?.hatType || 0;

  const changeCostome = () => {
    const newPlayer = { ...programData.myPlayer, hatType: 1 - hatType };
    emit(Event.CHANGE_COSTUME, newPlayer);
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
      {isRoomOwner && isPlayerEnough && (
        <button type="button" onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
};

export default Lobby;
