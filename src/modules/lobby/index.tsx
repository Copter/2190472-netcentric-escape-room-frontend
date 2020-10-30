import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";
import { HatType } from "../../interfaces";

const Lobby = () => {
  const { emit, programData } = useContext(SocketContext);

  const hatType = programData.myPlayer?.hatType || 0;

  const changeCostome = () => {
    const newPlayer = { ...programData.myPlayer, hatType: 1 - hatType };
    emit(Event.CHANGE_COSTOME, newPlayer);
  };

  const isRoonOwner = programData.game?.players[0];

  return (
    <div>
      {hatType}
      <button type="button" onClick={changeCostome}>
        Change hat type
      </button>
      {isRoonOwner && (
        <button type="button" onClick={changeCostome}>
          Start Game
        </button>
      )}
    </div>
  );
};

export default Lobby;
