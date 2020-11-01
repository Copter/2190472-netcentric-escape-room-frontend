import { Position } from "../../interfaces";

const isSamePosition = (position1?: Position, position2?: Position) => {
  return position1?.x === position2?.x && position1?.y === position2?.y;
};

export default isSamePosition;
