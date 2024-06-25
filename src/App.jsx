import Player from "./components/Player.jsx";

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="player 1" symbol="X" />
        <Player name="player 2" symbol="O" />
      </ol>
    </main>
  )
}

export default App
