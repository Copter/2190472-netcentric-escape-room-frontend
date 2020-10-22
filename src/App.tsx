import React from "react";
import "./App.css";
import Controller from "./modules/controller";
import SocketProvider from "./socket/context";

function App() {
  return (
    <SocketProvider>
      <Controller />
    </SocketProvider>
  );
}

export default App;
