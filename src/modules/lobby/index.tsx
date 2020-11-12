import React, { useContext, useMemo, useState } from "react";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";
import { Player, PlayerType } from "../../interfaces";
import { generateCharacterUrl } from "../../commons/utils";

const Lobby = () => {
  const { emit, programData } = useContext(SocketContext);
  const [timer, setTimer] = useState(programData.game?.maxTimer);
  const [isTutorialStart, setTutorialStart] = useState(true);
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);

  const hatType = programData.myPlayer?.hatType || 0;

  const changeCostome = () => {
    const newPlayer = { ...programData.myPlayer, hatType: 1 - hatType };
    emit(Event.CHANGE_COSTUME, newPlayer);
    audio.play();
  };

  const changeTimer = () => {
    const data = { player: programData.myPlayer, timer };
    emit(Event.CHANGE_TIMER, data);
    audio.play();
  };

  const startGame = () => {
    emit(Event.PLAY_GAME, programData.myPlayer);
    audio.play();
  };

  const doneTutorial = () => {
    setTutorialStart(false);
    audio.play();
  };

  const isRoomOwner = programData.myPlayer === programData.game?.players[0];
  const isPlayerEnough = (programData.game?.players.length || 0) >= 2;

  if (isTutorialStart) {
    return (
      <div className="rulesPage">
        <h1>Tutorial</h1>
        <p>
          <b>Welcome to Escape Plan!</b>
          <br />
          Objective of the Game:
          <br />
          <b>Warder:</b> Catch the Prisoner before the prisoner escapes!
          <br />
          <b>Prisoner:</b> Run for your life to the tunnel!
          <br />
          <br />
          <b>Rules:</b>
          <br />
          1. 10 seconds to move your character to a designated position
          <br />
          2. If the prisoner reached the tunnel, prisoner will win
          <br />
          3. If the warder goes in the same block as the prisoner, warder will
          win
          <br />
          4. Obstacle blocks are not accessible except the tunnel block (only
          the prisoner is allowed)
          <br />
          <br />
          Warder Tips: Run close to the predicted tunnel block instead of
          running after the prisoner
          <br />
          Prisoner Tips: Use obstacle as advantage
        </p>
        <button className="formBtn" type="button" onClick={doneTutorial}>
          Done
        </button>
      </div>
    );
  }

  const characterUrl = generateCharacterUrl(programData.myPlayer);

  return (
    <div className="formPageLong">
      {programData.game?.players.map((player: Player) =>
        player.playerType !== PlayerType.SPECTATOR ? (
          <div>Player: {player.name}</div>
        ) : (
          <div>Spectator: {player.name}</div>
        )
      )}
      Room Code: {programData.roomID} <br />
      {programData.myPlayer?.playerType !== PlayerType.SPECTATOR && (
        <>
          <img src={characterUrl} alt="character" />
          <button className="formBtn24" type="button" onClick={changeCostome}>
            Change Costume
          </button>
        </>
      )}
      <div>Timer: {programData.game?.maxTimer}</div>
      {isRoomOwner && (
        <div>
          New Timer:&nbsp;
          <input
            className="formField24"
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
          <button className="formBtn24" type="button" onClick={changeTimer}>
            Change Timer
          </button>
        </div>
      )}
      <br />
      {isRoomOwner && isPlayerEnough && (
        <button className="formBtn" type="button" onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
};

export default Lobby;
