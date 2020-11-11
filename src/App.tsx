import React from "react";
import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import Background from "./commons/components/Background";
import Controller from "./modules/controller";
import BackgroundProvider from "./program/context";
import SocketProvider from "./socket/context";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <SocketProvider>
      <BackgroundProvider>
        <Background>
          <Controller />
          <div className="audio-player">
            <AudioPlayer loop autoPlay src="/bg_music.mp3" volume={0.2} />
          </div>
        </Background>
      </BackgroundProvider>
    </SocketProvider>
  );
}

export default App;
