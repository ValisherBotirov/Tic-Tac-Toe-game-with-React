import React, { useState, useEffect } from "react";
import MainComponent from "./components/MainComponent";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(clearState);
  const [isXChance, setIsXChance] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    setIsXChance(!isXChance);
    setGameState(strings);
  };

  // ekranni tozalash uchun
  const clearGame = () => {
    setGameState(clearState);
  };

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`O'yin tugadi ${winner} go'lib bo'ldi`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // console.log(
    //   "Class: App, Function: checkWinner ==",
    //   gameState[0],
    //   gameState[1],
    //   gameState[2]
    // );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className="app-header">
      <div className="row jc-center">
        <MainComponent
          className=" border"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <MainComponent
          className="border"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <MainComponent
          className=" border"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row jc-center">
        <MainComponent
          className=" border"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <MainComponent
          className="border"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <MainComponent
          className="border"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row jc-center">
        <MainComponent
          className="border"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <MainComponent
          className="border"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <MainComponent
          className="border"
          onClick={() => onUserClicked(8)}
          state={gameState[8]}
        />
      </div>
    </div>
  );
}

export default App;
