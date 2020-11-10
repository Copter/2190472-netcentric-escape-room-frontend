/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode, useContext } from "react";
import "./index.css";
import { SocketContext } from "../../socket/context";
import { Event } from "../../constants";
import { Player, Game, PlayerType, Position } from "../../interfaces";
import Object from "./components/Object";

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
  const handleClickSquare = (posX_: number, posY_: number) => {
    const player = {
      ...currentPlayer,
      position: { x: posX_, y: posY_ },
    };
    onGameChange(player);
  };
  const squares = Array(5)
    .fill(null)
    .map((_, x) => (
      <div key={x} className="board-row">
        {new Array(5).fill(null).map((__, y) => {
          const prisonerPosition = game.players.find(
            ({ playerType }) => playerType === PlayerType.PRISONER
          )?.position;
          const warderPosition = game.players.find(
            ({ playerType }) => playerType === PlayerType.WARDER
          )?.position;

          return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <Square key={`${x} : ${y}`} onClick={() => handleClickSquare(x, y)}>
              <Object
                position={{ x, y }}
                exitPosition={game.exitPosition}
                obstaclePositions={game.obstaclePositions}
                prisonerPosition={prisonerPosition as Position}
                warderPosition={warderPosition as Position}
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

  const onGameChange = (player: Player) => {
    emit(Event.PLAY_GAME, player);
  };

  const playAgain = () => {
    emit(Event.PLAY_AGAIN, programData.game);
  };

  const resetGame = () => {
    emit(Event.RESET_GAME, programData.game);
  };

  const isRoomOwner = programData.myPlayer === programData.game?.players[0];

  return (
    <div>
      <div className="MidTopContainer">
        <div className="WhoseTurnContainer">
          {PlayerType[programData.game?.currentPlayer as PlayerType]}&#39;S TURN
        </div>
        <div className="TimerContainer">{programData.game?.timer}</div>
      </div>
      score: {programData.myPlayer?.victory}
      game: {programData?.roomID}
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
          <button onClick={playAgain} type="button">
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default GameBoard;
