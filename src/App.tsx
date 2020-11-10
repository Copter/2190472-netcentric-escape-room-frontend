import React from "react";
import "./App.css";
import Background from "./commons/components/Background";
import Controller from "./modules/controller";
import BackgroundProvider from "./program/context";
import SocketProvider from "./socket/context";

function App() {
  return (
    <SocketProvider>
      <BackgroundProvider>
        <Background>
          <Controller />
        </Background>
      </BackgroundProvider>
    </SocketProvider>
  );
}

export default App;
