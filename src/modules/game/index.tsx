import React, { useContext, useState } from "react";
import { isPropertySignature } from "typescript";
import useGame from "./useGame";
import "./index.css";

interface PropTypes {
  value: string;
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
  const [squares, setSquares] = useState<string[][]>(
    Array(5)
      .fill(null)
      .map(() => new Array(5).fill(null))
  );

  const handleClickSquare = (posX: number, posY: number) => {
    const items = [...squares];
    const item = { ...items[posX], [posY]: "X" };
    // item[posY] = "X";
    items[posX] = item;
    setSquares(items);
  };

  const renderSquare = (posX: number, posY: number) => {
    return (
      <Square
        value={squares[posX][posY]}
        onClick={() => {
          handleClickSquare(posX, posY);
        }}
      />
    );
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0, 0)}
        {renderSquare(1, 0)}
        {renderSquare(2, 0)}
        {renderSquare(3, 0)}
        {renderSquare(4, 0)}
      </div>
      <div className="board-row">
        {renderSquare(0, 1)}
        {renderSquare(1, 1)}
        {renderSquare(2, 1)}
        {renderSquare(3, 1)}
        {renderSquare(4, 1)}
      </div>
      <div className="board-row">
        {renderSquare(0, 2)}
        {renderSquare(1, 2)}
        {renderSquare(2, 2)}
        {renderSquare(3, 2)}
        {renderSquare(4, 2)}
      </div>
      <div className="board-row">
        {renderSquare(0, 3)}
        {renderSquare(1, 3)}
        {renderSquare(2, 3)}
        {renderSquare(3, 3)}
        {renderSquare(4, 3)}
      </div>
      <div className="board-row">
        {renderSquare(0, 4)}
        {renderSquare(1, 4)}
        {renderSquare(2, 4)}
        {renderSquare(3, 4)}
        {renderSquare(4, 4)}
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
