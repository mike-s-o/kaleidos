import React from "react";
import YouTube from "react-youtube";
import logo from "./logo.svg";
import "./App.css";

const VIDEOS = {
  gil: "EkBYwy88uPo",
  trump: "3I9J9IaZC7o",
  brahm: "USC5MJVZLy8"
};

function App() {
  let videos = [];
  const MAX = 10;

  for (let i = 0; i < MAX; i++) {
    videos.push(
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translateX(-50%) translateY(-50%) rotate(${(MAX - i - 1) *
            3}deg)`,
          zoom: 3 - i / 5,
          opacity: i / 10
        }}
      >
        <YouTube
          videoId={VIDEOS.trump}
          opts={{
            height: "200",
            width: "300",
            playerVars: {
              autoplay: 1,
              controls: 0,
              start: 60 * 10 + i * 200
            }
          }}
        />
      </div>
    );
  }

  return <div className="app">{videos}</div>;
}

export default App;
