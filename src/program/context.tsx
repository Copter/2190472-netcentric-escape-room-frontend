import React from "react";
import { BackgroundColor } from "../constants";
import useProgram from "./useProgram";

export const ProgramContext = React.createContext(({
  background: BackgroundColor.BLUE,
  setBackground: () => {},
} as unknown) as ReturnType<typeof useProgram>);

interface PropTypes {
  children: React.ReactNode;
}

const BackgroundProvider = ({ children }: PropTypes) => {
  const { background, setBackground } = useProgram();
  return (
    <ProgramContext.Provider value={{ background, setBackground }}>
      {children}
    </ProgramContext.Provider>
  );
};

export default BackgroundProvider;
