import React from "react";
import { initialProgram } from "./constants";
import useSocket from "./useSocket";

export const SocketContext = React.createContext(({
  emit: () => {},
  programData: initialProgram,
} as unknown) as ReturnType<typeof useSocket>);

interface PropTypes {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: PropTypes) => {
  const { emit, programData } = useSocket();
  return (
    <SocketContext.Provider value={{ emit, programData }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
