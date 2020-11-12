import React, { useContext, useMemo } from "react";
import { BackgroundColor } from "../../constants";
import { ProgramContext } from "../../program/context";
import { SocketContext } from "../../socket/context";
import "./index.css";

interface PropTypes {
  children: React.ReactNode;
}

const Background = ({ children }: PropTypes) => {
  const { background, setBackground } = useContext(ProgramContext);
  const audio = useMemo(() => new Audio("/PrisonSlamSFX.mp3"), []);
  const { programData } = useContext(SocketContext);

  const changeBackground = () => {
    setBackground(
      background === BackgroundColor.BLUE
        ? BackgroundColor.BROWN
        : BackgroundColor.BLUE
    );
    audio.play();
  };

  const styles = {
    backgroundColor: background,
  };

  return (
    <div className="background" style={styles}>
      <div className="background-content">
        User Count: {programData.userCounts}&nbsp;|&nbsp;
        <button type="button" onClick={changeBackground}>
          Change Background
        </button>
        {children}
      </div>
    </div>
  );
};

export default Background;
