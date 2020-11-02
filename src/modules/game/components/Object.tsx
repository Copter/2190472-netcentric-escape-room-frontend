import React from "react";
import { Position } from "../../../interfaces";
import isSamePosition from "../utils";
import Exit from "./Exit";
import Obstacle from "./Obstable";
import Prisoner from "./Prisoner";
import Warder from "./Warder";

interface PropTypes {
  position: Position;
  warderPosition: Position;
  prisonerPosition: Position;
  obstaclePositions: Position[];
  exitPosition: Position;
}

const Object = ({
  position,
  warderPosition,
  prisonerPosition,
  obstaclePositions,
  exitPosition,
}: PropTypes) => {
  if (position?.x === warderPosition?.x && position?.y === warderPosition?.y) {
    return <Warder />;
  }
  if (
    position?.x === prisonerPosition?.x &&
    position?.y === prisonerPosition?.y
  ) {
    return <Prisoner />;
  }
  if (
    obstaclePositions.find(
      (obsPosition) =>
        position?.x === obsPosition?.x && position?.y === obsPosition?.y
    )
  ) {
    return <Obstacle />;
  }
  if (position?.x === exitPosition?.x && position?.y === exitPosition?.y) {
    return <Exit />;
  }
  return <div>X</div>;
};

export default Object;
