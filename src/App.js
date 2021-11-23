import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";

function App() {
  const [shown, setShown] = React.useState(false);
  return <WeaponSelector shown={shown} setShown={setShown}></WeaponSelector>;
}

export default App;
