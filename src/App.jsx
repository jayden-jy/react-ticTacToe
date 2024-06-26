import Player from "./components/Player.jsx";

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player initialName="player 1" symbol="X" />
        <Player initialName="player 2" symbol="O" />
      </ol>
    </main>
  )
}

export default App
