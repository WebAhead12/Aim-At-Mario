import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";
import Game from "./components/Targets.jsx";
function App() {
  const [shown, setShown] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [startGame, setStartGame] = React.useState(false);
  return (
    <div>
      <h1>Aim At Mario</h1>
      <div className="target">
        {startGame ? (
          <Game score={score} setScore={setScore} />
        ) : (
          <div className="startGame" onClick={() => setStartGame(!startGame)}>
            Start
          </div>
        )}
      </div>
      <div className="weaponSelector">
        <WeaponSelector shown={shown} setShown={setShown} count={count} setCount={setCount}></WeaponSelector>
      </div>
    </div>
  );
}

export default App;
