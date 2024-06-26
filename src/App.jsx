import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player initialName="player 2" symbol="O" isActive={activePlayer === "O"} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </main>
  )
}

export default App
