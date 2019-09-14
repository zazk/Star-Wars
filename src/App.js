import React from "react";
import Grid from "./components/Grid/Grid";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid />
    </div>
  );
}

export default App;
