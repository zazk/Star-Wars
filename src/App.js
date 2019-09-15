import React from "react";
import { BrowserRouter } from "react-router-dom";
import Grid from "./components/Grid/Grid";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Grid />
      </div>
    </BrowserRouter>
  );
}

export default App;
