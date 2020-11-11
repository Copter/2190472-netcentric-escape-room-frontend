/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode, useContext, useMemo } from "react";
import "./index.css";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";
import { Player, Game, PlayerType, Position } from "../../interfaces";
import Object from "./components/Object";
import { generateCharacterUrl } from "../../commons/utils";

interface SquarePropTypes {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({ children, onClick }: SquarePropTypes) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {children}
    </button>
  );
};

interface PropTypes {
  onGameChange: (player: Player) => void;
  game: Game;
  currentPlayer: Player;
}

const Board = ({ onGameChange, game, currentPlayer }: PropTypes) => {
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);
  const handleClickSquare = (posX_: number, posY_: number) => {
    const player = {
      ...currentPlayer,
      position: { x: posX_, y: posY_ },
    };
    audio.play();
    onGameChange(player);
  };
  const squares = Array(5)
    .fill(null)
    .map((_, x) => (
      <div key={x} className="board-row">
        {new Array(5).fill(null).map((__, y) => {
          const prisoner = game.players.find(
            ({ playerType }) => playerType === PlayerType.PRISONER
          );
          const warder = game.players.find(
            ({ playerType }) => playerType === PlayerType.WARDER
          );
          const warderPosition = warder?.position;
          const prisonerPosition = prisoner?.position;

          return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <Square key={`${x} : ${y}`} onClick={() => handleClickSquare(x, y)}>
              <Object
                position={{ x, y }}
                exitPosition={game.exitPosition}
                obstaclePositions={game.obstaclePositions}
                prisonerPosition={prisonerPosition as Position}
                warderPosition={warderPosition as Position}
                prisonerURL={generateCharacterUrl(prisoner as Player)}
                warderURL={generateCharacterUrl(warder as Player)}
              />
            </Square>
          );
        })}
      </div>
    ));

  return <div>{squares}</div>;
};

const GameBoard = () => {
  const { emit, programData } = useContext(SocketContext);
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);

  const onGameChange = (player: Player) => {
    emit(Event.PLAY_GAME, player);
    audio.play();
  };

  const playAgain = () => {
    emit(Event.PLAY_AGAIN, programData.game);
    audio.play();
  };

  const resetGame = () => {
    emit(Event.RESET_GAME, programData.game);
    audio.play();
  };

  const isRoomOwner = programData.myPlayer === programData.game?.players[0];
  const isMyTurn =
    programData.game?.currentPlayer === programData.myPlayer?.playerType;
  const currentTurn = PlayerType[programData.game?.currentPlayer as PlayerType];

  return (
    <div>
      <div className="MidTopContainer">
        <div className="WhoseTurnContainer">
          <div>{currentTurn}&#39;S TURN</div>
          <div>{isMyTurn ? `Your turn` : `Waiting for opponent's turn`}</div>
        </div>
        <div className="TimerContainer">{programData.game?.timer}</div>
      </div>
      <div>game: {programData?.roomID}</div>
      {isRoomOwner && (
        <button onClick={resetGame} type="button">
          Reset Game
        </button>
      )}
      {programData.game?.winner === null && (
        <div className="board">
          <Board
            onGameChange={onGameChange}
            currentPlayer={programData.myPlayer as Player}
            game={programData.game as Game}
          />
        </div>
      )}
      {programData.game?.winner !== null && (
        <>
          <div> Winner {PlayerType[programData.game?.winner as number]}</div>
          <div>
            {programData.game?.players[0].name} score:{" "}
            {programData.game?.players[0]?.victory}
          </div>
          <div>
            {programData.game?.players[1].name} score:{" "}
            {programData.game?.players[1]?.victory}
          </div>
          {programData.myPlayer?.playerType !== PlayerType.SPECTATOR && (
            <button onClick={playAgain} type="button">
              Play Again
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default GameBoard;
