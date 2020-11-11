import React, { useContext } from "react";
import { BackgroundColor } from "../../constants";
import { ProgramContext } from "../../program/context";

interface PropTypes {
  children: React.ReactNode;
}

const Background = ({ children }: PropTypes) => {
  const { background, setBackground } = useContext(ProgramContext);

  const changeBackground = () => {
    setBackground(
      background === BackgroundColor.BLUE
        ? BackgroundColor.BROWN
        : BackgroundColor.BLUE
    );
  };

  const styles = {
    backgroundColor: background,
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={styles}>
      <button type="button" onClick={changeBackground}>
        Change Background
      </button>
      {children}
    </div>
  );
};

export default Background;
