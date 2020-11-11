import React, { useContext, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";
import { HatType, Player, PlayerType } from "../../interfaces";
import { generateCharacterUrl } from "../../commons/utils";

const Lobby = () => {
  const { emit, programData } = useContext(SocketContext);
  const [timer, setTimer] = useState(programData.game?.maxTimer);
  const [isTutorialStart, setTutorialStart] = useState(true);

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

  const doneTutorial = () => {
    setTutorialStart(false);
  };

  const isRoomOwner = programData.myPlayer === programData.game?.players[0];
  const isPlayerEnough = (programData.game?.players.length || 0) >= 2;

  if (isTutorialStart) {
    return (
      <div>
        <h1>Tutorial</h1>
        <p>
          Welcome to Escape Plan! Objective of the Game: Warder: Catch the
          Prisoner before the prisoner escapes! Prisoner: Run for your life to
          the tunnel! Rules: 1. 10 seconds to move your character to a
          designated position 2. If the prisoner reached the tunnel, prisoner
          will win 3. If the warder goes in the same block as the prisoner,
          warder will win 4. Obstacle blocks are not accessible except the
          tunnel block(only the prisoner is allowed) Warder Tips: Run close to
          the predicted tunnel block instead of running after the prisoner
          Prisoner Tips: Use obstacle as advantage
        </p>
        <button type="button" onClick={doneTutorial}>
          Done
        </button>
      </div>
    );
  }

  const characterUrl = generateCharacterUrl(programData.myPlayer);

  return (
    <div>
      {programData.game?.players.map((player: Player) =>
        player.playerType !== PlayerType.SPECTATOR ? (
          <div>Player: {player.name}</div>
        ) : (
          <div>Spectator: {player.name}</div>
        )
      )}
      roomCode: {programData.roomID} <br />
      {programData.myPlayer?.playerType !== PlayerType.SPECTATOR && (
        <>
          <img src={characterUrl} alt="character" />
          <button type="button" onClick={changeCostome}>
            Change Custome
          </button>
        </>
      )}
      <div>timer: {programData.game?.maxTimer}</div>
      {isRoomOwner && (
        <div>
          new timer:
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
