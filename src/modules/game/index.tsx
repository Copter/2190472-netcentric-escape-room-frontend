import React, { useContext, useState } from "react";
import { isPropertySignature } from "typescript";
import useGame from "./useGame";
import "./index.css";

interface PropTypes {
  value: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({ value, onClick }: PropTypes) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState<Array<number>>(Array(25).fill(null));

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => {}} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
      </div>
      <div className="board-row">
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
      <div className="board-row">
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
      </div>
      <div className="board-row">
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
      </div>
      <div className="board-row">
        {renderSquare(20)}
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
      </div>
    </div>
  );
};

const Game = () => {
  const game = useGame();

  return (
    <div>
      game: {game?.roomCode}
      <div className="board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
