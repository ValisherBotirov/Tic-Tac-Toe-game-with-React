import React from "react";
import MainComponent from "./MainComponent";

function App() {
  return (
    <div className="app-header">
      <p className="heading-text">React Tic Tac Toe - 2020</p>
      <div className="row jc-center">
        <MainComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <MainComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <MainComponent
          className="b-bottom"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row jc-center">
        <MainComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <MainComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <MainComponent
          className="b-bottom"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row jc-center">
        <MainComponent
          className="b-right"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <MainComponent
          className="b-right"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <MainComponent onClick={() => onUserClicked(8)} state={gameState[8]} />
      </div>
      <button className="clear-button" onClick={clearGame}>
        Clear Game
      </button>
      <p className="fc-aqua fw-600">The Indian Dev</p>
    </div>
  );
}

export default App;
