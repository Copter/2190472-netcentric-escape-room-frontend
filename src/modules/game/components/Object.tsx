import React from "react";
import { Position } from "../../../interfaces";
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
  prisonerURL: string;
  warderURL: string;
}

const Object = ({
  position,
  warderPosition,
  prisonerPosition,
  obstaclePositions,
  exitPosition,
  prisonerURL,
  warderURL,
}: PropTypes) => {
  if (position?.x === warderPosition?.x && position?.y === warderPosition?.y) {
    return <Warder url={warderURL} />;
  }
  if (
    position?.x === prisonerPosition?.x &&
    position?.y === prisonerPosition?.y
  ) {
    return <Prisoner url={prisonerURL} />;
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
  return <div />;
};

export default Object;
