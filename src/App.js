import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";
import Game from "./components/Targets.jsx";
function App() {
  const [shown, setShown] = React.useState(false);
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div className="target">
        <Game count={count} setCount={setCount} />
      </div>
      <div className="weaponSelector">
        <WeaponSelector shown={shown} setShown={setShown}></WeaponSelector>;
      </div>
    </div>
  );
}

export default App;
