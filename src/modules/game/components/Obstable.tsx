import React, { useContext } from "react";
import { BackgroundColor } from "../../../constants";
import { ProgramContext } from "../../../program/context";

const Obstacle = () => {
  const { background } = useContext(ProgramContext);

  if (background === BackgroundColor.BLUE) {
    return <img src="/images/blue_obstacle.PNG" alt="Obstacle" />;
  }
  if (background === BackgroundColor.BROWN) {
    return <img src="/images/brown_obstacle.PNG" alt="Obstacle" />;
  }
  return <div>Obstacle</div>;
};

export default Obstacle;
