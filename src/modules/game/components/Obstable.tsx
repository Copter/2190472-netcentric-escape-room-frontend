import React, { useContext } from "react";
import { BackgroundColor } from "../../../constants";
import { ProgramContext } from "../../../program/context";

const Obstacle = () => {
  const { background, setBackground } = useContext(ProgramContext);

  if (background === BackgroundColor.BLUE) {
    return (
      <img
        src="/images/blue_obstacle.PNG"
        alt="Obstacle"
        width="86px"
        height="86px"
      />
    );
  }
  if (background === BackgroundColor.BROWN) {
    return (
      <img
        src="/images/brown_obstacle.PNG"
        alt="Obstacle"
        width="86px"
        height="86px"
      />
    );
  }
  return <div>Obstacle</div>;
};

export default Obstacle;
