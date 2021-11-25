import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";
import Game from "./components/Targets.jsx";
function App() {
  const [shown, setShown] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Aim At Mario</h1>
      <div className="target">
        <Game score={score} setScore={setScore} />
      </div>
      <div className="weaponSelector">
        <WeaponSelector
          shown={shown}
          setShown={setShown}
          count={count}
          setCount={setCount}
        ></WeaponSelector>
      </div>
    </div>
  );
}

export default App;
