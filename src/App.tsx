import React from "react";
import "./App.css";
import Controller from "./components/Controller";
import SocketProvider from "./socket/context";

function App() {
  return (
    <SocketProvider>
      <Controller />
    </SocketProvider>
  );
}

export default App;
