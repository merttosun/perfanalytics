import React from "react";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <h1>Perf Analytics</h1>
      <Main />
    </div>
  );
}

export default App;
