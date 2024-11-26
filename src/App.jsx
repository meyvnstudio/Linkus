import { useState } from "react";
import VideoInterface from './components/VideoInterface';
import "./App.css";

function App() {

  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <h1>Ultimate Video Interface Generator</h1>
          <p>Create seamless video interfaces with ease!</p>
        </header>
        <main>
          <VideoInterface />
        </main>
      </div>
    </>
  );
}

export default App;
