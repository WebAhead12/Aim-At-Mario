import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";
import Target from "./target.jsx";
function App() {
  const [shown, setShown] = React.useState(false);
  return (
    <div>
      <div className="target">
        <Target />
      </div>
      <div className="weaponSelector">
        <WeaponSelector shown={shown} setShown={setShown}></WeaponSelector>;
      </div>
    </div>
  );
}

export default App;
