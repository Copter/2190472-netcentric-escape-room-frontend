import React, { useContext } from "react";
import { BackgroundColor } from "../../../constants";
import { ProgramContext } from "../../../program/context";

const Exit = () => {
  const { background } = useContext(ProgramContext);

  if (background === BackgroundColor.BLUE) {
    return <img src="/images/blue_exit.PNG" alt="Exit" />;
  }
  if (background === BackgroundColor.BROWN) {
    return <img src="/images/brown_exit.PNG" alt="Exit" />;
  }
  return <div>Exit</div>;
};

export default Exit;
